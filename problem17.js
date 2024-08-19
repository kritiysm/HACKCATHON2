// function sum(num){
//     let newsum = 0;
//     for(let i = 0;i< num ;i++){
//         newsum+=num
//     }
//    return  newsum
// }
// console.log(sum(4))

function sum(num){
    if(num === 0){
        return 0
    } 
    else{
        return sum(num-1)+num
    }
    
}
console.log(sum(4))
