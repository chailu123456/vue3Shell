
// const shell = require("shelljs");  // 执行文件操作
import shell from "shelljs";
// // import  from "shelljs";
// import {argv} from 'yargs';
// const argv = require('yargs').argv; // yargs 处理参数
const commit = process.argv.splice(2);
// const commit = yargs.argv._[0] || "update";
console.log(commit)
let a = "update";
if(commit.length) {
  a = commit.join('')
}
console.log(a)

shell.exec('git add .')
shell.exec(`git commit -m "${commit}"`)
shell.exec(`git pull`)
console.log('正在推送')
shell.exec('git push')
console.log('推送成功')