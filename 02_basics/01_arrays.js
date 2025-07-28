//Array ---> In JS Arrays are resizable and can contain a mix ofdifferent data types

const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);


//Array Methods


// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //Add element at the index zero and shift the elements
//myArr.shift() //Removes the frist element of the array

// console.log(myArr.includes(9)); //Returns true or false
//console.log(myArr.indexOf(3)); //Returns index of the element

const newArr = myArr.join() //Adds all the elements into a string separated by the specified separaor
// console.log(myArr);
// console.log(newArr); //o/p ->0,1,2,3,4,5
// console.log(typeof myArr); //Object
// console.log(typeof newArr); //String

//Slice, Splice

console.log("A ", myArr);
const arr1 = myArr.slice(1,3) //Do not change the original array

console.log(arr1); //o/p-->[ 1, 2 ]
console.log("B ", myArr); 

const arr2 = myArr.splice(1, 3) //Change the original array
console.log(arr2); //o/p-->[ 1, 2, 3 ]
console.log("C ", myArr); //o/p-->[ 0, 4, 5 ]





