const {Client} = require('discord.js')
const {SetCommands} = require('./src/scripts/cmdSet')
const {SetEvents} = require('./src/scripts/eventSet')
const {token} = require('./config.json')
const _Client = new Client()

_Client.login(token)
SetCommands()
SetEvents(_Client)

