const {emojis} = require('./emojis.json')

const _e = {
    helmet: emojis.helmet,
    armor: emojis.armor,
    ring: emojis.ring,
    necklace: emojis.necklace,
    weapon: emojis.weapon,
    boots: emojis.boots
}

class Paginate {
    constructor(embeds, message, __e = _e, filter){
        this.embeds = embeds
        this.message = message
        this.e = __e
        this.filter = filter || function(reaction, user){user.id == message.author.id}
        this.collector;
    }

    Begin(startingIndex = 0){

        async () => {
            await this.message.channel.send(embeds[startingIndex].embed)
            for(const [key, value] of this.e){
                await this.message.react(value)
            }
            const collector = this.message.createReactionCollector(this.filter, {time: 60000})
            collector.on(`collect`, r => {
                console.log(r)
            })
        }

        
    }
}

module.exports = Paginate