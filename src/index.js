module.exports = function reverse(n) {

    let nToString = String(Math.abs(n));
    let result = "";
    for (let i = nToString.length - 1; i >= 0; i--) {

        result += nToString[i];

    }

    return +result;

}