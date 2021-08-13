
const shell = require("shelljs");  // 执行文件操作
const argv = require('yargs').argv; // yargs 处理参数
const commit = argv._[0] || "update";

console.log(commit)

shell.exec('git add .')
shell.exec(`git commit -m "${commit}"`)
shell.exec(`git pull`)
shell.exec('git push')