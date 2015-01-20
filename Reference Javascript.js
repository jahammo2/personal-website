Reference Javascript

<!-- to have it alert something -->

alert(" ")

<!-- to have it alert and then have a box for a response -->

prompt(" ")

<!-- to create a variable -->

var name = [prompt("What is your name?")]

<!-- To put something in the console -->

console.log("The user's name is " + name)

<!-- you can add a value to an already named variable such as -->

name = "Nick"

<!-- If/else -->

if(true) {
	console.log("if block")
} (true means that it will actually put "if block" in the console)
(javascript defines 0 as false)

<!-- Will continue to loop -->

while(true){
	console.log('hello world')
}

<!-- End the loop after 10 'prints' -->

var counter = 10

while(counter){
	console.log('hello world')
	counter = counter - 1
} (will first evaluate counter as true so 'hello world'. Then it will take counter and subtract 1, making it 9 and then while will evaluate counter as 9 (which is true) and repeat)

<!-- can rewrite with this -->
for (var counter=10;counter;counter=counter-1){
	console.log('hello')
}
for (var counter=10(we "initialized");counter(evaluated as true);counter=counter-1(since counter was "true", we ran this)){
	console.log('hello', counter)
}

<!-- another example of same -->
while(counter){
	console.log('hello world')
	console.log('hi')
	counter = counter - 1
}

while(prompt("what is your name?")) {
	console.log("got your name ")
} (will keep prompting for your name)

<!-- use % to get the value of remainder in division -->
example:
11%3=2

<!-- to use an array -->

var friends= ["Nick", "Michael", "Amit"]
console.log(friends.length) (this will bring back the value 3)

var friends= ["Nick", "Michael", "Amit", [true, matt, bob]]
console.log(friends.length) (this will bring back the value 4)

console.log(friends[0]) (this will bring back Nick)
console.log(friends[10]) (this will bring back Undefined)

var friendnumber=1
console.log(friends[friendnumber]) (this will bring back Michael)

<!-- This is an object -->

var me = {
	first_name: "Jordan",
	last_name: "Hammond"
}

console.log(me.first_name) (this will bring Jordan)

var me = {
	first_name: "Jordan",
	last_name: "Hammond",
	"Employee Number": 1
}

console.log(me["Employee Number"]) (this will bring back 1)

var key = "first_name"

console.log(me[key]) (this will bring back Jordan)

/*****************/

var me = {
	first_name: "Jordan",
	last_name: "Hammond",
	"Employee Number": 1
}

me.first_name="James"

console.log(me["Employee Number"])

var key = "first_name"

console.log(me[key]) (this will bring back Jordan)

var debug = function(red) {
	console.log("debug", red)
} 

sayHello()


var x =1
debug("x has been set") (this will bring back debug x has been set)

var debug = function(red) {
	console.log("debug", red)
} 

var doublenumber= function (num) {
	return num * 2
}

debug(doublenumber(7)) (this will bring back debug 14)


var myColor = "blue";
console.log("myColor before myFunc()", myColor);

function myFunc () {
  myColor = "yellow";
  var myNumber = 42;
  console.log("myColor inside myFunc()", myColor);
}

myFunc();
console.log("myColor after myFunc()", myColor); (this will output yellow)


var myColor = "blue";
console.log("myColor before myFunc()", myColor);

function myFunc () {
  var myColor = "yellow";
  var myNumber = 42;
  console.log("myColor inside myFunc()", myColor);
}

myFunc();
console.log("myColor after myFunc()", myColor); (this will output blue)


// Use \ to "escape" the next character
var statement3 = 'He said "This is Jim\'s string"';
console.log(statement3);

var path = "C:\\folder\\myfile.txt";
console.log(path);

// to line break use 
\n

// to tab use
\t

// fancy uses for your variables

var quick = "The quick brown fox jumps over the lazy dog";

var quickLength	 = quick.length;    will return how many characters exist in the whole statement
var indexOfBrown = quick.indexOf('brown');    will tell you from which character 'brown' begins
var tenthCharacter = quick.charAt(10);    will tell you which character starts at the 10th character spot
var wordBrown = quick.substr(10,5);    will remove 'brown' from the quick. 10 is the starting point and 5 is the length
var quickUpper = quick.toUpperCase();    does what you think
var quickLower = quick.toLowerCase();

// 100000 can be rewritten as
var g=1E6

var h=012 (will come out as 10)

1 !== 3 (the ! works as a not function)

// will return a random number b/w 0-1
var u = Math.random() 

// will return a random number b/w 0-10
var u = Math.random() * 10

// will return a random number b/w 0-10 and round to nearest whole number
var u = Math.round(Math.random() * 10)

// will return 3
var v = Math.round(2.7)

// will return 3 by rounding down
var w = Math.floor(3.7)

// will return 7 by rounding up
var x = Math.ceil(6.2)

// take the power of something, will return 32
var y = Math.pow(2,5)

// take the sqrt
var = Math.sqrt(4)

// type Math into the console and you'll see all your math functions

// Arrays

// will return 2 in the console 
var x= ['some','words']
console.log(x.length)


var x= ["hello", 42, true, 
  function (a) {
	return a * 2
}
]

// saying we want to get "hello" from x
var word= x[0]

// will return 20
var doubler=x[3]
console.log(doubler(10))

// to change 42 to a different number
x[1]=144
var new_answer=x[1]

// add another string
x[4]="a new string"
// or this way to just add on to the end of the array
x[x.length]="a new string"

// push (like pushing a value to the end of the array) (toString means nothing)
var x =[2,3,4]
console.log(x.toString())
x.push(5)
console.log(x.toString())

// will return the last value in the array and will remove or "pop" it off the array so that the console will display 2,3,4
var value = x.pop()
console.log(x.toString())


// will add the value to the beginning and return 1,2,3,4
var x = [2,3,4]
console.log(x.toString())

x.unshift(1)
console.log(x.toString())

// will remove the first value from x. If you enter 'value' it will return 1
var value=x.shift()
console.log(x.toString())

// sorting like this will return it as if each value is a string
var x=[10,44,32,100,0,44,3,4]
console.log(x.toString())

x.sort()
console.log(x.toString())

// Sorting in numerical order
var x=[10,44,32,100,0,44,3,4]
console.log(x.toString())

x.sort(function(a,b){
	return a-b
})
console.log(x.toString())

// will create a random number to replace a number within the array
var x=[10,44,32,100,0,44,3,4]
console.log(x.toString())

x.sort(function(a,b){
	return Math.random()-.5
})
console.log(x.toString())

// reverse the array
var x=[10,44,32,100,0,44,3,4]
console.log(x.toString())

x.reverse()
console.log(x.toString())

// will combine x and y
var x=[1,2,3]
var y=]4,5,6]
var z=x.concat(y)

// if you want to slice out 1,2,3 into a new array
var x= [0,1,2,3,4,5]
var result=x.slice(1,4)

// creates a string that contains all the values in our variable and joins it with a string separator
var words =["these", "are", "some","words"]
var results=words.join(' ') (this will put a space between them all)

// to delete 4
var x= [6,79,4,3,4,5]
delete x[2]

// to splice. Or we want to remove 2 elements starting at index 2 (will remove 8 and 3)
var x= [6,79,8,3,4,5]
x.splice(2,2)

// to add something in such as add "two" and "red" between 79 and 8
var x= [6,79,8,3,4,5]
x.splice(2,0,"two","red")

// to replace 8 with "two"
var x= [6,79,8,3,4,5]
x.splice(2,1,"two")

// use typeof to deal with undefined
if (typeof greeting=== 'undefined'){
	greeting === 'Hello'
}

// use confirm to make a confirm button appear
confirm("I am ready to play")

c. We can increment up by any value by writing i += x, where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
d. We can decrement down by any value by writing i -= x. (See the Hint for more.)

// use this to have a 50% chance of it being 0 or 1
var coinFace = Math.floor(Math.random() * 2);

// The 'do' / 'while' loop
Sometimes you want to make sure your loop runs at least one time no matter what. When this is the case, you want a modified while loop called a do/while loop.
This loop says: "Hey! Do this thing one time, then check the condition to see if we should keep looping." After that, it's just like a normal while: the loop will continue so long as the condition being evaluated is true.'

// The switch statement is put together like this

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}


var Person=function(name,age) {
    this.name=name
    this.age=age
}

// Now we can make an array of people
var family = new Array()
family[0]= new Person("alice",40)
family[1]=new Person("bob", 42)
family[2]=new Person("michelle",8)
family[3]=new Person("timmy",6)

// loop through our new array
for(var x=0;x>=0;x-=1) {
    console.log(family)   
}

// will give this:
[ { name: 'alice', age: 40 },
  { name: 'bob', age: 42 },
  { name: 'michelle', age: 8 },
  { name: 'timmy', age: 6 } ]




// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line

var the_hobbit = new Book(320,"J.R.R. Tolkien")
console.log(the_hobbit)

// will give this:
Book {pages: 320, author: "J.R.R. Tolkien"} 

// get dates
var currentDate = new Date();
var currentYear = (currentDate.getFullYear());

// get hours
var currentDate = new Date();
var hourNow= currentDate.getHours()

// document targets the whole page/doc. write puts content on the page
document.write('good afternoon!')


// page w/ html. textContent will replace the words in the html file.
// innerHTML will change the content on your html

// html
<div id="title">Howdy
	<span id="name">friend</span>
</div>
<div id="note">Take a look around...
</div>
<div id="sin">poop
</div>

// js 
var username='Molly'
var message='See our upcoming range'
var angle="pee"
var elName=document.getElementById('name')
elName.textContent=username
var elNote=document.getElementById('note')
elNote.textContent=message
var elTitle=document.getElementById('angle')
elTitle.innerHTML=angle

// Set the class for a <div> element with id="myDIV":
document.getElementById("myDIV").className = "mystyle";

// does what you think
var width=600
document.write(this.width)

// finds the width of the device's screen in pixels
window.screen.width

// will tell you the date that the page was last modified
document.lastModified

// opens new browswer window with URL
window.open()

// current URL of window object
window.location

// title of current document
document.title

// Date on which document was last modified
document.lastModified

// returns string containing URL of current document
document.URL

// Returns domain of current document
document.domain

// other ways to enter into console
console.info()
console.warn()
console.error()

// example of console.group
console.group('blah blah blah')
console.info()
console.warn()
console.error()
console.groupEnd

// the message will only show if user has entered number less than 10
console.assert(this.value>10, 'user entered less than 10')

// place the debugger keyword in your code to automatically create a breakpoint
if (area<100) {
	debugger
}

// try, catch, finally
try {
	// try to execute thsi code
}
catch(exception) {
	// if there is an exception, run this code
}
finally{
	// This will always get executed
}

// example
response= '{"deals": [{"title": "ffarrw and ball",...' (JSON data)

if (response) {
	try {
		var dealData=JSON.parse(response)
		showContent(dealData)
	}
	catch(e) {
		var errorMessage=e.name + ' ' + e.message
		console.log(errorMessage)
		feed.innerHTML= '<em>Sorry, could not load deals'</em>
	}
	finally {
		var link = document.createElement('a')
		link.innerHTML = ' <a href="try-catch-finally.html">reload</a>'
		feed.appendChild(link)
	}
}

// you can use the throw new Error message if you know an error is coming. For example
var width=12
var height='test'

function calculateArea(width, height)
try{
	var area= width * height
	if (!isNaN(area)){
		return area
	} else {
		throw new Error('calculateArea() received invalid number')
	}
} catch(e) {
	console.log(e.name + ' ' + e.message)
	return 'We were unable to calculate the area'
}

document.getElementById('area').innerHTML=calculateArea(width,height)

// For awesome debugging tips, go to pg 484 of Jon Dockett

// For a great example of constructor notation working with js/html really well, pg 111 and
// 142-143

// Very helpful examples for how to use window.blah, document.blah on pages 124-27

// For math and number stuffz pages 132-35

// for accessing elements from js to html (such as querySelector()), pgs 188-89

// Object.prototype example
​function HigherLearning () {
​this.educationLevel = "University";
}
​
​// Implement inheritance with the HigherLearning constructor​
​var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";
​
​
​//Use of the for/in loop to access the properties in the school object​
​for (var eachItem in school) {
console.log(eachItem); // Prints educationLevel, schoolName, schoolAccredited, and schoolLocation​
}

// JSON.stringify Examples:
var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
JSON.stringify (christmasList);
​// Prints this string:​
​// "{"mike":"Book","jason":"sweater","chels":"iPad"}"  
​
​// To print a stringified object with formatting, add "null" and "4" as parameters:​
JSON.stringify (christmasList, null, 4);
// "{
    "mike": "Book",
    "jason": "sweater",
    "chels": "iPad"​
}
​
​// JSON.parse Examples \\​
 // The following is a JSON string, so we cannot access the properties with dot notation (like christmasListStr.mike)​
​var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
​
​// Let’s convert it to an object​
​var christmasListObj = JSON.parse (christmasListStr); 
​
​// Now that it is an object, we use dot notation​
console.log(christmasListObj.mike); // Book




























