function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2; // Умножаем числовые свойства на 2
        }
    }
}

// Пример использования
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);
// { width: 400, height: 600, title: "My menu" }
