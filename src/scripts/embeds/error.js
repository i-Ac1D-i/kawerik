const {MessageEmbed} = require('discord.js')
const localization = require('../db/localization.json')
const {colors} = require('../../../config.json')

class DiscordError {
    constructor(message, error){
        this.msg = message
        this.error = error
    }

    Create(){
        this.embed = new MessageEmbed()
        .setTitle(localization['en-US'].embeds.error.TITLE)
        .setColor(colors.error)
        .setDescription(this.error)

        this.Send()
    }    

    Send(){
        this.msg.channel.send(this.embed)
    }
}

module.exports = {
    DiscordError
}