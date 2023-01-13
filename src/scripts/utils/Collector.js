const filter = (reaction, user) => user.id == message.author.id

const collect = (reaction) => {
    console.log(reaction)
}

module.exports = {
    filter,
    collect
}