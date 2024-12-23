// Задача 1: Глобальная и локальная область видимости
function outer() {
    let x = 42; // Локальная переменная
    function inner() {
        console.log("Значение x из inner:", x); // Доступ к локальной переменной outer
    }
    inner();
}
outer();
// Вывод: Значение x из inner: 42

// Задача 2: Проблема с областью видимости
function createCounter() {
    let count = 0; // Локальная переменная замыкания
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Задача 3: Вложенные функции и переменные
function outerFunction() {
    let message = "Hello from outerFunction"; // Переменная из внешней функции

    function innerFunction() {
        message = "Hello from innerFunction"; // Изменение переменной outerFunction
        console.log("Изнутри innerFunction:", message);
    }

    innerFunction();
    console.log("После вызова innerFunction:", message);
}
outerFunction();
// Вывод:
// Изнутри innerFunction: Hello from innerFunction
// После вызова innerFunction: Hello from innerFunction

// Задача 4: Именованная функция и область видимости
let name = "Global Name"; // Глобальная переменная

function namedFunction() {
    let name = "Local Name"; // Локальная переменная
    console.log("Локальная переменная name:", name); // Local Name
    console.log("Глобальная переменная name:", globalThis.name); // Global Name
}

namedFunction();
