function isCard(num) {
    return /^([1-9]{1})(\d{14}|\d{18})$/.test(num)
}
module.exports = isCard