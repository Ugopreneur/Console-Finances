// Prints heading to console
console.log("Financial Analysis \n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");

// Count the total number of months by  using .length
var totalMonths = finances.length;

// Prints the total number of months to the console and makes the browser show this value as well
console.log("Total Months: " + totalMonths);
document.getElementById("total_months_value").innerHTML = totalMonths;

// Finding the net total amount of profits/losses by summing up only the second values in each array, then prints to console and browser
var totalProfitLoss = 0;

for (var i=0; i < totalMonths; i++) {
    totalProfitLoss += finances[i][1];
}

console.log("Total: $" + totalProfitLoss);
document.getElementById("total_profit_loss_value").innerHTML = totalProfitLoss;

// A simple function to calculate the difference (change) between two months
function changeFinder(month1, month2) {
     let change = month2 - month1;
     return change;
}

// A function to create a new array from the month to month changes in an existing array
function newArrayCreator(existingArray) {
    let changesArray = [];
    for (var i=0; i < (existingArray.length-1); i++) {
        let m1 = existingArray[i][1];
        let m2 = existingArray[i+1][1];
        let difference = changeFinder(m1,m2);
        changesArray.push(difference);
    }
    return changesArray;
}

// Running the existing finances array through my array creator function to produce just the changes as a new array
var monthToMonthChanges = newArrayCreator(finances);


// Average change calculated after tracking the changes on a month by month basis, then summing up those changes, before then dividing by the total number of months
var totalChanges = 0;

for (var i=0; i < monthToMonthChanges.length; i++) {
    totalChanges += monthToMonthChanges[i];
}
console.log("total changes is " + totalChanges);
// var averagePLchange = totalProfitLoss/totalMonths;

// console.log("Average Change: $" + averagePLchange);
// document.getElementById("average_change_value").innerHTML = averagePLchange;




// after finding the changes on a month by monmth basis, pick which has the highest positibe value
// after finding the changes on a month by monmth basis, pick which has the highest negative value