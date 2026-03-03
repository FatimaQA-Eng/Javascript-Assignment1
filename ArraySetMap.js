/*===============================================
 Part 1: The Raw Data (Array)
===============================================*/

// Array with duplicate student names
const studentSubmissions = [
  "Alice",
  "Bob",
  "Charlie",
  "Alice",
  "David",
  "Bob"
];


/*===============================================
 Part 2: The Unique Students (Set)
===============================================*/

// Create a Set to remove duplicates
const uniqueStudents = new Set(studentSubmissions);

// Log the unique students
console.log("Unique Students:", uniqueStudents);


/*===============================================
 Part 3: The Gradebook (Map)
===============================================*/

// Create an empty Map
const studentGrades = new Map();

// Add student/grade pairs
studentGrades.set("Alice", "A-");
studentGrades.set("Bob", "C+");
studentGrades.set("Charlie", "B");
studentGrades.set("David", "A");

// Log the gradebook
console.log("Gradebook:", studentGrades);


/*===============================================
 Part 4: Grade Lookup (Functions & Error Handling)
===============================================*/

// Function to get a student's grade
function getGrade(studentName) {
  if (!studentGrades.has(studentName)) {
    throw new Error(`Error: Student '${studentName}' not found.`);
  }
  return studentGrades.get(studentName);
}

// Students we want to look up
const studentsToLookup = ["Alice", "Eve", "Bob", "Frank"];

console.log("\n--- Grade Lookup Results ---");

// Loop with try...catch
studentsToLookup.forEach((student) => {
  try {
    const grade = getGrade(student);
    console.log(`${student}'s grade is: ${grade}`);
  } catch (error) {
    console.log(error.message);
  }
});