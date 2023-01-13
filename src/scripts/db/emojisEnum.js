const {emojis} = require('./emojis.json')

const roles = {
    dark: emojis.dark,
    light: emojis.light,
    ice: emojis.ice,
    wind: emojis.earth,
    fire: emojis.fire,
    
    assassin: emojis.assassin,
    ranger: emojis.ranger,
    manauser: emojis.soul,
    knight: emojis.knight,
    warrior: emojis.warrior,
    mage: emojis.mage
}

const menu = {
    weapon: emojis.weapon,
    helmet: emojis.helmet,
    armor: emojis.armor,
    boots: emojis.boots,
    ring: emojis.ring,
    necklace: emojis.necklace,
    gsheet: emojis.gsheet,
    arti: emojis.arti
}

const pagination = {
    _artifact: emojis.arti,
    _charsheet: emojis.gsheet
}

module.exports = {
    menu, roles, pagination
}