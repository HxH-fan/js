function repeatAction(fn, interval) {
    const intervalId = setInterval(fn, interval);
  
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Повторный вызов остановлен через 5 секунд.");
    }, 5000);
  }
  repeatAction(() => {
    console.log("Функция вызвана");
  }, 1000);  // Функция будет вызываться каждую секунду и остановится через 5 секунд
  