function compare(a,b)
{
    // normal compare
    if (a==b)  // -> performs type conversion before comparing
    {
        return true
    }
    return false
}

function strict_compare(a,b)
{
    if (a===b)
    {
        return true
    }
    return false
}

var a = 3
var b = '3'

console.log(typeof(a)+"\n"+typeof(b))
console.log("Normal Compare: " + compare(a,b))
console.log("Strict Compare: " + strict_compare(a,b))