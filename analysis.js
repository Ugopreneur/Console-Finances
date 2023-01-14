// count total months by  using .length
var totalMonths = finances.length;

console.log(totalMonths);

document.getElementById("total_months_value").innerHTML = totalMonths;

// Net total of profits and losses by summing up only the second values in the array
var totalProfitLoss = 0;

for (var record=0; record <totalMonths; record++) {
    totalProfitLoss += finances[record][1];
}

console.log(totalProfitLoss)

document.getElementById("total_profit_loss_value").innerHTML = totalProfitLoss;

// Average change calculated by finding the changes on a month by month basis and then summing up those changes, then dividing by total number of months
var averageChange = 0;

for (var record=0; record <totalMonths; record++) {
    totalProfitLoss += finances[record][1];
}

console.log(averageChange)

// after finding the changes on a month by monmth basis, pick which has the highest positibe value

// after finding the changes on a month by monmth basis, pick which has the highest negative value