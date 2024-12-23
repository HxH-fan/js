function stringToNumber(str) {
    let number = Number(str);
    if (isNaN(number)) {
        throw new Error("Строка не является числом!");
    }
    return number;
}

// Пример использования
try {
    console.log(stringToNumber("42")); // 42
    console.log(stringToNumber("abc")); // Ошибка
} catch (error) {
    console.error(error.message);
}
