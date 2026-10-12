// Declare age and citizenship status
let age = 20;
let isCitizen = true;

// Check eligibility using nested if-else
if (isCitizen) {
    if (age >= 18) {
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible for voting, driving, or passport services.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible for services.");
    }
}