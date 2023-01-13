const {MessageEmbed} = require('discord.js')
const {getArtifact, artRole, toStars, toColor} = require('../utils/Embeds')
const {replaceUpon} = require('../utils/Regex')
class Artifact{
    constructor(h){
        this.hero = h
    }
    Embed(){
        let e = new MessageEmbed()
        let h = this.hero
        let a = getArtifact(h.artifactName)
        if(!a) return
        e.setTitle(`${a.name} (+${h.artifactLevel})`)
        e.setThumbnail(a.icon)
        e.setImage(a.image)
        e.setColor(toColor(h.attribute))
        e.setFooter({text: `Equipped by ${h.name}`, iconURL: h.icon})
        e.setDescription(`
        ${toStars(a.rarity)}
        ${artRole(a.role)} Limited
        
        *${a.description}*

        Skill level: **${Math.floor(h.artifactLevel / 3)}**
        ${replaceUpon(a.skilldesc, `{{variable}}`, a.skillench[Math.floor(h.artifactLevel) / 3])}
        `)
        
        return e
    }
}

module.exports = {
    Artifact
}