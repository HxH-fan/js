function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1); // Удаляем элементы вне диапазона
            i--; // Сдвигаем индекс после удаления
        }
    }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);

console.log(arr2); // [3, 1]
