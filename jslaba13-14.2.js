function checkNumber(num) {
    if (typeof num !== "number" || isNaN(num)) {
        throw new Error("Переданное значение не является числом!");
    }
}

// Пример использования
try {
    checkNumber(10); // Нет ошибки
    checkNumber("10"); // Ошибка
} catch (error) {
    console.error(error.message);
}
