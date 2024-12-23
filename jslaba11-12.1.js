function isEmpty(obj) {
    for (let key in obj) {
        return false; // Если есть хотя бы одно свойство, возвращаем false
    }
    return true; // Если свойства отсутствуют, возвращаем true
}

// Пример использования
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
