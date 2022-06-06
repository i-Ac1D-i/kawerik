const mentionRegex = (id) => {
    return new RegExp(`^<@!?${id}>( |)$`)
}

module.exports = {
    mentionRegex
}