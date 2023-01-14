// Prints heading to console
console.log("Financial Analysis \n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ")

// Count the total number of months by  using .length
var totalMonths = finances.length;

// Prints the total number of months to the console and makes the browser show this value as well
console.log("Total Months: " + totalMonths);
document.getElementById("total_months_value").innerHTML = totalMonths;

// Find net total amount of profits/losses by summing up only the second values in each array, then prints to console and browser
var totalProfitLoss = 0;

for (var i=0; i < totalMonths; i++) {
    totalProfitLoss += finances[i][1];
}

console.log("Total: $" + totalProfitLoss)
document.getElementById("total_profit_loss_value").innerHTML = totalProfitLoss;

// Average change calculated by finding the changes on a month by month basis and then summing up those changes, then dividing by total number of months
// var averageChange = 0;

// for (var x=1; x <totalMonths; x++) {
//     averageChange = finances[x][1] - ??;
// }

// console.log("Average Change: $" + averageChange)
// document.getElementById("average_change_value").innerHTML = averageChange;

// after finding the changes on a month by monmth basis, pick which has the highest positibe value

// after finding the changes on a month by monmth basis, pick which has the highest negative value