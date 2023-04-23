// decalaring an empty array

var arr1 = []
console.log(arr1)

var arr2 = ["abc", 1, 3, 4.6]
console.log(arr2)

//nested array

var arr3 = [["abc", 1, 3, 4.6], [45]]
console.log(arr3)

//accessing array values

console.log("1st element of arr2 " + arr2[0])
console.log("1st element of 2nd array in arr3 " + arr3[1][0])

// modifying array using indexes
arr2[1] = 10
console.log(arr2)