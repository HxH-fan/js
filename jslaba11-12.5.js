function Accumulator(startingValue) {
    this.value = startingValue; // Устанавливаем начальное значение

    this.read = function () {
        let newValue = +prompt("Введите число:", 0);
        this.value += newValue; // Прибавляем введённое число к текущему значению
    };
}

// Пример использования
let accumulator = new Accumulator(1); // Начальное значение 1
accumulator.read(); // Прибавляем введённое пользователем значение
accumulator.read(); // Прибавляем ещё одно значение
console.log(accumulator.value); // Сумма всех значений
