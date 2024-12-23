function checkString(str) {
    if (typeof str !== "string" || str.trim() === "") {
        throw new Error("Строка пустая!");
    }
}

// Пример использования
try {
    checkString("Hello"); // Нет ошибки
    checkString(""); // Ошибка
    checkString("   "); // Ошибка
} catch (error) {
    console.error(error.message);
}
