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


// Average change calculated after tracking the changes month by month, then summing up those changes, before then dividing by the number of months, and finally converting our answer to the nearest hundredth
    
    // First sum up all the changes
    var totalChanges = 0;

    for (var i=0; i < monthToMonthChanges.length; i++) {
        totalChanges += monthToMonthChanges[i];
    }

    // Then find the average of the changes
    var averagePLchange = totalChanges/monthToMonthChanges.length;

    // And finally, convert our average to the nearest hundredth
    function hundredthRounder(numberToBeRounded) {
        return Math.round(numberToBeRounded * 100) / 100;
    }

    console.log("Average Change: $" + hundredthRounder(averagePLchange));
    document.getElementById("average_change_value").innerHTML = hundredthRounder(averagePLchange);


// after finding the changes on a month by monmth basis, pick which has the highest value
function getMaxOfArray(ArrayToCheck) {
    return Math.max.apply(null, ArrayToCheck);
  }

// after finding the changes on a month by monmth basis, pick which has the lowest value
function getMinOfArray(ArrayToCheck) {
    return Math.min.apply(null, ArrayToCheck);
  }

// printing the highest and lowest changes to the console and to browser

console.log("Greatest Increase in Profits: $" + getMaxOfArray(monthToMonthChanges));
document.getElementById("greatest_increase_value").innerHTML = getMaxOfArray(monthToMonthChanges);

console.log("Greatest Decrease in Profits: $" + getMinOfArray(monthToMonthChanges));
document.getElementById("greatest_decrease_value").innerHTML = getMinOfArray(monthToMonthChanges);