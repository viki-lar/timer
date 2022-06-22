//Создайте отдельную HTML страницу с полем ввода (тэг input) и пустым параграфом (тэг p)
// Стилизация на ваше усмотрение.
// Введённый в поле текст должен отображаться внутри параграфа, но с задержкой в 300мс.
// При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый.
// Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в параграфе (тэг p)

"use strict";

const input = document.querySelector("input");
const text = document.querySelector("p");

// описание фунции debounce
const debounce = (func, timeout) => {
  let timer;
  //возвращается функция
  return (...args) => {
    // скидывается таймер
    clearTimeout(timer);
    //задается отложенное выполнение функции
    timer = setTimeout(() => {
      func.apply(this, args);
    }, 3000);
  };
};
const saveInput = () => {
  text.textContent = input.value;
  input.value = "";
};
const processChange = debounce(() => saveInput());

// слушатель
input.addEventListener("change", processChange);
