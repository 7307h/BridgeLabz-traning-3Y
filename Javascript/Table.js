// Declare variables of different data types
let userName = "Sarthak";
let age = 21;
let isStudent = true;
let hobbies = ["Coding", "Cricket", "Gaming"];
let user = { name: "Sarthak", city: "Mathura" };
let address = null;
let phoneNumber;

// Create an array to store the data summary
let data = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: typeof address },
    { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber }
];

// Print the formatted report
console.table(data);