function filter(str){
    let newstr = ""
for( let i =0;i<str.length;i++){
    if(i % 2 === 0)
    newstr+=str[i]
}
return newstr
}
console.log(filter("puspa"))
// console.log(filter("nitu"))



// for(i +=2)