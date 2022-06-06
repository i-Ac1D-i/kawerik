const {removeCmd} = require('../utils/Arrays')
const {prefix} = require('../../../config.json')
const {mentionRegex} = require('../utils/message')

module.exports = (client, message) => {
    let args = message.content.split(' ')
    let cmd = args[0]
    args = removeCmd(args)
    
    let flag1 = !message.author.bot
    let flag2 = cmd.startsWith(prefix)
    if(!flag1 || !flag2) return
    
}