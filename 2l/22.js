const readline = require('readline');

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true; // 2 - просте число
    if (num % 2 === 0) return false; // Всі парні > 2 - не прості
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    function askQuestion(query) {
        return new Promise(resolve => rl.question(query, resolve));
    }

    const N = parseInt(await askQuestion("Введіть кількість елементів послідовності N: "));
    if (isNaN(N) || N <= 0) {
        console.log("Кількість елементів повинна бути додатним числом.");
        rl.close();
        return;
    }

    let minVal = null;
    let countMin = 0;

    for (let i = 0; i < N; i++) {
        const val = parseInt(await askQuestion(`Введіть елемент a[${i}]: `));
        if (isNaN(val)) {
            console.log("Елемент повинен бути числом.");
            i--; // Повторно запитати елемент
            continue;
        }

        if (minVal === null || val < minVal) {
            minVal = val;
            countMin = 1;
        } else if (val === minVal) {
            countMin++;
        }
    }

    console.log("Мінімальне значення =", minVal);
    console.log("Кількість входжень мінімального значення =", countMin);
    console.log("Чи є ця кількість простою?", isPrime(countMin));

    rl.close();
}

main();
