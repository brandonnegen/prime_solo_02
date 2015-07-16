// 1) The first bug I found was within the getBaseSTI function. When returning "basePercent" the code was
//    return the "basePercent - 1" which gave a negative value to the percentage. I removed the "- 1" and now
//    the bonus percent is a positive number.

// 2) The second bug I found was when declaring what "newArray[0]"" would be. It was pulling in the entire
//    "arrayAtticus" and not just the name in each seperate array. I changed newArray[0] = array[0] to
//    newArray[0] = array[i][0]. It is now pulling in each seperate name from each seperate array. The same
//    "[i]" needed to be added to the variable baseSalary and the variable reviewScore.

// 3) The third bug I found was in the newArray[2] and newArray[3]. They both needed to be rounded to make
//    the numbers correct. I added Math.round to both and everything is A-OK.


// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array).join(",   ");
 	newEl = document.createElement('li');
  newEl.style.listStyleType = 'none';
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}


function calculateSTI(array){

  var newArray = [];

  newArray[0] = array[i][0];
 
  var employeeNumber = array[i][1];
  var baseSalary = array[i][2];
  var reviewScore = array[i][3];

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



