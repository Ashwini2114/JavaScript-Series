// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);    
}

//Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('IN', "India") //Map contains unique values and maintains the order in which it is inserted

// console.log(map); //O/P--> Map(2) { 'IN' => 'India', 'USA' => 'United States of America' }

for (const key of map) {
    // console.log(key);
    //O/P--> [ 'IN', 'India' ]
           //[ 'USA', 'United States of America' ]
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
    //IN :- India
    //USA :- United States of America
}

const myObject = {
    game1 : "SpiderMan",
    game2 : "Super Mario"
}

for (const [key, value] of myObject) {
    // console.log(key, ":-", value);
    //O/P--> TypeError: myObject is not iterable
}






