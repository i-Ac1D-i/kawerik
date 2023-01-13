const {collect, filter} = require('./Collector')

class Paginate{
    constructor(message, embeds, reactions ,startingIndex = 0){
        this.msg = message
        this.embeds = embeds
        this.index = startingIndex
        this.reactions = reactions
    }
    
    Listen(event = 'collect', func = collect){
        this.collector.on(event, func)
    }

    async CreateCollector(f = filter, time = 60000){
        this.collector = await this.msg.createReactionCollector(filter, {time: time})
    }

    async NextPage(){
        let i = this.index
        i++
        if(i >= this.embeds.length) i = 0
        await this.msg.edit({embeds: [this.embeds[i]]})
        this.index = i
    }

    async PreviousPage(){
        let i = this.index
        i--
        if(i < 0) i = this.embeds.length - 1
        await this.msg.edit({embeds: [this.embeds[i]]})
        this.index = i
    }

    async jumpTo(id){
        let embed;
        for(const e of this.embeds){
            if(e['id'] == id){
                embed = e
                break;
            }
        }
        if(!embed) return 
        await this.msg.edit({embeds: [embed]})
    }

    async React(){
        console.log(this.reactions)
        for(let i=0;i<this.reactions.length;i++){
            await this.msg.react(this.reactions[i])
        }
    }
}

module.exports = {
    Paginate
}