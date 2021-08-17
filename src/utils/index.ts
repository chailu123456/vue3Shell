
import colors from "colors";
import shell from "shelljs";
const commit = process.argv.splice(2);
let describe = "update"; // commit信息
if(commit.length) {
  describe = commit.join('');
}

if(describe.indexOf('build') != -1 ) {
  console.log(colors.green('打包中~~~'));
  shell.exec(`npm run viteBuild`)
  console.log(colors.green('打包成功'));
}
const currentBranch = shell.exec('git symbolic-ref --short -q HEAD'); // 获取当前分支

shell.exec('git add .');
shell.exec(`git commit -m "${describe}"`);

shell.exec(`git pull origin ${currentBranch}`);
console.log(colors.green('正在推送~~~~'));
shell.exec(`git push origin ${currentBranch}`);
console.log(colors.green('推送成功'));