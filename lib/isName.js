function isName(name) {
    return /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(name)
}
module.exports = isName