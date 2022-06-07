const {Command} = require('../utils/Command')

const func = (message, args, client) => {
    message.channel.send('I\'m alive :D')
}

let p = {}
p.name = 'ping'
p.aliases = ['p']
p.func = func
const ping = new Command(p)
module.exports = ping