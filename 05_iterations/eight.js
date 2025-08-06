const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal); 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "dataScience course",
        price: 12999
    }
]


const totalCartValue = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0)
console.log(totalCartValue);





