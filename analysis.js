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

// Average change calculated by finding the changes on a month by month basis and then summing up those changes, then dividing by total number of months

var averagePLchange = totalProfitLoss/totalMonths;

console.log("Average Change: $" + averagePLchange);
document.getElementById("average_change_value").innerHTML = averagePLchange;

// after finding the changes on a month by monmth basis, pick which has the highest positibe value

function changeFinder(month1, month2) {
     let results = month2 - month1;
     console.log(results);
     return results
}

function arrayCreator(arr) {
    let diffArray = [];
    for (var i=0; i < (arr.length-1); i++) {
        let m1 = arr[i][1];
        let m2 = arr[i+1][1];
        let difference = changeFinder(m1,m2)
        diffArray.push(difference)
    }
    return diffArray
}

var testarray = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417]
]

var xl = arrayCreator(testarray);
console.log(xl);



console.log(changeFinder(500,400))
// after finding the changes on a month by monmth basis, pick which has the highest negative value