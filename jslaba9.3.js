function camelize(str) {
    return str
        .split("-") // Разделяем строку по дефисам
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)) // Преобразуем слова
        .join(""); // Объединяем обратно в строку
}

console.log(camelize("background-color")); // "backgroundColor"
console.log(camelize("list-style-image")); // "listStyleImage"
console.log(camelize("-webkit-transition")); // "WebkitTransition"
