function decendingorder(num){
    let numbersrt= String(num)
    let newarry = numbersrt.split("")
    let convertdecending= newarry.sort(function (x,y) {return (y - x)})
    let join = convertdecending.join("")
    return join
}
console.log(decendingorder(2647547))