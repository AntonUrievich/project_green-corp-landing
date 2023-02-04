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

/* 1.6 В HTML-документе есть тег <p> c классом links. Внутри этого элемента указана просто текстовая ссылка без тега <a>. Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.
Пример заданного HTML-документа:
<p class="links">google.com</p>
Пример результата:
<p class="links"><a>google.com</a></p> */

let card = document.querySelector(".links");
card.innerHTML = "<a>"+card.innerHTML+"</a>"

/* 1.7 В HTML-документе есть тег с классом content, внутри него есть тег <p>. Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.
Пример заданного HTML-документа:
<p class="content">
<p>Внутренний текст</p>
</p>
Пример результата
<p class="content">
<b>Внутренний текст</b>
</p> */

let card = document.querySelector(".content");
let caption = card.querySelector("p");
card.innerHTML = "<b>"+caption.innerText+"</b>";
console.log(card.innerHTML);

/* 1.8 В HTML-документе заданы элементы с числовым значением с классом price. Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.
Пример заданного HTML-документа:
<p class='price'>100</p>
<p class='price'>200</p>
Пример результата: 300 */

let result = 0;
let price = document.getElementsByClassName("price");

for (let i = 0; i < price.length; i++) {
    temp=(Number(price[i].textContent));
    result +=temp;
}

console.log(result);

/* 1.9 В HTML-документе заданы теги с числовым значением с классом numeric. Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.
Пример заданного HTML-документа:
<p class="numeric">62</p>
<p class="numeric">-12</p>
<p class="numeric">16</p>
Пример результата:
<p class="numeric">62</p>
<p class="numeric"><b>-12</b></p>
<p class="numeric">16</p> */

let nums = document.getElementsByClassName("numeric");

for (let i = 0; i < nums.length; i++) {
    let temp = (Number(nums[i].textContent));
    if (temp >= 0){
        continue;
    }
    else {
         nums[i].innerHTML = "<b>"+nums[i].innerText+"</b>";
    }
}

/* 1.10 Исправьте скрипт таким образом, чтобы в результате его работы в переменной result была сумма значений тегов с классом numeric.
Пример заданного HTML-документа:
<p class="numeric">62</p>
<p class="numeric">-12</p>
<p class="numeric">16</p>
Пример результата: result = 66 

let result = 0;
let elems = document.getElementsByClassName(".numeric");
elems.forEach(elem => result += +elem.innerText); */

/* 1.11 В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.
Пример заданного HTML-документа:
<ul id="cars">
<li>Tesla</li>
<li>Opel</li>
</ul>
Пример результата: ["Tesla',"Opel"] */

