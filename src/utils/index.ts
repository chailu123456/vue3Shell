
import colors from "colors";
import shell from "shelljs";
const commit = process.argv.splice(2);
let describe = "update"; // commit信息
if(commit.length) {
  describe = commit.join('');
}
const run = async () => {
  let currentBranch = '';
  let buildParmas = null;
  if(describe.indexOf('build') != -1 ) {
    console.log(colors.green('项目打包中，请稍等片刻~~~'));

    buildParmas = new Promise((resolve,reject) => {
      console.log(2)
      const status = shell.exec(`npm run build`); // 打包失败不走catch
      if(status.indexOf('failed')) {
        reject('打包失败')
      } else {
        resolve('打包成功')
      }
    })


    // try {
    //   await new Promise((resolve,reject) => {
    //     shell.exec(`npm run build`)
    //     console.log(colors.green('打包成功'));
    //   }).then(res => {

    //   }).catch(err => {

    //   })
    // } catch(error) {
    //   console.log(222)
    //   console.log(colors.red(`打包失败${error.message}`));
    //   process.exit(1)
    // }
  }
 

  const { stdout } = shell.exec('git symbolic-ref --short -q HEAD'); // 获取当前分支
  currentBranch = stdout;
  console.log(colors.green(`当前分支为${currentBranch}`))
  
  const pushCode = () => {
    shell.exec('git add .');
    shell.exec(`git commit -m "${describe}"`);
    try {
      console.log(colors.green(`尝试推送分支 ${currentBranch} 至远程仓库`));
      const { code } = shell.exec(`git push origin ${currentBranch}`);
      console.log(code)
      if(!code) {
        console.log(colors.green(`${currentBranch} 分支推送成功`));
      } else {
        console.log(colors.red(`${currentBranch} 分支推送失败`));
        process.exit(1)
      }
    } catch(error) {
      console.log(colors.red(`推送分支失败ss: ${error.message}`))
      process.exit(1)
    }
  }
  if (buildParmas) {
    buildParmas.then(res => {
      console.log(colors.green('打包成功'));
      pushCode()
    }).catch(err => {
      console.log(colors.red(err));
    })
  } else {

    pushCode()
  }
  // try {
  //    const { stdout } = await shell.exec('git symbolic-ref --short -q HEAD'); // 获取当前分支
  //    currentBranch = stdout;
  //    console.log(colors.green(`当前分支为${currentBranch}`))
  // } catch(error) {
  //   console.log(colors.red(`获取分支失败: ${error.message}`))
  //   process.exit(1) // 以失败码退出，用于 git hooks 拦截识别
  // }
  

}

run()

