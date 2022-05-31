let random = Math.floor(Math.random() * 31) - 5;
console.log(random);
if (random < 10) {
    console.log("The weather is cold")
} else {
    console.log("The weather is moderate");
}

// let array = [1, 7, -3, 9];
// let highest = Math.max(...array);
// console.log(highest);
// let lower = Math.min(...array)
// console.log(lower);


let array = [1, 7, -3, 9];
let max = array[0];
let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    } else {
        min = array[i]
    }
}
console.log(max);
console.log(min);




// Math.max(1,2,3,4,10,3)


let random1 = Math.floor(Math.random() * 41) - 5;
console.log(random1);
if (random1 < 10) {
    console.log("The weather is cold")
} else if (random1 < 32) {
    console.log("The weather is moderate");

} else {
    console.log("The weather is hot");

}