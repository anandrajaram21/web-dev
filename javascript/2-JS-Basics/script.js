/**********************************************
*Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
// var if = 23; Will throw an error
*/


/**************************************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName)
*/

/********************************************
* Basic Operators
*/

/*
var now = 2020;
var ageJohn = 28;
var ageMark = 33;
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/********************************************
* Operator Precedence
*/
/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/***************************
* CODING CHALLENGE 1
*/

/*
var johnMass = prompt('Enter John\'s weight');
var markMass = prompt('Enter Mark\'s weight');
var johnHeight = prompt('Enter John\'s height');
var markHeight = prompt('Enter John\'s height');

var johnBmi = johnMass / (johnHeight * johnHeight);
var markBmi = markMass / (markHeight * markHeight);

var isMarkBmiHigher = markBmi > johnBmi;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBmiHigher);
*/



/****************************************
* If / Else Statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}
*/

/***********************************
* Boolean Logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy');		
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man');
} else { 
	console.log(firstName + ' is a man');
}
*/

/*****************************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 16;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statement
var job = 'instructor';

switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an Uber in Lisbon.')
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites');
		break;
	default:
		console.log(firstName + ' does something else');
}

age = 35;
switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man');
		break;
	default:
		console.log(firstName + ' is a man');
}
*/

/*****************************************
* Truthy and Falsy values and equality operators
*/
/*
var height;

height = 23;

if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable is not defined');
}

// Equality Operators
if (height === '23') {
	console.log('The == operator does type coercion');
} else {
	console.log('The === operator does not do type coercion');
}
*/

/************************************************
* CODING CHALLENGE 2
*/
/*
var johnTeam = (89 + 120 + 103) / 3;
var mikeTeam = (116 + 94 + 123) / 3;

if (johnTeam > mikeTeam) {
	console.log('John\'s team scored more than Mike\'s');	
} else if (mikeTeam > johnTeam) {
	console.log('John\'s team scored less than Mike\'s');
} else {
	console.log('Both teams scored the same');
}

var maryTeam = (97 + 134 + 105) / 3;
var averageWinner = 0;

if (johnTeam > maryTeam && johnTeam > mikeTeam) {
	console.log('John\'s team has the highest average score');
} else if (maryTeam > johnTeam && maryTeam > mikeTeam) {
	console.log('Mary\'s team has the highest average score');
} else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
	console.log('Mike\'s team has the highest average score');
} else {
	console.log('It\'s a draw!');
}
*/

/************************************************
* Functions
*/
/*
function calculateAge(birthYear) {
	return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement > 0){
		console.log(firstName + ' retires in ' + retirement + ' years');
	} else {
		console.log(firstName + ' is already retired');
	}
}

yearsUntilRetirement(1996, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/********************************************
* Function Statements and Expressions 
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName){

// }

// Function expression
var whatDoYouDo = function(job, firstName) {
	switch (job) {
		case 'teacher':
			return (firstName + ' teaches kids how to code.');
		case 'driver':
			return (firstName + ' drives an Uber in Lisbon.')
		case 'designer':
			return (firstName + ' designs beautiful websites');
		default:
			return (firstName + ' does something else');
	}
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/************************************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
console.log(names);

names[5] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher'];

john.push('blue');
john.unshift('Mr. ');

john.pop();
john.pop();
console.log(john);
*/

/********************************************
* CODING CHALLENGE 3
*/
/*
var tips = []
var finalAmt = []

function calculateTip(amount) {
	var tip = 0
	if (amount < 50) {
		tip = 0.2 * amount;
		tips.push(tip);
		finalAmt.push(amount + tip);
	} else if (amount >= 50 && amount <= 200) {
		tip = 0.15 * amount;
		tips.push(tip);
		finalAmt.push(amount + tip);
	} else {
		tip = 0.1 * amount;
		tips.push(tip);
		finalAmt.push(amount + tip);
	}
}

calculateTip(124);
calculateTip(48);
calculateTip(268);

console.log(tips, finalAmt);
*/

/**************************************************
* Objects and properties
*/
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};
console.log(john.firstName);
var x = 'birthYear';
console.log(john['lastName']);
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*********************************************
* Objects and Methods
*/
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2020 - this.birthYear;
	}
};

john.calcAge();
console.log(john);
*/

/******************************************
* CODING CHALLENGE 4
*/
/*
var john = {
	fullName: 'John Smith',
	mass: 70.8,
	height: 2,
	calcBMI: function() {
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}

var mark = {
	fullName: 'Mark Tanner',
	mass: 72,
	height: 1.9,
	calcBMI: function() {
		this.BMI = this.mass / (this.height * this.height);
		return this.BMI;
	}
}

var johnBMI = john.calcBMI();
var markBMI = mark.calcBMI();

if (johnBMI > markBMI) {
	console.log('John has the higher BMI');
} else if (markBMI > johnBMI) {
	console.log('Mark has the higher BMI');
} else {
	console.log('John and Mark have the same BMI');
}
*/

/*****************************************
* Loops and iteration
*/
/*
// For loops
for (var i = 1; i <= 20; i += 2){
	console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher'];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

// While loops
var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}

// Continue and break statements

var john = ['John', 'Smith', 1990, 'teacher'];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}

for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}
*/

/********************************************
* CODING CHALLENGE 5
*/

var john = {
	bills: [124, 48, 268, 180, 42],
	tips: [],
	finalAmt: [],
	calcTip: function() {
		for (var i = 0; i < this.bills.length; i++){
			var tip = 0;
			var amount = this.bills[i];
			if (amount < 50) {
				tip = 0.2 * amount;
				this.tips.push(tip);
				this.finalAmt.push(amount + tip);
			} else if (amount >= 50 && amount <= 200) {
				tip = 0.15 * amount;
				this.tips.push(tip);
				this.finalAmt.push(amount + tip);
			} else {
				tip = 0.1 * amount;
				this.tips.push(tip);
				this.finalAmt.push(amount + tip);
			}
		}
	}
}

john.calcTip();
console.log(john.tips, john.finalAmt);

// Part 2

function calcAvg(arr){
	var sum = 0
	for (var i = arr.length - 1; i >= 0; i--) {
		sum += arr[i]
	}
	var avg = sum / arr.length;
	return avg;
}

var mark = {
	bills: [77,  375, 110, 45],
	tips: [],
	finalAmt: [],
	calcTip: function() {
		for (var i = 0; i < this.bills.length; i++){
			var tip = 0;
			var amount = this.bills[i];
			if (amount < 100) {
				tip = 0.2 * amount;
				this.tips.push(tip);
				this.finalAmt.push(amount + tip);
			} else if (amount >= 100 && amount <= 300) {
				tip = 0.1 * amount;
				this.tips.push(tip);
				this.finalAmt.push(amount + tip);
			} else {
				tip = 0.25 * amount;
				this.tips.push(tip);
				this.finalAmt.push(amount + tip);
			}
		}
	}
}

mark.calcTip();

mark.average = calcAvg(mark.tips);
john.average = calcAvg(john.tips);

if (john.average > mark.average) {
	console.log('John payed more tips on average');
} else if (john.average < mark.average) {
	console.log('Mark payed more tips on average');
} else {
	console.log('John and Mark payed the same amount of average tips');
}