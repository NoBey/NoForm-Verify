function isLength(value, opt) {
    const l = value.toString().length
    const min = opt.min || -Infinity
    const max = opt.max || Infinity
    if (l >= min && l <= max) return true
    return false
}
module.exports = isLength