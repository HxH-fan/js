function countdown(number) {
    let current = number;
    const intervalId = setInterval(() => {
      console.log(current);
      if (current === 0) {
        clearInterval(intervalId);
        console.log("Время вышло!");
      }
      current--;
    }, 1000);
  }
  countdown(5);  // Выведет 5, 4, 3, 2, 1, 0 и "Время вышло!"
  