//sum of the array
let array = [1, 2, 3, 4, 5, 6, 7, 90];
let Sum = 0;

for (let i = 0; i < array.length; i += 1) {
  Sum += array[i];
}
console.log(`sum of the array is ${Sum}`);

console.log("-------------------->");

//2.

const numbers = [2, 4, 9, 2, 0, 16, 56, 123, 24];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest);

console.log("...........................................");
//3. integer
const integerNum = -9;

if (integerNum >= 0) {
  if (integerNum == 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is positive");
  }
} else {
  console.log("The number is negative");
}
//4th

function checkPalindrome(stringOne) {
  for (let i = 0; i < stringOne.length / 2; i++) {
    if (stringOne[i] !== stringOne[stringOne.length - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
console.log(checkPalindrome("malayalam"));

//5th
function reverse1(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}
console.log(reverse1("days"));

//5th product sign
var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
  console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}

//7.
function removecolor() {
  var x = document.getElementById("colorSelect");
  x.remove(x.selectedIndex);
}

//8. sorting
function sort(a, b, c) {
  if (a < b && b < c) {
    console.log(a, b, c);
  } else if (b < c && c < a) {
    console.log(b, c, a);
  } else if (c < b && b < a) {
    console.log(c, b, a);
  } else a < c && c < b;
  {
    console.log(a, c, b);
  }
}

sort(4, -1, 3);

//9.str alphabet oreder
function strAlphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(strAlphabet_order("webmaster"));

//10 event listener
const textInput = document.getElementById("textInput");
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed!");
  }
});
