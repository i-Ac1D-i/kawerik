const {readdirSync} = require('fs')
const defaultDir = 'src\\scripts\\embeds'
const Paginate = require('../utils/Paginate.js')
const {pagination} = require('../db/emojisEnum')

async function RegisterEmbeds(h, message, dir = defaultDir){
    const embedDir = readdirSync(dir).filter(v => v.startsWith('_') && v.endsWith('.js'))
    let embeds = []
    let reactions = []
    for(const embed in embedDir){
        const _e = require(`${dir}\\${embed}`)
        let e = new _e(h)
        let eName = embed.split('.')[0]
        if(!pagination[embed]) return
        if(!e) return
        reactions.push(pagination[eName])
        embeds.push(e)
    }
    let _p = await new Paginate.Paginate(message, embeds, reactions)
    _p.React()
    _p.CreateCollector()
    _p.Listen()
    return _p
}

module.exports = RegisterEmbeds