const {Command} = require('../utils/Command')
const {heroes} = require('../db/builds.json')
const {artifacts} = require('../db/artifacts.json')
const {Filter, checkLength} = require('../utils/Arrays')
const {DiscordError} = require('../embeds/error')
const {GeneralEmbed} = require('../embeds/charsheet')
const localization = require('../db/localization.json')
const property = 'name'
const func = (message, args, client) => {
    
    let flag1 = checkLength(args, 16, 0)

    if(!flag1) return new DiscordError(message, localization['en-US'].search.NO_QUERY).Create()

    flag1 = checkLength(args, 16, 1)

    let char = Filter(heroes, property, args.join(' '))
    
    if(char.length < 1) return new DiscordError(message, localization['en-US'].search.NO_CHARACTER).Create()

    char = char[0]
    
    message.channel.send(new GeneralEmbed(char).Embed())

}

let p = {}
p.name = 'search'
p.aliases = ['s', 'find']
p.func = func

const cmd = new Command(p)

module.exports = cmd