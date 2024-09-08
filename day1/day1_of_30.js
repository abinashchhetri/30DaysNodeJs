// Declare an empty array;
const arr = [];

// Declare an array with more than 5 number of elements
const arr2 = Array(8);

// Find the length of your array
console.log(arr2.length);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Get the first item, the middle item and the last item of the array
const middleItem = countries[parseInt(countries.length / 2)];

const firstItem = countries[0];
const lastItem = countries[countries.length - 1];

console.log(firstItem, middleItem, lastItem);

// Declare an array called mixedDataTypes, put different data types in
// the array and find the length of the array. The array size should be greater than 5
const arr3 = [
  "abinash",
  1,
  1.2,
  "a",
  ["hello"],
  [{ name: "abinash", title: "hooo" }],
];
console.log(arr3.length);

//Declare an array variable name itCompanies and assign initial values Facebook,
// Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

// Print out each company

for (i in itCompanies) {
  console.log(itCompanies[i]);
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(itCompanies[i]);
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
// IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "));

function checkCompany(array, companyName) {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  } else if (array.includes(companyName)) {
    return companyName;
  } else {
    return "company not found";
  }
}

console.log(checkCompany(itCompanies, "IBM"));

itCompanies.sort()

// Slice out the first 3 companies from the array
itCompanies.reverse();
console.log(itCompanies)

// console.log(itCompanies.slice(3))


// Slice out the last 3 companies from the array
console.log()
// console.log(itCompanies.splice(3, 3))

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

itCompanies.length = 0

console.log(itCompanies)