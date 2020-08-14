

//Array Operations

let arr = ["Tejas", "Sachin", "Omkar", "Umesh", "Yaminee"];

//Access Elements from array

let first = arr[0];
let any = arr[3];

//printing Elements

for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item);
}

// Add an item in array
arr.push("Sanam");

// Remove an item
arr.pop();

// update value at certain index
arr[0] = "Tejasss";

//add value at particular position
arr.splice(2, 0, "sanam");
let arr = ["Tejas", "Sachin", "Sanam", "Omkar", "Umesh", "Yaminee"];

// delete at index 4
arr.splice(4, 2);

