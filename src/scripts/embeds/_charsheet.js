const {MessageEmbed} = require('discord.js')
const {defEmbed} = require('../utils/Embeds')
const {hp, atk, def, spd, cr, cd, eff, res} = require('../db/emojis.json').emojis
const {getArtifact, getSet} = require('../utils/Embeds')
const {emojis} = require('../db/emojis.json')

class GeneralEmbed {
    constructor(h){
        this.hero = h
    }

    Embed(){
        let _h = this.hero
        let _a = getArtifact(_h.artifactName)
        let art = _a ? `Artifact: ${_a.name ?'**' + _a.name + `** (**+${_h.artifactLevel}**)`: 'None'}` : ''
        
        let _e = new MessageEmbed()
        defEmbed(_e, _h)
        _e.description += `
        __General Stats__
        **CP: ${_h.cp}**
        ${hp}Health: ${_h.hp}
        ${atk}Attack: ${_h.atk}
        ${def}Defense: ${_h.def}
        ${spd}Speed: ${_h.spd}
        ${cr}Crit Chance: ${_h.cr}%
        ${cd}Crit Damage: ${_h.cd}%
        ${eff}Effectiveness: ${_h.eff}%
        ${res}Resistance: ${_h.res}%

        Equipment Sets: ${getSet(_h).map((v, i, a) => emojis[v]).join(' ')}
        ${art}
        `
        return _e
    }
}

module.exports = {
    GeneralEmbed
}