const checkLength = (arr, max, min = 1) => {
    return arr.length > min && arr.length < max
}

const removeCmd = (args) => {
    return args.filter((v, i, a) => i != 0)
}

module.exports = {
    checkLength,
    removeCmd
}