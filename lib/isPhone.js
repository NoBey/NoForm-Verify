function isPhone(phone) {
    return  /^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(phone)
}
module.exports = isPhone