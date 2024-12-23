function divide(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль невозможно!");
    }
    return a / b;
}

// Пример использования
try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Ошибка
} catch (error) {
    console.error(error.message);
}
