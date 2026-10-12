// Input purchase amount
let total = 8000;
let discount = 0;

// Calculate discount based on purchase amount
if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
} else {
    discount = 0;
}

// Calculate discount amount and final price
let discountAmount = Math.round(total * discount / 100);
let finalPrice = Math.round(total - discountAmount);

// Display results
console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discount + "%");
console.log("Final Price After Discount: ₹" + finalPrice);