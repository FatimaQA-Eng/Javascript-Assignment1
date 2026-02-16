// Part 1: The Data (Variables & Data Types)

let firstName = "Jane";
let lastName = "Doe";
let birthYear = 1990;
let isLoggedIn = true;


// Part 2: The Logic (Functions & Operators)

function createUserProfile(userBirthYear, userName) {
    const currentYear = 2025;
    const age = currentYear - userBirthYear;

    const profileSummary = `Welcome, ${userName}! You are ${age} years old.`;
    return profileSummary;
}


// Part 3: Putting It All Together

let fullName = firstName + " " + lastName;

let userMessage = createUserProfile(birthYear, fullName);

console.log(userMessage);

// Final Part: Boolean Operator (Ternary)
console.log(isLoggedIn ? "Status: Online" : "Status: Offline");
console.log("TEST OUTPUT");
