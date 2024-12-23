function findElement(arr, element) {
    if (!arr.includes(element)) {
        throw new Error(`Элемент ${element} не найден в массиве!`);
    }
    return element;
}

// Пример использования
try {
    console.log(findElement([1, 2, 3], 2)); // 2
    console.log(findElement([1, 2, 3], 5)); // Ошибка
} catch (error) {
    console.error(error.message);
}
