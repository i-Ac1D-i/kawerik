const checkLength = (arr, max, minExclusive = 0) => {
    return arr.length > minExclusive && arr.length < max
}

const removeFirstElement = (args) => {
    return args.filter((v, i, a) => i != 0)
}

const Filter = (arr, property, query) => {
    return arr.filter(_ =>_[property].toLowerCase().includes(query))
    
}

const FindProperty = (obj, query) => {
    let p;
    for(const [key, value] of Object.entries(obj)){
        if(key == query){
            p = key
            break;
        }
    }
}

module.exports = {
    checkLength,
    removeFirstElement, 
    Filter,
    FindProperty
}