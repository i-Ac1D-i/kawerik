const {readdirSync} = require('fs')
const {checkLength} = require('./utils/Arrays')
const defaultDir = 'src\\scripts\\events'

const SetEvents = (client, dir = defaultDir) => {
    
    const events = readdirSync(dir).filter(event => event.endsWith('.js'))
    
    const flag1 = !checkLength(events, 16, 0)
    if(flag1) return
    
    for(let i = 0; i < events.length;i++){
        
        const event = require(`./events/${events[i]}`)
        
        const eventName = events[i].split('.')[0]
        
        client.on(eventName, event.bind(null, client))
        
        delete require.cache[require.resolve(`./events/${events[i]}`)]
    }
}

module.exports = {
    SetEvents
}