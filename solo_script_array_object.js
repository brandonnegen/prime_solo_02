function  Person(name, employeeNumber, baseSalary, reviewScore){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.baseSalary = baseSalary;
  this.reviewScore = reviewScore;
}

var objectAtticus = {
  name: "Atticus",
  employeeNumber: "2405",
  baseSalary: "47000",
  reviewScore: 3
}
var objectJem = {
  name: "Jem",
  employeeNumber: "62347",
  baseSalary: "63500",
  reviewScore: 4
}
var objectBoo = {
  name: "Boo",
  employeeNumber: "11435",
  baseSalary: "54000",
  reviewScore: 3
}
var objectScout = {
  name: "Scout",
  employeeNumber: "6243",
  baseSalary: "74750",
  reviewScore: 5
}

var array = [objectAtticus, objectJem, objectBoo, objectScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array).join(" | ");
 	newEl = document.createElement('li');
  newEl.style.listStyleType = 'none';
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(objectName){

  var newArray = [];

  newArray[0] = array[i].name;
 
  var employeeNumber = array[i].employeeNumber;
  var baseSalary = array[i].baseSalary;
  var reviewScore = array[i].reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  };

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(baseSalary){
  var incomeAdjustment = 0;
  baseSalary = parseInt(baseSalary);
  if(baseSalary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}



