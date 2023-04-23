// creating a function in JS

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result = "The " + myAdjective + " " + myNoun + " "+ myVerb + " to the store " + myAdverb + "."

    return result
}

// calling a function in JS

var returned_result = wordBlanks("dog", "big", "ran", "quickly")

console.log(returned_result)
