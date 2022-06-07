const {roles} = require('../db/emojisEnum')
const {emojis} = require('../db/emojis.json')

const toEmoji = (attr) =>{
    return roles[attr]
}

const toColor = (attr) => {
    return attr == 'dark' ? 'PURPLE' : attr == 'light' ? 'YELLOW' : attr == 'fire' ? 'RED' : attr == 'ice' ? '#4287f5' : attr == 'wind' ? 'GREEN' : null
}

const toStars = (rarity) => {
    return emojis.star.repeat(rarity)
}

const getArtifact = (name) => {
    return artifacts.find(art => art.name == name)
}

const defEmbed = (e, h) => {
    e.setTitle(h.name)
    e.setDescription(`${toEmoji(h.attribute)}/${toEmoji(h.role)}\n${toStars(h.rarity)}`)
    e.setColor(toColor(h.attribute))
    e.setThumbnail(h.icon)
}

module.exports = {
    toEmoji,
    toColor,
    toStars,
    getArtifact,
    defEmbed
}