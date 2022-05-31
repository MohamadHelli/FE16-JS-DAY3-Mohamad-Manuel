let students = [
    ['Martin', 76],
    ['Thomas ', 85],
    ['Klaus ', 65],
    ['Maria ', 93],
    ['David ', 81]
];
for (let i = 0; i < students.length; i++) {
    if (60 > students[i][1]) {
        console.log("Hello", students[i][0], "your grade = F  point is", students[i][1])
    } else if (70 > students[i][1]) {
        console.log("Hello", students[i][0], "your grade = D  point is", students[i][1])
    } else if (80 > students[i][1]) {
        console.log("Hello", students[i][0], "your grade = C your point is", students[i][1])
    } else if (90 > students[i][1]) {
        console.log("Hello", students[i][0], "your grade = B your point is", students[i][1])
    } else {
        console.log("Hello", students[i][0], "your grade = A your point is", students[i][1])
    }
}

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else console.log(i);
}




star = "*"

for (let i = 1; i < 8; i++) {
    console.log(star);
    star = star + "*"

}