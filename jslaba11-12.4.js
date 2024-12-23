let calculator = {
    read() {
        this.a = +prompt("Введите первое число:", 0);
        this.b = +prompt("Введите второе число:", 0);
    },
    sum() {
        return this.a + this.b; // Возвращаем сумму
    },
    mul() {
        return this.a * this.b; // Возвращаем произведение
    }
};

// Пример использования
calculator.read();
console.log(calculator.sum()); // Сумма чисел
console.log(calculator.mul()); // Произведение чисел
