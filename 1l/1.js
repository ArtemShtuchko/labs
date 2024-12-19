let A = prompt("Enter value of A");
let B = prompt("Enter value of B");
let C = prompt("Enter value of C");
let D = prompt("Enter value of D");
let E = prompt("Enter value of E");
console.log(A, B, C, D, E);


let temporary = B;
B = C;
C = temporary;

console.log(A, B, C, D, E);
