function sortByAge(users) {
    users.sort((a, b) => a.age - b.age); // Сортировка по возрасту
}

// Пример использования
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];
sortByAge(arr);

console.log(arr[0].name); // "Вася"
console.log(arr[1].name); // "Маша"
console.log(arr[2].name); // "Петя"
