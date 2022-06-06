const {Client} = require('discord.js')
const {SetCommands} = require('./src/scripts/cmdSet')
const {SetEvents} = require('./src/scripts/eventSet')
const {token} = require('./config.json')
const _Client = new Client()
with(console){
    log(1)
    _Client.login(token)
    log(2)
    SetCommands()
    log(3)
    SetEvents(_Client)
    log(4)
}