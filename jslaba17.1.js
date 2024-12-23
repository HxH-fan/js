function printNumbers(from, to) {
    let current = from;
    const intervalId = setInterval(() => {
      console.log(current);
      if (current === to) {
        clearInterval(intervalId);
      }
      current++;
    }, 1000);
  }
  printNumbers(1, 5);  // Выведет 1, 2, 3, 4, 5 каждую секунду
