
let X_min = parseFloat(prompt("Введіть X_min (ліва межа вертикальної стрічки):"));
let X_max = parseFloat(prompt("Введіть X_max (права межа вертикальної стрічки):"));


let Y_min = parseFloat(prompt("Введіть Y_min (нижня межа горизонтальної стрічки):"));
let Y_max = parseFloat(prompt("Введіть Y_max (верхня межа горизонтальної стрічки):"));

и
let X_point = parseFloat(prompt("Введіть X координату точки:"));
let Y_point = parseFloat(prompt("Введіть Y координату точки:"));


if (X_point >= X_min && X_point <= X_max && Y_point >= Y_min && Y_point <= Y_max) {
  alert("Точка належить перетину фігур.");
} else {
  alert("Точка НЕ належить перетину фігур.");
}
