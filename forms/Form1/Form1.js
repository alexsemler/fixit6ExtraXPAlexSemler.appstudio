let numbers = [34, 56, 117, 324, 183, 231, 72, 111, -10, 207]

let choice = prompt("Do you want the sum or the average of the numbers? (all lower case)")

let sum = numbers.reduce((a,b) => a + b, 0)

let average = (sum / 10)

if (choice == "sum") {
  alert("The sum of the 10 numbers is " + sum + ".")
} else if (choice == "average"){
  alert("The average of the 10 numbers is " + average + ".")
   }

