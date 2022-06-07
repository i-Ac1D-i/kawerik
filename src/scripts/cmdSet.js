const {readdirSync} = require('fs')
const commands = new Map()
let keys = [];

const SetCommands = () => {
    
    const cmds = readdirSync(`${__dirname}/commands`).filter(cmd => cmd.endsWith('.js'))
    
    for(let i = 0; i < cmds.length; i++){
        const _cmd = require(`./commands/${cmds[i]}`)
        commands.set(_cmd.name, _cmd)    
    }
    
    keys = Array.from(commands.keys())
}

const Get = (cmd) => {
    let _c = commands.get(cmd)
    if(_c) return _c
    
    for(let i = 0;i < keys.length; i++){
        let c = commands.get(keys[i])
        if(c.aliases.includes(cmd)){
            _c = c
            break;
        }
    }

    return _c
}


module.exports = {
    SetCommands,
    Get,
    All: commands
}