function mul10(arrnum) {
    let newarry=[];
    for (let i = 0; i < arrnum.length; i++) {
        if (arrnum[i] % 10 === 0)
         newarry.push(arrnum[i])   
    }
    return newarry
}
console.log(mul10([10,20,30]))