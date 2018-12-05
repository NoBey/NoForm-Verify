function isIdCard(idCard) {
    idCard = idCard.toString()
    if (/(^\d{18}$)/.test(idCard) && idCardEndNum(idCard) == idCard[17].toUpperCase()) return true
    return false
}

// 计算最后一位应该是多少
function idCardEndNum(idCard) {
    idCard = idCard.toString()
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    var ai = 0;
    var wi = 0;
    for (var i = 0; i < 17; i++) {
        ai = idCard[i];
        wi = factor[i];
        sum += ai * wi;
    }
    var last = parity[sum % 11];
    return last;
}
module.exports = isIdCard