const marvel_heros = ["thor", "Ironman", "SpiderMan"]
const dc_heros = ["superman", "flash", "batman"]

// marveL_heros.push(dc_heros) //dc_heros is inserted as a element in the marvel_heros
// console.log(marveL_heros);

// const allHeros = marvel_heros.concat(dc_heros) //concat combines both arrays and returns a new array
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] //You can prefer this because you can concat more than 2 array at once
// console.log(all_new_heros);

// const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// // const arr2 =  arr.flat(Infinity) 
// // flat(n) ---> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const arr2 =  arr.flat(1)
// console.log(arr2);


// console.log(Array.isArray("Ashwini"));
// console.log(Array.from("Ashwini"));
// console.log(Array.from({name: "ashwini"})); //INteresting Case O/P-->[]
//Because you have to specify that you want to makee array of keys or values


let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2, score3, score4));
