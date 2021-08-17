
import colors from "colors";
import shell from "shelljs";
const commit = process.argv.splice(2);
let describe = "update"; // commit信息
if(commit.length) {
  describe = commit.join('');
}

const run = async () => {
  let currentBranch = '';
  if(describe.indexOf('build') != -1 ) {
    console.log(colors.green('项目打包中，请稍等片刻~~~'));
    try {
      shell.exec(`npm run build`)
      console.log(colors.green('打包成功'));
    } catch(error) {
      console.log(colors.red(`打包失败${error.message}`));
      process.exit(1)
    }
  }
  try {
     const { stdout } = await shell.exec('git symbolic-ref --short -q HEAD'); // 获取当前分支
     currentBranch = stdout;
     console.log(colors.green(`当前分支为${currentBranch}`))
  } catch(error) {
    console.log(colors.red(`获取分支失败: ${error.message}`))
    process.exit(1) // 以失败码退出，用于 git hooks 拦截识别
  }
  
  shell.exec('git add .');
  shell.exec(`git commit -m "${describe}"`);

  try {
    console.log(colors.green(`尝试推送分支 ${currentBranch} 至远程仓库`));
    shell.exec(`git push origin ${currentBranch}`);
  } catch(error) {
    console.log(colors.red(`推送分支失败: ${error.message}`))
    process.exit(1)
  }
  console.log(colors.green(`${currentBranch} 分支推送成功`));
}

run()

