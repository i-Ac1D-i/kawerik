const {readdirSync} = require('fs')
const commands = new Map()
const defaultDir = 'src\\scripts\\commands'

const SetCommands = (dir = defaultDir) => {
    
    const cmds = readdirSync(dir).filter(cmd => cmd.endsWith('.js'))
    
    for(let i = 0; i < cmds.length; i++){
        const _cmd = require(cmds[i])
        commands.set(_cmd.name, _cmd)    
    }
    
}

const Get = (cmd) => {
    return commands.get(cmd)
}


module.exports = {
    SetCommands,
    Get,
    All: commands
}