function checkAge(age) {
    if (age < 0 || age > 100) {
        throw new Error("Возраст должен быть в диапазоне от 0 до 100!");
    }
}

// Пример использования
try {
    checkAge(25); // Нет ошибки
    checkAge(-5); // Ошибка
    checkAge(120); // Ошибка
} catch (error) {
    console.error(error.message);
}
