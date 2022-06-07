class Command {
    constructor(cmd){
        this.name = cmd.name
        this.aliases = cmd.aliases
        this.execute = cmd.func
    }
    changeName(_name){
        this.name = _name
    }
    changeAliases(_aliases){
        this.aliases = aliases
    }
    changeFunc(_func){
        this.execute = _func
    }
}

module.exports = {
    Command
}