// Функция sum
function sum(a) {
    let total = a;
    function inner(b) {
      if (b === undefined) return total;
      total += b;
      return inner;
    }
    return inner;
  }
  
  // Функция createCounter
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  // Функция createUser
  function createUser(name) {
    return {
      greet: function() {
        console.log(`Привет, ${name}!`);
      }
    };
  }
  
  // Функция memoize
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  // Пример использования функций
  
  // Пример sum
  console.log(sum(1)(2)());  // 3
  console.log(sum(1)(2)(3)());  // 6
  console.log(sum(5)(-1)(2)());  // 6
  console.log(sum(6)(-1)(-2)(-3)());  // 0
  console.log(sum(0)(1)(2)(3)(4)(5)());  // 15
  
  // Пример createCounter
  const counter = createCounter();
  console.log(counter());  // 1
  console.log(counter());  // 2
  console.log(counter());  // 3
  
  // Пример createUser
  const user = createUser('Никита');
  user.greet();  // Привет, Никита!
  
  // Пример memoize
  function add(a, b) {
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  console.log(memoizedAdd(1, 2));  // 3
  console.log(memoizedAdd(1, 2));  // 3 (используется кешированный результат)
  console.log(memoizedAdd(2, 3));  // 5
  