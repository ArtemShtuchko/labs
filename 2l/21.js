const readline = require('readline');

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, answer => {
            resolve(parseFloat(answer));
        });
    });
}

// Межі області: дві вертикальні стрічки та одна горизонтальна
const X_min1 = 1, X_max1 = 3; // Перша вертикальна стрічка
const X_min2 = 5, X_max2 = 7; // Друга вертикальна стрічка
const Y_min3 = 2, Y_max3 = 4; // Горизонтальна стрічка

function inRegion(x, y) {
    // Перевірка, чи точка у заданій області
    const inVert1 = (x >= X_min1 && x <= X_max1);
    const inVert2 = (x >= X_min2 && x <= X_max2);
    const inHorz = (y >= Y_min3 && y <= Y_max3);
    return inHorz && (inVert1 || inVert2);
}

function distanceToRegion(x, y) {
    // Обчислення відстані від точки до області
    const dx = Math.min(
        Math.max(X_min1 - x, 0, x - X_max1),
        Math.max(X_min2 - x, 0, x - X_max2)
    );

    const dy = Math.max(Y_min3 - y, 0, y - Y_max3);

    return Math.sqrt(dx * dx + dy * dy);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async function main() {
    let prevDist = Infinity;
    let attempts = 0;

    console.log("Спробуйте влучити в область на площині!");

    while (true) {
        const x = await askQuestion("Введіть x: ");
        const y = await askQuestion("Введіть y: ");
        attempts++;

        if (inRegion(x, y)) {
            console.log(`Нарешті ви влучили з ${attempts}-ї спроби!`);
            break;
        } else {
            const dist = distanceToRegion(x, y);

            if (prevDist === Infinity) {
                console.log("Промахнулися! Спробуйте ще раз.");
            } else {
                if (dist < prevDist) {
                    console.log("Тепліше!");
                } else if (dist > prevDist) {
                    console.log("Холодніше!");
                } else {
                    console.log("Без змін.");
                }
            }

            prevDist = dist;
        }
    }

    rl.close();
})();