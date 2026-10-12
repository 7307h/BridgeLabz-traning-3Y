// Declare current salary and annual increment rate
let salary = 30000;
let incrementRate = 10;

// Array to store yearly salary details
let salaryDetails = [];

// Calculate salary for the next 5 years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;

    // Round the salary
    salary = Math.round(salary);

    // Store year and salary
    salaryDetails.push({
        Year: year,
        Salary: salary
    });
}

// Display yearly salary in table format
console.table(salaryDetails);