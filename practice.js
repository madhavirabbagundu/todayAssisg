function palindrome(arr){
    var out = arr
    for(var i = arr.length-1; i>=0; i--){
        out.push(arr[i])
    }
    if(out === arr){
        return true
    }
    return false
}
console.log(palindrome([2,3,4,5]))