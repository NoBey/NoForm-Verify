function isNumber(value, opt) {
    const v = Number(value)
    const min = opt.min || -Infinity
    const max = opt.max || Infinity
    if (v >= min && v <= max) return true
    return false
}
module.exports = isNumber