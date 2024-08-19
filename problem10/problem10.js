let para = document.querySelector("#para")
let paracontant = para.textContent
let word = paracontant.split(" ")
let str = ""
for (let i = 0; i < word.length; i++) {
   str+="<span>" + word[i]+ " </span>"

}
console.log(str)
para.innerHTML = str
para.addEventListener("click",(e) => {
e.target.style.backgroundColor="yellow"
})