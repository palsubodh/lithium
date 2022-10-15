
	
let getBatchInfo = function(batchname,week,day,x){
    
    return batchname+week+day+x 
}

let result=getBatchInfo("Lithium"," "+"W3","D5"," "+"the topic for today is Nodejs module system")



let gettoday=function(){
    let date = new Date()
   
   return date
}
let getMonth=function(){
    let date =new Date()
  let month = date.getMonth()
//   console.log(month);
return month+1
}


module.exports.result=result
module.exports.gettoday=gettoday
module.exports.getMonth=getMonth

