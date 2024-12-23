let input = prompt("Введите число с единицами измерения (например, 100px или 12.5em):");
let integerPart = parseInt(input);
let floatPart = parseFloat(input);
alert(`Целая часть: ${integerPart}, Дробная часть: ${floatPart}`);
