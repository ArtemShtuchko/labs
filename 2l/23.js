const readline = require('readline');

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, answer => {
            resolve(answer);
        });
    });
}

function sumOfDigits(num) {
    let s = 0;
    let n = Math.abs(num); 
    while (n > 0) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s;
}

function selectionSortIndices(arr) {
    const indices = arr.map((_, idx) => idx);

    for (let i = 0; i < indices.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < indices.length; j++) {
            const sum1 = sumOfDigits(arr[indices[j]]);
            const sum2 = sumOfDigits(arr[indices[minIndex]]);
            if (sum1 < sum2 || (sum1 === sum2 && indices[j] < indices[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [indices[i], indices[minIndex]] = [indices[minIndex], indices[i]]; 
        }
    }
    return indices;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function main() {
    const N = parseInt(await askQuestion("Введіть кількість елементів N: "));
    let arr = [];

    for (let i = 0; i < N; i++) {
        arr.push(parseInt(await askQuestion(`a[${i}] = `)));
    }

    const sortedIndices = selectionSortIndices(arr); 

    console.log("Упорядковані індекси:");
    console.log(sortedIndices.join(" "));

    rl.close();
})();
