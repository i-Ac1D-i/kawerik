const {removeFirstElement} = require('../utils/Arrays')
const {prefix} = require('../../../config.json')
const {mentionRegex} = require('../utils/Regex')
const {Get} = require('../cmdSet')

module.exports = (client, message) => {
    let args = message.content.split(' ')
    let cmd = args[0]
    args = removeFirstElement(args)
    
    let flag1 = !message.author.bot
    let flag2 = cmd.startsWith(prefix) || message.match(mentionRegex)
    if(!flag1 || !flag2) return
    cmd = Get(cmd.slice(prefix.length))
    
    if(!cmd) return

    try{
        cmd.execute(message, args, client)
    }catch(err){
        console.log(err)
    }
}