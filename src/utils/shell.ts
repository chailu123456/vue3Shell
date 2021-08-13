
// const shell = require("shelljs");  // 执行文件操作
import shell from "shelljs";
// // import  from "shelljs";
// const argv = require('yargs').argv; // yargs 处理参数
// const commit = argv._[0] || "update";
// const ag = process.argv.splice(2)
// console.log(ag)

shell.exec('git status')

// shell.exec('git add .')
// shell.exec(`git commit -m "${commit}"`)
// shell.exec(`git pull`)
// shell.exec('git push')
console.log('推送成功')