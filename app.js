// Hi.
// I want to practice javascript.
// Ok.



// lesson one.


console.log("Hi");
console.log("farzad");
console.log(20);
console.log(20 + 10);
console.log("Farzad " + "Sh");
console.log("I have to go, then come back");
console.log(100 * 2);


const book = "programming";
const book2 = "English";
const text = book + " and " + book2 + ".";
console.log(text); 


let number = 5;
number = 10;
console.log(number);

let camelCase = "farzad";
console.log(camelCase);


const YOUR_BIRTHDAY = "2023";
console.log(YOUR_BIRTHDAY);


console.log(true);

const display = false;
console.log(display);


const display1 = !false;
console.log(display1);


const num1 = 10;
const num2 = 20;
console.log(num1 === num2);

console.log(display === display1);

console.log(num1 !== num2);

const num3 = 10;

console.log(num3 !== num1);




// lesson 02



const numm1 = 10;
const numm2 = 20;
console.log(numm1 !== !numm2);
console.log(numm1 < numm2);


const f1 = true;
const f2 = false;
console.log(f1 && f2);
console.log(f1 || f2);



// lesson 3

const bookk = 10;

if (bookk < 0) {
    console.log("Hi, farzad");
} else if (bookk < 5) {
    console.log("hii");
} else {
    console.log("hello");
}



// lesson 4

// self assignment
let f3 = 5;
f3 = 8;
f3--;
f3++;
f3++;
console.log(f3);
f3 = f3 - 1;
f3 = f3 + 1;
f3 = f3 + 10;
console.log(f3);
f3 += 1;
f3 += 5;
f3 -= 1;
console.log(f3);


let counter = 0;

while (counter < 5) {
    // counter++
    console.log("farzad " + counter);
    counter++;
};


for (let i = 0; i < 5; i++) {
    console.log(i);
};


for (let i = 5; i >= 0; i--) {
    console.log(i);
}




// lesson 05


const froArray = ["farazad", "farshad", "fardad", "faryad", "farnam"]

const arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr[0]);
arr[0] = 0;
console.log(arr);

const length = arr.length;
console.log(length);

arr.push(6);
arr.push(7, 8, 9, 10);
console.log(arr);

const forDrop = arr.pop();
console.log(forDrop);
console.log(arr);

for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};




// lesson 06




function display2(number, number2, number3) {
    console.log("farzad" + number);
    const total = number2 - number3;
    console.log(total);
}

display2(10, 20, 5);
display2(20,22,3);



function display3 (author) {
    return author;
    return 5;
}

const forReturn = display3("Hafez");
console.log(forReturn);



function display4 (arr) {
    console.log(arr[0] + arr[3]);
};

const arr = [2,4,10,20];
display4(arr);



function greetUser(p1, p2) {
    const total = p1 + p2;
    return total;
}

const result = greetUser(5, 10);
// const result1 = greetUawe(20, 30);
console.log(result);
// console.log(result1);