function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift()
}

var arr = [1,2,3,4,5];
console.log("before: "+ JSON.stringify(arr));
console.log(nextInLine(arr, 6));
console.log("after: " + JSON.stringify(arr));
