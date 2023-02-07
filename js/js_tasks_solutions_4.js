/* 1.1 Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.
Пример <div class="secret">...</div> Результат div */

//console.log(document.querySelector(".secret").nodeName.toLowerCase())
//console.log(document.querySelector(".secret").localName)
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

let result = 0;
let elems = document.querySelectorAll(".numeric");
elems.forEach(elem => result += +elem.innerText);

/* 1.11 В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.
Пример заданного HTML-документа:
<ul id="cars">
<li>Tesla</li>
<li>Opel</li>
</ul>
Пример результата: ["Tesla',"Opel"] */

let content = document.querySelector('.cars');
let car = content.children;
const cars = [];
for (let i = 0; i < car.length; i++) {
    cars.push(car[i].textContent)
}
console.log(cars) 

/* 2.1 Напишите скрипт, который создает новый элемент <p> в переменной new_element и добавляет его в тег с идентификатором root. Созданный тег <p> должен содержать в себе фразу Ура! Мой скрипт отработал верно! */

let new_element = document.createElement("p");
new_element.innerHTML = "Ура! Мой скрипт отработал верно!";
let root = document.getElementById("root")
root.appendChild(new_element);

/* 2.2 В HTML-документе есть тег <p> c идентификатором title. Напишите скрипт, который создает новый элемент <h2> в переменной new_element с текстовым содержимым Сегодня солнечно, минус 15 и добавляет новый элемент сразу после тега с идентификатором title. */

let new_element = document.createElement("h2");
new_element.innerText = "Сегодня солнечно, минус 15";

let card = document.querySelector(".card");
let content = card.querySelector(".content");

content.appendChild(new_element);
console.log(content.innerHTML);

/* 2.3 В HTML-документе задан тег <ul> c элементами <li> внутри. Напишите скрипт, который создает новый элемент <li> с текстовым содержимым Велосипед в переменной new_element и добавляет его в начало списка <ul>. */

let new_element = document.createElement("li");
new_element.innerText = "Велосипед";

let card = document.querySelector(".card");
let content = card.querySelector(".content");
let caption = content.querySelector("ul");
let cap = caption.querySelector("li");

caption.insertBefore(new_element, cap);

/* 2.4 В HTML-документе есть несколько тегов <div>. Напишите скрипт, который всем тегам <div> добавляет класс adds. */

let card = document.querySelector(".card");

let content = card.getElementsByTagName('div')
for (let i = 0; i < content.length; i++) {
  content[i].className="adds";
//  console.log(content[i].className);
}

/* 2.5 В HTML-документе есть несколько тегов <p>. Напишите скрипт, который присваивает каждому тегу идентификатор — от значения p_1 и до p_<n>. Тут n — количество параграфов. */

let card = document.querySelector(".card");
let ident=1;

let content = card.getElementsByTagName('p')

for (let i = 0; i < content.length; i++) {
    content[i].id="p_"+ident;
    ident +=1;
    console.log(content[i].id);
}

/* 2.6 В HTML-документе заданы теги <p>. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.
Пример заданного HTML-документа:
<p>Delete<p>
<p>Абзац<p>
<p>Delete<p>
Пример результата:
<p>Абзац<p> */

let card = document.querySelector(".card");
let content = card.getElementsByTagName('p')

for (let i = 0; i < content.length; i++) {
    if (content[i].textContent == "Delete"){
        content[i].remove();
    }
}

let bodyp = document.getElementsByTagName("p")
for (let i = 0; i < bodyp.length; i++) {
    if (bodyp[i].textContent == "Delete"){
        bodyp[i].remove();
    }
}

/* 2.7 В скрипте объявлен массив values, который состоит из чисел. В HTML-документе есть множество тегов <p> с классом elems. Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values.
Пример значений:
values = [10, 50, 100]
Пример заданного HTML-документа:
<p class=”elems”>50</p>
<p class=”elems”>20</p>
<p class=”elems”>10</p>
Пример результата в HTML-документе:
<p class=”elems”>20</p> */

const values = [15, 20, 25];

let card = document.querySelector(".card");
let content = card.getElementsByClassName("elems")

for (let i = 0; i < content.length; i++) {
    console.log(values.includes(Number(content[i].textContent)))
}
if ((values.includes(Number(content[i].textContent))) != "false") {
    card.removeChild(content[i]);
}

/* 2.8 В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.
Пример заданного HTML-документа:
<div id=”div1”><h2>Text</h2><span>subtext</span></div>
<div id=”div2”><h1>Title</h1></div>
Пример результата в HTML-документе:
<div id=”div1”></div>
<div id=”div2”><h1>Title</h1><h2>Text</h2><span>subtext</span></div> */

let div_1 = document.getElementById('div1')
let div_2 = document.getElementById('div2');
let p = div_1.firstElementChild;
let p2 = div_1.lastElementChild;
div_2.append(p)
div_2.append(p2)

/* 2.9 В HTML-документе есть тег <ul> c идентификатором first. Внутри этого тега есть теги <li>. Напишите скрипт, который создает новый тег <li> в переменной new_element и добавляет в элемент <ul> с идентификатором first. После добавления нового элемента выведите в консоль общее количество тегов <li> в теге <ul> с идентификатором first.
Пример заданного HTML-документа:
<ul id="first">
<li>1</li>
<li>2</li>
<li>3</li>
</ul> */

el = document.querySelector("#first");
new_element = document.createElement("li");
el.appendChild(new_element);
console.log(el.children.length);

/* 2.10 В скрипте объявлена переменная values, которая содержит массив из строк. В HTML-верстке есть два тега <div> с классами div1 и div2. Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, значение которого встречается в списке values, переместились в тег с идентификатором div2.
Пример значений:
values = ["велосипед", "ролики", "лыжи"]
Пример заданного HTML-документа:
<div id="div1"><p>велосипед</p><p>лыжи</p><p>скейт</p></div>
<div id="div2"></div>
Пример результата в HTML-документе:
<div id="div1"><p>скейт</p></div>
<div id="div2"><p>велосипед</p><p>лыжи</p></div> */

values = ["велосипед", "ролики", "лыжи"];
let d1 = document.querySelector("#div1"),
    d2 = document.querySelector("#div2");

els = Array.from(d1.children);
els.forEach(el => {
    if (values.includes(el.innerText)) {
        d2.append(el);
    }
})