// user name
let userName = prompt('What is your name?');
alert (`Hello ${userName}`);

// user age
let userYear = prompt('When were you born?');
const currentYear = 2020;
let userAge = currentYear - userYear;
alert(`${userName}, I guess you are ${userAge} years old!`);

// Perimeter
let sqrSide = prompt(`${userName}, I like Math, insert value for square's side`);
let sqrPerimeter = sqrSide * 4;
alert(`Perimeter of your square is ${sqrPerimeter}`);

// Radius
let radius = prompt('Also insert radius');
let circleArea = 3.14 * radius ** 2;
alert (`Area is ${circleArea}`);

// Velocity
let spacing = prompt('I can count speed. Insert please distance between two points');
let time = prompt('Also insret time for this travel');
const velocity = spacing / time;
alert (`${userName}, you speed should be ${velocity} kilometres per hour`);

// Money exchange
let dollarCount = prompt('How many dollars you want to change?');
const EuroRate = 0.91;
let finalCount = dollarCount * EuroRate;
alert(`You will receive ${finalCount} euros`);

// File count
let GbCount = prompt('Insert size of memory in Gb');
const GbTransferToMb = 1024;
let finalMemory = GbCount * GbTransferToMb;
const fileSize = 820;
let fileCount = Math.floor(finalMemory / fileSize);
alert (`You can have ${fileCount} files`);

// Choco bars
let money = prompt('How much money do you have?');
let chocoPrice = prompt ('Price of one chocolate');
let chocoCount = Math.floor(money / chocoPrice);
alert (`You can take ${chocoCount} chocolate bars`);
let restMoney = money % chocoPrice;
alert (`Also you saved ${restMoney}`);

// Mirrored number
let yourNumber = prompt('Type number from 100 till 999');
let vault = 0;
for (;yourNumber;yourNumber = Math.floor(yourNumber/10)) {
	vault *= 10;
	vault += yourNumber % 10;
}
alert (`Mirrored number is ${vault}`)