
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
      const {code} = shell.exec(`npm run build`); // 打包失败不走catch
      // code = 0 成功
      if(code) {
        reject('打包失败')
      } else {
        resolve('打包成功')
      }
    })
  }
 
  // 获取当前分支
  const { stdout } = shell.exec('git symbolic-ref --short -q HEAD');
  currentBranch = stdout;
  console.log(colors.green(`当前分支为 ${currentBranch}`))
  
  // 代码推送
  const pushCode = () => {
    shell.exec('git add .');
    shell.exec(`git commit -m "${describe}"`);
    try {
      console.log(colors.green(`尝试推送分支 ${currentBranch} 至远程仓库`));
      // code = 0 成功
      const { code } = shell.exec(`git push origin ${currentBranch}`);
      if(!code) {
        console.log(colors.green(`${currentBranch} 分支推送成功`));
      } else {
        throw "";
      }
    } catch(error) {
      return console.log(colors.red(`推送分支失败: ${error}`))
    }
  }
  if (buildParmas) {
    buildParmas.then(res => {
      console.log(colors.green('打包成功'));
      pushCode();
    }).catch(err => {
      return console.log(colors.red(err));
    }) 
  } else {
    pushCode()
  }
}

run()


