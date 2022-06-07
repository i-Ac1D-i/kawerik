const {MessageEmbed} = require('discord.js')
const {defEmbed} = require('../utils/Embeds')


class GeneralEmbed {
    constructor(h){
        this.hero = h
    }

    Embed(){
        let _h = this.hero
        let _e = new MessageEmbed()
        defEmbed(_e, _h)
        _e.description += `
        __General Stats__
        **CP: ${_h.cp}**
        •Health: ${_h.hp}
        •Attack: ${_h.atk}
        •Defense: ${_h.def}
        •Speed: ${_h.spd}
        •Crit Chance: ${_h.cr}%
        •Crit Damage: ${_h.cd}%
        •Effectiveness: ${_h.eff}%
        •Resistance: ${_h.res}%
        `
        return _e
    }
}

module.exports = {
    GeneralEmbed
}