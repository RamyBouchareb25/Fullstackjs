const {call, call2} = require("./advanced.js");
const notMe = require("./advanced2")
call2();
notMe.hello()
const fs = require("fs");
const path = require("path")
const data = fs.readFileSync(".\\advancedJavaScript\\input.txt", 'utf-8')
console.log(data)
