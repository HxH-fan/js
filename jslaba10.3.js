function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function (str) {
        let [a, operator, b] = str.split(" ");
        a = +a;
        b = +b;

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            throw new Error("Некорректное выражение");
        }

        return this.methods[operator](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

// Пример использования
let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3")); // 8
