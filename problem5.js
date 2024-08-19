function gitmiddle(str) {
  if (str.length % 2 != 0) {       //odd
    let length = str.length
    let middleNum = Math.floor(length / 2)
    console.log(str[middleNum])

  }
  else {                            //false means even
    let length = str.length
    let middleNum = str.length / 2
    let output = str[middleNum -1]+ str [middleNum]
    console.log(output)

  }
}


gitmiddle("sima")
gitmiddle("Shabnam")