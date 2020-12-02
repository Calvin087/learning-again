- [Events guide](https://developer.mozilla.org/en-US/docs/Web/Events)
- [NodeJS equiv of events](https://nodejs.org/docs/latest-v12.x/api/http.html#http_event_connect)

## Math

**Order of precedence**

Easier way to fix what i want to be handled first instead of remembering the math order

```js

(num2 + num1) / (8 + 2);

```

**Floats / decimal places**

```js

let bankAccount = 1.2423874823478234
let realAmount = bankAccount.toFixed(2)

console.log(realAmount);

// >> 1.24;

```

**Addition of nums to strings**

```js

let num = "70"
let add = 5

console.log(num + add);
console.log(Number(num) + add);

// >> 705;
// >> 75;

```

## Strings and Numbers

Converting strings and numbers.

**Number Object**
```js

let myString = "12344"
let myNum = Number(myString)

console.log(typeof(myString));
console.log(typeof(myNum));

// >> string
// >> number

```

**toString Object**
```js

let myNum = 12344
let myString = toString(myNum);

console.log(typeof(myNum));
console.log(typeof(myString));

// >> number
// >> string

```

**Template Literals**

We can add a little JS in here too to mix things up and provide some calculations of dynamic content.

```js

let score = 1222
let divIt = 2
let name = "Dave"

let template = `${name}'s score is ${score / divIt}`
console.log(template);

// >> Dave's score is 611

```

## Useful String Methods

**Length**

```js

let dave = "super cali fragalistic"

console.log(dave.length);

// >> 22

```

**Notation**

String bracket notation doesn't work like slicing in Python. I can't seem to grab the last char using -1. I have to include the length and then grab the last char.

```js

let dave = "super cali fragalistic"

console.log(dave[0]);
console.log(dave[-1]); // doesn't work like Python
console.log(dave[dave.length-1]);

// >> s
// >> undefined
// >> c

```

**Substrings**

Checking where the text to search starts.

```js

let dave = "super cali fragalistic"

console.log(dave.indexOf("cali"));

// >> 6


```

When -1 is returned it means it wasn't found. Otherwise it would return the above.

```js

let dave = "super cali fragalistic"

if(dave.indexOf("calip") === -1) {
    console.log("not found bro");
} else {
    console.log("Yooo");
}

// not found bro

```

**Slicing**

Slicing out a piece of the string if i know where certain things start and end. Up to but not including the last num.

```js

let dave = "super cali fragalistic"

let slice = dave.slice(0,5)

console.log(slice);

// super


```

**Uppers and lowers**

```js
let dave = "Super cali fragalistic"

console.log(dave.toUpperCase());
console.log(dave.toLowerCase());

// >> SUPER CALI FRAGALISTIC
// >> super cali fragalistic
```

**Replacing parts of a string**

```js

let dave = "Super cali fragalistic"

let rep = dave.replace("Super", "Duper")

console.log(rep);

// >> Duper cali fragalistic

```

## Arrays

Arrays can hold multiple types of data, not just strings OR numbers

```js
let dave = [1, 2, 3, 4, 5, 6]
let random = ['tree', 1334, [1, 2, 3]]
```

**Replacing items in an array**

```js
let dave = [1, 2, 3, 4, 5, 6]
let random = ['tree', 1334, [1, 2, 3]]

let item = random[0]

console.log(item);

// >> tree

random[0] = 'river'

console.log(random[0]);

// >> river
```

**MultiDimensional Array**

```js
let random = ['tree', 1334, [1, 2, 3]]

console.log(random[2][0]);

// >> 1

random[2][1] = "Dave"

console.log(random);

// >> ["tree", 1334, [1, "Dave", 3]];

```

**Lengths of Arrays**

```js
let random = ['tree', 1334, [1, 2, 3]]

// console.log(random.length);

// >> 3

for (let i = 0; i < random.length; i++) {
    console.log(random[i]);
}

// >> tree
// >> 1334
// >> [ 1, 2, 3 ]
```

**Splitting a string to an Array**

```js
let myString = "something about my life goes here"

let arr = myString.split(" ")

console.log(arr);
// >> [ 'something', 'about', 'my', 'life', 'goes', 'here' ]

let newString = arr.join("-")

console.log(newString);
// >> something-about-my-life-goes-here
```

**Push + Pop + Shift + Unshift**
Shift() Kills and Unshift("s") creates

Push adds items to the end of an array.

```js
let myString = "something about my life goes here"
let arr = myString.split(" ")

arr.push("- and fin")

console.log(arr);

// >> ["something", "about", "my", "life", "goes", "here", "- and fin"];

```

Pop removes them from the array BUT also returns it to a variable if needed.

```js
let myString = "something about my life goes here"
let arr = myString.split(" ")

let removed = arr.pop()

console.log(removed);

// >> here;
```

## If's and Elses

Variables that have a value automatically return ```True``` or ```Truthy```.

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

**Logical Operators**

Not forgetting ```&&```. Both sides of the evaluation have to return true for this to pass otherwise it's false.

Or is the other way to do things with ```||```.

## Switch Statements

Each case has to end with a ```break``` otherwise every case will run and log everything.

```js
let variableCheck = "lucie"

switch (variableCheck) {
    case "dave":
        console.log("Hey Dave");
        break
    case "sam":
        console.log("You're not Dave!");
        break;
    case "lucie":
        console.log("Have you seen Dave?");
        break;
}

// >> Have you seen Dave?
```

## Ternary Operators

Condition to be true inside the parens and true and false consequences beside :.

```js
let variableCheck = "lucie"

console.log((variableCheck === "lucie") ? "Hey Lu" : "Who are you?")

// >> Hey Lu
```

Nice use case here

```js
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  select.value === "black"
    ? update("black", "white")
    : update("white", "black");
};

```

## Looping

This if statement handles the end of the sentence with a full stop after everything.

```js
const dogs = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
let info = "My dogs are called ";

for (let i = 0; i < dogs.length; i++) {
  if (i === dogs.length - 1) {
    info += 'and ' + dogs[i] + '.';
  } else {
    info += dogs[i] + ', ';
  }
}

console.log(info);

// >> My dogs are called Bill, Jeff, Pete.
```

## Event Listeners

Seems to be more similar to react when assigning click handlers.

```js
const btn = document.querySelector('button');

function bgChange() {
  let rndCol = 'rgb(' + random(255)...';
  document.body.style.backgroundColor = rndCol;
}   

btn.addEventListener('click', bgChange);
```

Can also be written like the below. Passing the event type as well as the function to run when triggered.

```js
btn.addEventListener('click', function() {
  let rndCol = 'rgb(' + random(255)...';
  document.body.style.backgroundColor = rndCol;
});
```

You can also have the same button perform different things based on user journey. Removing event listeners and assigning them something else later.

```js
myElement.addEventListener('click', functionA);
```

### Event handlers (e)

See this alot in react if i remember correctly. This is called the "**event object**".

In the below exaple, ```e``` in the function is always in reference to the element the event occurred upon. So in this example ```e``` is the button and not the page background.

```js
function bgChange(e) {
  let rndCol = 'rgb(' + random(255)...';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}  

btn.addEventListener('click', bgChange);
```

Example of looping through elements and adding ```onClick``` event listeners to them, while also passing the function(e).

```js
const divs = document.querySelectorAll('div');

for (let i = 0; i < divs.length; i++) {
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
```
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
Preventing default behavior
