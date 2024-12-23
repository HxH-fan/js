function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", "");
        if (value === null || value === "" || isNaN(value)) break;
        numbers.push(+value); // Преобразуем в число и добавляем в массив
    }
    return numbers.reduce((sum, num) => sum + num, 0); // Суммируем числа
}

console.log(sumInput()); // Запуск функции и вывод результата
