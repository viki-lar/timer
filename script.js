//  В отдельной папке создать html и js
//   Вывести текущий день и время на страницу в таком формате
// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время: 12:05:15 PM
// До нового года осталось 175 дней

const timer = () => {
  const goodDays = document.querySelector("#goodDay");
  const time = document.querySelector("#time");
  const newYearDay = document.querySelector("#newYear");

  const deadline = "1 januaru 2023";
  const dateNow = new Date();
  const dateNewYear = new Date(deadline);

  const getTimeRemaining = function () {
    //количество дней до нового года
    const newYear = Math.floor((dateNewYear - dateNow) / 1000 / 60 / 60 / 24);

    // текущее время
    let timeNow = dateNow.toLocaleTimeString();

    let dayWeek = dateNow.getDay();
    let hours = dateNow.getHours();
    let goodDay;
    let dayWeeks;

    // определение части суток
    if (hours <= 6) {
      goodDay = "Доброй ночи";
    } else if (hours <= 12) {
      goodDay = "Доброе утро";
    } else if (hours <= 18) {
      goodDay = "Добрый  день";
    } else {
      goodDay = "Добрый вечер ";
    }

    // определение день недели

    const week = [
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
      "воскресенье",
    ];

    for (let index in week) {
      if (dayWeek == index) {
        dayWeeks = week[index - 1];
      }
    }

    // возвращаем объект
    return { goodDay, dayWeeks, timeNow, newYear };
  };

  // вывод данных на страницу
  const updateClock = () => {
    let getTime = getTimeRemaining();
    goodDays.textContent = `${getTime.goodDay} , cегодня ${getTime.dayWeeks}`;
    time.textContent = ` Текущее время: ${getTime.timeNow} `;
    newYearDay.textContent = ` До Нового Года осталось ${getTime.newYear} дней `;
  };

  setTimeout(updateClock, 1000);
};

timer();
