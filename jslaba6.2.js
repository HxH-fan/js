let number;

do {
    number = prompt("Введите число больше 100:", "");
} while (number !== null && number <= 100);

if (number === null) {
    console.log("Ввод отменён.");
} else {
    console.log("Вы ввели число больше 100:", number);
}
