// global variable
var myVar = 10;

function fun2()
{
    // global variable
    oopsGlobal = 20; // if we are declaring a variable inside a function without the "var" keyword then that variable becomes a global variable

    // local variable
    var oopsGlobal2 = 30;
}

function fun1()
{
    var output = ""; // local variable
    // using typeof to know the type of global variable 
    if (typeof myVar != "undefined")
    {
        output = output + "myglobal: " + myVar;
    } 

    if (typeof oopsGlobal != "undefined")
    {
        output = output + "\noopsGlobal : " + oopsGlobal;
    }

    return output;
}

fun2()
console.log(fun1())
console.log(fun1.output)