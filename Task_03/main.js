// Task 1

let array = [[56, 54,23],[3,2,1], [7,95,97]];
let a = array[0];
let b = array[1];
let c = array[2];

function sortFunction() {
	a.sort(function(a,b){
		return a-b;
}) 
	b.sort(function(a,b){
		return a-b;
}) 
	c.sort(function(a,b){
		return a-b;
}) }


sortFunction();

let sumMin = a[0] + b[0] + c[0]; 
console.log(sumMin);

//-------------------------------------------------------------
// Task 2

let randArr = [];

function randomArray(){
	for(i = 0; i < 10; i++){
		let b = Math.floor(Math.random() * 100 + 1);
		randArr.push(b);
	}
}
 randomArray();

 function randomArraySort() {
 	randArr.sort(function(a,b){
 		return a - b;
  	})
 }
randomArraySort();
randArr.reverse();

let twoOldestAge = [randArr[1], randArr[0]];

console.log(randArr);
console.log(twoOldestAge);

//-------------------------------------------------------------
// Task 3

function findShort(s) { 
  let wordArr = s.split(" "); 
   
  let lengthArr = []; 
  for (let i = 0; i < wordArr.length; i++) {
    lengthArr[i] = wordArr[i].length; 
  }
  
  let lowestNum = lengthArr[0]; 
  for (let j = 0; j < lengthArr.length; j++) {
    if (lengthArr[j] < lowestNum) {
      lowestNum = lengthArr[j]; 
    }
  }
    return lowestNum; 
}
console.log(findShort('Hello, my name is Vova!'));

//-------------------------------------------------------------
// Task 4

function order(string){
  var result = ''
  var array = [];
  var stringArr = string.split(' ');
  for (var i=0; i<stringArr.length; i++){
    for (var j=0; j<stringArr[i].length; j++){
      if (parseInt(stringArr[i][j]) < 10) {
        array.push(stringArr[i][j] + stringArr[i])
      }
    }
  }
  array.sort().forEach(function(element) {
    result += element.substring(1) + ' '
  });
  return result.trim()
}
console.log(order('ite6m wa2nt I1 to3 t5his ta4ke'))

//-------------------------------------------------------------
// Task 5

document.getElementById("color").value = "";
function getVal() {
	let color = document.getElementById("color").value;
	
}

document.getElementById("size").value = "";
function getValTwo() {
	let size = document.getElementById("size").value;
	
}
