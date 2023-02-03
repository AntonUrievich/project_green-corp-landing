/* 1.1 Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.
Пример <div class="secret">...</div> Результат div */

console.log(document.querySelector(".secret").tagName.toLowerCase())

/* 1.2 Напишите скрипт, который определяет тип тега с идентификатором elem и выводит его в консоль.
Пример <div id="elem">...</div> Результат div */

console.log(document.getElementById("elem").tagName.toLowerCase())

/* 1.3 В HTML-документе есть несколько тегов с классом promo. Напишите скрипт, который определяет количество элементов с данным классом и выводит результат в консоль. */

let promo = document.querySelectorAll(".promo");
console.log(promo.length)

/* 1.4  Выведите в консоль название последнего тега, у которого есть класс target.
Пример заданного HTML-документа:
<div class="target">Первый элемент</div>
<p class="target">Второй второй</p>
<span class="target">Третий третий</span>
Пример результата: span */

let secret = document.getElementsByClassName("target");

for (let i = secret.length - 1; i > secret.length - 2; i--) {
  console.log(secret[i].nodeName.toLowerCase());
}

/* 1.5 В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.
Пример заданного HTML-документа:
<div class="price">100</div>
Пример результата:
<div class="price">200</div> */

let card = document.querySelector(".price");
card.innerText= card.textContent*2

/* 1.6  */