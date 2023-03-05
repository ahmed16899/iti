const myObj = {
    [Symbol.replace]: function (str) {
        if (str.length > 15) {
            return str.slice(0, 15) + '...'

        }
        else {
            return str
        }
    }
}
const result = "hello world asdasdasddddd".replace(myObj)
console.log(result)