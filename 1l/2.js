

let x1 = parseFloat(prompt("Введіть x1:"));
let y1 = parseFloat(prompt("Введіть y1:"));
let x2 = parseFloat(prompt("Введіть x2:"));
let y2 = parseFloat(prompt("Введіть y2:"));
let x3 = parseFloat(prompt("Введіть x3:"));
let y3 = parseFloat(prompt("Введіть y3:"));


let area = Math.abs(x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2;

alert("Площа трикутника: " + area);
