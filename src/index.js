module.exports = function reverse (n) {
    // let str = String(n);
    // let arr = str.split("");
    // let revarr = arr.reverse();
    // let newstr = revarr.join("");
    // let result = Number(newstr)
    // return result
    return Number(String(n).split("").reverse().filter(item => item !='-').join(""))
}
