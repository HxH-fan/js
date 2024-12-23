function printNumbers(from, to) {
    let current = from;
    function print() {
      console.log(current);
      if (current < to) {
        current++;
        setTimeout(print, 1000);
      }
    }
    print();
  }
  delayedGreeting('Никита', 2000);  // Выведет "Привет, Никита!" через 2 секунды
  