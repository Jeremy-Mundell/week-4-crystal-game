var arr = []
while(arr.length < 8){
    var randomnumber = Math.ceil(Math.random()*100)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
console.log(arr);