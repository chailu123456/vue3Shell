
import colors from "colors";
import shell from "shelljs";
const commit = process.argv.splice(2);
let describe = "update";
if(commit.length) {
  describe = commit.join('');
}

if(describe.indexOf('build') != -1 ) {
  console.log(colors.green('打包中~~~'));
  shell.exec(`npm run viteBuild`)
  console.log(colors.green('打包成功'));
}

shell.exec('git add .')
shell.exec(`git commit -m "${describe}"`)

shell.exec(`git pull`)
console.log(colors.green('正在推送~~~~'));
shell.exec('git push origin test')
console.log(colors.green('推送成功'));