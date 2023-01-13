const mentionRegex = (id) => {
    return new RegExp(`^<@!?${id}>( |)$`)
}
function replaceUpon(base, upon, w) {

    for (let i = 0; i < w.length; i++) {
        
        base = base.replace(`{{variable}}`,(w[i] * 100).toFixed(1).toString() + '%')
    }
    return base;
  }
  
module.exports = {
    mentionRegex,
    replaceUpon
}