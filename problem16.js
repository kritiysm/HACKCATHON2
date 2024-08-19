function fab(num){
    fabarr= [1,1]
    for(let i = 2;i< num ;i++){   
   let newfab = fabarr [i-1]+ fabarr [i-2]
}
return array[fab]
}
// console.log(fab(5))

function fab(num){
    if(num === 1||num===2){
        return 1 
    } else{
      return fab(num-1)+fab(num-2)
    }

}
console.log(fab(6))
   


