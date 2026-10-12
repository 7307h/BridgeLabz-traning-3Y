// Expenses for 5 categories
let expenses = [2000, 1000, 3000, 1500, 500];

// Calculate total expenses
let total = 0;

for (let expense of expenses) {
    total += expense;
}

// Calculate average expense
let average = total / expenses.length;

// Add 10% tax
total += total * 0.10;

// Display results
console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Final Amount After Tax: ₹" + total.toFixed(2));