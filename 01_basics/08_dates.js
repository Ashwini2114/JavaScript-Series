let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.getDate());


// let myCreatedDate = new Date(2003, 4, 21, 4, 30); //(Year, Month(starts from 0), Date, Hour, Minutes)
let myCreatedDate = new Date("2003-05-21");
// let myCreatedDate = new Date("05-21-2003");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myCreatedDate.getTime()); //Give output in miliseconds
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000)); //In seconds


let newDate = new Date()
console.log(newDate.toLocaleString);

console.log(newDate.getDay()); //Returrn integer and starts from 1 (Monday)
console.log(newDate.getMonth()+1); //+1 beccause here month start from 0


//To customize how date should be shown to the user
// newDate.toLocaleString('default', {
//     weekday: "long",
// })