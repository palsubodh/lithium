

let str="   Subodh Pal     "

let gettrim=function(){
    return str.trim()
}

// console.log(gettrim())

let string = "ABCD"

let getlowercase=function(){

    return string.toLowerCase()
}


let x="abcd"

let getuppercase = function(){
    return x.toUpperCase()
}

module.exports.gettrim=gettrim
module.exports.getlowercase=getlowercase
module.exports.getuppercase=getuppercase





// let str="subodhPal"

// let trim =function(){
//     let res=  str.toLowerCase()
//     console.log("String is lowercase",res)
    
//   //   return res
//   let up= str.toUpperCase()
//   console.log("string in uppercase",up)
//   return "coverted sucessfully"
  
// }
// module.exports.Trim=trim