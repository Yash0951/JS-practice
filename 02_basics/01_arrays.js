// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //-> here the format is same
// console.log(myArr);
// console.log(typeof myArr);
// console.log(myArr2);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(`the new ${myArr}`);
// console.log(typeof myArr);

// myArr.unshift(9) //->adds to the front
// myArr.shift() //->removes from the front
// console.log(`the new ${myArr}`);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); //-> gives the index of the given value

const newArr = myArr.join("--") //-> join("separator") 

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
