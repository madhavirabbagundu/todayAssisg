function Upper(str){
    var out = ""
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i = 0; i < str.length; i++){
    for(var j = 0; j < upper.length; j++){
    if(str[i] === upper[j] ){
        str[i]+=lower[j]
    }
    // if(str[i] === lower[j]){
        
    //     out+=upper[j]
    // }
}
}
return str
}
console.log(Upper("HeLLo"))