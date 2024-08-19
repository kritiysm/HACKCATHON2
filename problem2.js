function specialnum(sum){
let stor=0;
for(i=3;i<=sum;i++){
    if(i%3===0||i%5===0){
        stor+=i}

    }
    return stor
}
console.log(specialnum(6))
