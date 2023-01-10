/* 3.2 В программе заданы две переменные name и last_name, которые хранят имя и фамилию соответственно. Посчитайте общую длину имени и фамилии и выведите ее в консоль. Обратите внимание: в имени и фамилии по бокам могут быть пробельные символы — их считать не надо.
name = Анатолий last_name = Сидоров result = 15
name = Семен last_name = Семенов result = 12
name = Светлана last_name = Олеговна result = 16
name = Максим last_name = Петров result = 12
name = Леонардо last_name = да Винчи result = 16 */

let name = "Всеволод";
let last_name = "\nСтарозубов";
console.log((name.trim() + last_name.trim()).length);

/* 3.3  В программе задана переменная word со строковым значением. Выведите в консоль первую букву значения в верхнем регистре.
word = велосипед result = В
word = ролики result = Р
word = Скейт result = С
word = лыжи result = Л */

console.log(word.toUpperCase().charAt()); // .charAt можно заменить []

/* 3.4 В программе задана переменная value, в которую записано дробное число. Выполните следующие операции:
округлите значение переменной "вверх" до целого значения;
округлите значение переменной "вниз" до целого значения;
округлите значение переменной по правилам математики до целого значения;
посчитайте сумму полученных выше значений и из результата возьмите корень квадратный;
из результата возьмите целую часть числа и выведите в консоль.
value = 5.4 result = 4
value = 7.6 result = 4
value = 11.3 result = 5
value = 23.9 result = 8 */

console.log(Math.trunc(Math.sqrt(Math.ceil(value) + Math.floor(value) + Math.round(value))));

/* 3.5 В программе заданы две переменные a и b с числовыми значениями. Выведите в консоль произведение значений этих переменных, возведенное в квадрат.
a = 3 b = 4 result = 144
a = 12 b = 5 result = 3600
a = 8 b = 15 result = 14400
a = 7 b = 24 result = 28224 */

console.log(Math.pow(a * b, 2));
// v2
console.log((a * b) ** 2);

/* 3.6 В программе заданы две переменные a и b с числовыми значениями. Посчитайте длину гипотенузы в прямоугольном треугольнике, если значения a и b являются длинами катетов. Результат выведите в консоль.
a = 3 b = 4 result = 5
a = 12 b = 5 result = 13
a = 8 b = 15 result = 17
a = 7 b = 24 result = 25 */

console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));

/* 3.7 В программе задана переменная obj, в которую записан объект со свойствами name, last_name и age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте строку по примеру и выведите ее в консоль. Обратите внимание, что имя и фамилию требуется заключить в различные виды кавычек.
obj = {"name":"Анатолий","last_name":"Максимов","age":32}
result = Имя: "Анатолий" Фамилия: 'Максимов' Возраст: 32
obj = {"name":"Степан","last_name":"Семенов","age":28}
result = Имя: "Степан" Фамилия: 'Семенов' Возраст: 28 */

//конкатенация
console.log("Имя: \"" + obj.name + "\" Фамилия: \'" + obj.last_name + "\' Возраст: " + obj.age);
// интерполяция
console.log(`Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`);

/* 3.8 В программе заданы три переменные name, last_name, age, в которых хранятся имя, фамилия и возраст пользователя соответственно. Сформируйте объект с ключами name, last_name, age и значениями из соответствующих переменных. Выведите этот объект в консоль.
name = "Анатолий"
last_name = "Максимов"
age = 32
result = {"name":"Анатолий","last_name":"Максимов","age":32}
name = "Степан"
last_name = "Семенов"
age = 28
result = {"name":"Степан","last_name":"Семенов","age":28} */

let obj = { name: name, last_name: last_name, age: age }
console.log(obj);

/* 3.9 В программе задана переменная value. Выведите в консоль ее тип. Не забудьте, что функция typeof со значением аргумента null выдает неправильный результат. При значении null необходимо вывести "null".
value = 12 result = "number"
value = "number" result = "string"
value = null result = "null"
value = true result = "boolean" */

console.log(typeof value); //не работает с null
// v2.1 для null
console.log(typeof value === "object" && value === null ? "null" : typeof value);
// v2.2
if (typeof value === "object" && value === null) {
    console.log("null")
} else { typeof value }

/* 3.10 В программе объявлены две переменные num_1 и num_2, в которых записаны численные значение в строковом виде. Преобразуйте строки в числа и посчитайте их сумму. Результат выведите в консоль.
"num_1" = "3" "num_2" = "5" "result" = 8
"num_1" = "0" "num_2" = "-3" "result" = -3
"num_1" = "3.4" "num_2" = "-1.4" "result" = 2
"num_1" = "-3" "num_2" = "-2" "result" = -5 */

sum = parseInt(num_1) + parseInt(num_2);
// второй вариант
sum = parseFloat(num_1) + parseFloat(num_2);

console.log(sum);

/* 3.11 В программе объявлена переменная size, в которой записано строковое значение. В строке size записано число и единицы измерения. Необходимо "достать" численное значение вывести в консоль.
"size" = "500%" "result" = 500
"size" = "100px" "result" = 100
"size" = "12.5fr" "result" = 12.5
"size" = "0.5rm" "result" = 0.5 */

console.log(parseFloat(size));

/* 3.12 В программе заданы три переменные a, b и c, в которых хранятся длина, ширина и высота прямоугольного параллелепипеда с указанием единиц измерения. Напишите программу, которая рассчитывает объем прямоугольного параллелепипеда и выводит результат в консоль без единиц измерения.
a = 5px b = 7px c = 4px result = 140
a = 8px b = 3px c = 1px result = 24
a = 1m b = 1m c = 1m result = 1
a = 6.13px b = 4.32px c = 6.7px result = 177.42672000000002 */

console.log(parseFloat(a) * parseFloat(b) * parseFloat(c));

/* 4.1 В программе задана переменная speed с числовым значением. Реализуйте программу, которая в зависимости от условия выполняет следующее действие:
если значение от 0 до 30 включительно, выведите строку Вы едете слишком медленно;
если значение от 31 до 70 включительно, выведите строку Вы едете с нормальной скоростью;
в ином случае выведите Вы едете слишком быстро, сбавьте скорость.
speed = 30 result = "Вы едете слишком медленно"
speed = 10 result = "Вы едете слишком медленно"
speed = 65 result = "Вы едете с нормальной скоростью"
speed = 120 result = "Вы едете слишком быстро, сбавьте скорость" */

if (speed <= 30) {
    console.log("Вы едете слишком медленно")
} else if (speed >= 31 && speed <= 70) {
    console.log("Вы едете с нормальной скоростью")
} else {
    console.log("Вы едете слишком быстро, сбавьте скорость")
}

/* 4.2 В программе объявлена переменная price, в которой хранится строка со значением цены. Переведите значение переменной в число (parseInt) и в зависимости от полученного значения выполните следующее действие:
если записанное значение оказалось не числом, выведите в консоль сообщение Не число;
если число равно 0 или является отрицательным, выведите в консоль сообщение Число не корректное;
в ином случае выведите в консоль значение числа. 
price = двадцать рублей result = Не число
price = -12 слонов и пол зайца result = Число не корректное
price = 65 евро result = 65
price = 432 result = 432 */

if (isNaN(parseInt(price))) {
    console.log("Не число")
} else if (parseInt(price) <= 0) {
    console.log("Число не корректное")
} else {
    console.log(parseInt(price))
}

/* 4.3 В программе объявлены три переменные a, b и c, в которые записаны числовые значения. Определите максимальное значение и выведите его в консоль, но помните: методом max пользоваться нельзя.
a = 1 b = 12 c = 42 result = 42
a = 14 b = 5 c = -8 result = 14
a = 72 b = 0 c = 4 result = 72
a = -1000002 b = -1000001 c = -1000000 result = -1000000 */

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

/* 4.4 В программе объявлены две переменные — temp и weather. Объявите переменную activity и присвойте ей значение по следующему правилу:
если значение переменной temp больше либо равно 25, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
если значение переменной temp от 10 до 24, a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "bowling";
в ином случае значение переменной activity должно быть "hiking".
 */

if (temp >= 25 && weather == "clean") {
    let activity = "golf"
} else if (temp >= 10 && temp < 25 && weather == "clean") {
    let activity = "bowling"
} else {
    let activity = "hiking"
}

/* 4.5 В программе определены две переменные со строковым значением word_1 и word_2. Допишите программу таким образом, чтобы в консоль выводилась строка наибольшей длины.
word_1 = велосипед word_2 = скейт result = велосипед
word_1 = дирижабль word_2 = люберцы result = дирижабль
word_1 = школа word_2 = стоимость result = стоимость */

console.log((word_1.length > word_2.length) ? word_1 : word_2)

/* 4.6 В программе объявлена переменная task, в которой записано одно из строковых значений: удалить, переименовать, редактировать. Напишите программу, которая выводит в консоль:
delete – при значении task – удалить;
rename – при значении task – переименовать;
edit – при значении task – редактировать. */

switch (task) {
    case "удалить":
        console.log("delete");
        break;
    case "переименовать":
        console.log("rename");
        break;
    case "редактировать":
        console.log("edit");
        break;
}

/* 4.7 В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:
<значение price> Р в <эквивалент значения range на русском языке> 
price = 23000 range = month result = 23000 Р в месяц
price = 15000 range = day result = 15000 Р в день
price = 7500 range = week result = 7500 Р в неделю */

switch (range) {
    case "day":
        console.log(price + " Р в день");
        break;
    case "week":
        console.log(price + " Р в неделю");
        break;
    case "month":
        console.log(price + " Р в месяц");
        break;
}

/* 4.8 В программе объявлены три переменные — a, b и sign. В переменных a и b хранятся числовые значения. В переменную sign записано строковое значение одного из математических операторов +, -, /, *. Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b. Результат необходимо выводить в консоль. Гарантируется, что переменная b не равна нулю.
a = 5 b = 3 sign = + result = 8
a = 12 b = 4 sign = - result = 8
a = 5 b = 6 sign = * result = 30
a = 6 b = 2 sign = / result = 3 */

switch (sign) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
}

/* 4.9 В дополнение к заданию 4.8 необходимо правильно обработать случай деления на 0. При попытке поделить на 0 программа должна выводить в консоль сообщение: Делить на 0 нельзя!
a = 5 b = 3 sign = + result = 8
a = 12 b = 4 sign = - result = 8
a = 6 b = 0 sign = / result = Делить на 0 нельзя!
a = 6 b = 2 sign = / result = 3 */

switch (sign) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b > 0) {
            console.log(a / b);
        } else { console.log("Делить на 0 нельзя!"); }
        break;
}

/* 5.1 В программе объявлены две переменные start и end. Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. Результат выведите в консоль.
start = 0 end = 50 result = 275
start = 0 end = 100 result = 1050
start = 0 end = 5 result = 5
start = 5 end = 5 result = 5 */

/*let sum = start + start;

for (start, end; start <= end; start++) {
    if ((start % 5) == 0) console.log(sum = start + sum)
} */

let sum = start + start;

do {
    start++;
    if ((start % 5) == 0) console.log(sum = start + sum);
}
while (start <= end)

/* 5.2 В программе объявлена переменная word со строковым значением. Переверните строку, используя цикл, и выведите результат в консоль.
word = "деписолев" result = "велосипед"
word = "алокш" result = "школа"
word = "ижыл" result = "лыжи" */

let reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}
console.log(reverse)


/* 5.3 В программе объявлена переменная word, в которой записано строковое значение. Определите, является ли word палиндромом:
если является, выведите в консоль "Слово является палиндромом!";
если не является, выведите в консоль "Слово не является палиндромом!".
word = "Доход"
result = "Слово является палиндромом!"
word = "ШАЛАШ"
result = "Слово является палиндромом!"
word = "Велосипед"
result = "Слово не является палиндромом!"
word = "радар"
result = "Слово является палиндромом!" */

let reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}
if ((reverse.toUpperCase()) === (word.toUpperCase())) {
    console.log("Слово является палиндромом!");
} else { console.log("Слово не является палиндромом!"); }

/* 6.1 В программе объявлена переменная price, в которую записано числовое значение. Напишите функцию priceMessage(), которая выводит в консоль сообщение "Данный товар стоит X рублей", где вместо X указано значение переменной price. Вызовите функцию после ее определения.
price = 80000 result = "Данный товар стоит 80000 рублей"
price = 1400 result = "Данный товар стоит 1400 рублей"
price = 0 result = "Данный товар стоит 0 рублей"
price = 50000 result = "Данный товар стоит 50000 рублей" */

function priceMessage(price) {
    console.log(`Данный товар стоит ${price} рублей`);
}

priceMessage(price)

/* 6.2 В программе объявлены две переменные с числовым значением — num_1 и num_2. Напишите функцию mult, которая принимает два аргумента и возвращает их произведение. Вызовите функцию mult и передайте ей в качестве аргументов значения переменных num_1 и num_2, а результат выведите в консоль.
num_1 = 3 num_2 = 6 result = 18
num_1 = 4 num_2 = 7 result = 28
num_1 = 5 num_2 = 8 result = 40
num_1 = 9 num_2 = 10 result = 90 */

function mult(num_1, num_2) {
    return num_1 * num_2;
}

console.log(mult(num_1, num_2))

/* 6.3 В программе объявлена переменная num, в которую записано числовое значение. Напишите функцию square(), которая возвращает квадрат этого числового значения. Обратите внимание, что функция обращается к глобальной переменной, а не получает значение в качестве аргумента.
num = 2 result = 4
num = 3 result = 9
num = -4 result = 16
num = 0 result = 0 */

function square() {
    return num * num;
}

/* 6.4 В программе объявлена переменная num, в которой записано числовое значение. Используя цикл, возведите значение переменной в квадрат три раза. Каждый результат конкатенируйте через пробел и выведите в консоль.
num = 2 result = "4 16 256"
num = 3 result = "9 81 6561"
num = 4 result = "16 256 65536"
num = 5 result = "25 625 390625" */

// !!! Не срабатывает в тестах!!!
function square(num) {
    return num * num;
}

for (let i = 1; i <= 1; i++) {
    console.log(`${square(num)} + ${square(square(num))} + ${square(square(square(num)))}`);
}

/* 6.5 В программе объявлена переменная data, в которой записано строковое значение. Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:
если переменная data содержит не число, функция должна вернуть численное значение 0;
если переменная data содержит число, например "123", то функция возвращает числовое значение 123.
Вызовите эту функцию и выведите результат в консоль.
data = "привет" result = 0
data = "120px" result = 120
data = "120" result = 120
data = "двадцать" result = 0 */

function getNumber(data) {
    newData = parseInt(data);
    if (!isNaN(newData)) {
        console.log(newData);
    } else {
        console.log(0);
    }
}

getNumber(data)

/* 6.6 В программе объявлены две переменные — value и total, в которых записаны числовые значения. Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. Вызовите эту функцию с value и total в качестве аргументов. Результат работы функции выведите в консоль.
value = 4 total = 80 result = 5
value = 14 total = 140 result = 10
value = 6 total = 24 result = 25
value = 50 total = 50 result = 100 */

function getPercent(value, total) {
    percent = ((value * 100) / total);
    console.log(percent);
}

getPercent(value, total)

/* Возвести 2 в 10 степень используя цикл while и вывести результат в консоль */

/* для удобства и для того, чтобы в будущем можно было легко менять значения, не перелопачивая весь код объявляем переменные: num - число, которое будем возводить в степень, exp - сама степень, result - переменная для получения результата, мы ее обозначили как числовой тип и присвоили единицу, потому что если там будет 0, то при возведении в степень всегда будет результат 0, count - ну и счётчик...причем у нас ему присвоен 0, значит в решении count должен быть меньше exp ибо отсчет начинается с нуля...а с нуля до девяти - это уже 10 (нам требуется возвести в степень 10)...если же в count мы запихаем 1, то тогда в решении будет count <= exp, потому что начнется отсчёт с единицы пока не станет равно нашей exp, которая в свою очередь равна 10.
результатом будет присвоение переменно result умножение её на число, которое возводится в степень. т.е. 1*2=2, теперь уже переменная result = 2. а значит в следующем цикле result = result*num будет выглядеть как 2*2. счётчик увеличился на один шаг (count++) и пока что в теле while значение true, поэтому он продолжает запускать цикл заново. Таким образом пока счетчик не перестанет соответствовать условию, что он меньше 10 (count<exp) циклы будут запускаться снова и снова. в то же время переменная result все набирает и набирает обороты. 2*2 - уже она равна 4 и выражениу result*num уже выглядит как 4*2 (у нас уже получается 2 в степени 3). */

var num = 2, exp = 10, result = 1; count = 0;
while (count < exp) {
    result = result * num;
    count++;
}
console.log(result);

/* Звёздочки в консоли. Цикл while */

var string = "", cnt = 1;
while (cnt <= 5) {
    string += "*";
    console.log(string);
    cnt++;
}

/* 9.1 В программе объявлена переменная list, представляющая массив значений. Используя методы массивов, выполните следующие действия:
добавьте в начало массива новый элемент со значением Яблоко;
удалите последний элемент массива;
добавьте в конец массива новый элемент со значением Клубника.*/

list.unshift("Яблоко");
list.pop();
list.push("Клубника");
console.log(list)

/* Дополнительное задание. Имеется массив который нужно отфильтровать с помощью функции методом перебора элементов от пустых значений Boolean(value) === false.
let mass = ["Ivan", "Marina", 0, "Vova", undefined, "Boris", "Gleb", null, "Galina", "Alina", "", "Susana", "0", "undefined", "Georgy" ]
Очищенный массив вывести в консоль */

function compactArray() {
    const result = [];
    for (let value of mass) {
        if (Boolean(value)) {
            result.push(value);
        }
    }
    return result;
}

console.log(compactArray(mass))

/* 9.2 В программе объявлена переменная list, в которую записан массив из строковых значений. Посчитайте и выведите в консоль элемент с максимальной длиной. Если элементов с такой длиной несколько, выведите первый.
"list" = ["Груша","Яблоко"] "result" = "Яблоко"
"list" = ["Яблоко","Груша","Клубника"] "result" = "Клубника"
"list" = ["Банан","Апельсин","Яблоко"] "result" = "Апельсин"
"list" = ["Банан","Груша","Сок"] "result" = "Банан" */

var longest = list.sort(
    function (a, b) {
        return b.length - a.length;
    }
)
[0];

console.log(longest)

/* !!! Циклы for, for in, for of, forEach !!! */

/* Дополнительное задание к задаче 9.3.
Создать функцию. которая будет генерировать массив с случайными числами от 1 до 100 */

let arr = [];
function getRandom(n) {
    return Math.floor(Math.random() *n);
}
let length = 10; // количество случайных чисел в массиве

while (length--) {
    arr.push(getRandom(100)); // числа до 100
}

console.log(arr)

/* 9.3 В программе объявлена переменная list, которая содержит массив чисел. Используя цикл, посчитайте сумму чисел и выведите в консоль.
"list" = [23,13,3] "result" = 39
"list" = [3,4,63] "result" = 70
"list" = [-23,4,7] "result" = -12
"list" = [2,41,13] "result" = 56 */

// V1 for
console.time("for");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Сумма for:", sum);
console.timeEnd("for");

// V2 for in
console.time("for in");
let sum = 0;
for (let k in arr) {
    sum += arr[k];
}
console.log("Сумма for in:", sum);
console.timeEnd("for in");

// V3 for of
console.time("for of");
let sum = 0;
for (let val of arr) {
    sum += val;
}
console.log("Сумма for of:", sum);
console.timeEnd("for of");

// V4 forEach
console.time("forEach");
let sum = 0;
arr.forEach(function(el) {
    sum += el;
});
console.log("Сумма forEach:", sum);
console.timeEnd("forEach");

// my solution for this task
const sum = list.reduce((partialSum, a) => partialSum + a, 0);
console.log(sum);

/* 9.4 В программе объявлены две переменные — list_1 и list_2, в каждой из которых хранится массив из чисел. Объедините два массива в один и каждое значение возведите в квадрат. Результат выведите в консоль.
"list_1" = [12,3] "list_2" = [2,1] "result" = [144,9,4,1]
"list_1" = [4,5] "list_2" = [] "result" = [16,25]
"list_1" = [2,4] "list_2" = [4,6] "result" = [4,16,16,36]
"list_1" = [] "list_2" = [] "result" = [] */

list_1 = list_1.concat(list_2);

list_1.forEach(function(element, index, array){
    array[index] = element* element;
});
console.log(list_1);

/* 9.5 В программе объявлена переменная list, в которую записан массив из положительных и отрицательных числовых значений. Используя цикл, посчитайте сумму положительных чисел и выведите результат в консоль.
"list" = [12,-4,5,32,2] "result" = 51
"list" = [-12,3,65,3,-5] "result" = 71
"list" = [3,-4,32,1,-4] "result" = 36 */

let result = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) {
        result += list[i];
    }
}
console.log(result);

/* 9.6 В программе объявлена переменная list, в которую записан массив числовых значений от 1 до 100. Используя цикл, сформируйте сумму из простых чисел этого диапазона и выведите результат в консоль.
"list" = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] "result" = 1060 */

let result = 0;
for (let i = 2; i < list.length; i++) {
    let count = 0;
    for (let num of list) {
        if (num > list[i] || count > 3) break;

        if (list[i] % num === 0) {
            count++;
        }
    }
    if (count === 2) result += list[i];

}
console.log(result);

/* 9.7 В программе объявлена переменная list, в которую записан массив из числовых значений. Рассчитайте произведение максимального и минимального элементов массива. Результат выведите в консоль.
list = [2,45,3,23,6] result = 90
list = [5,3,31,1,12] result = 31
list = [5,4,3,11,32] result = 96
list = [9,34,2,54,2] result = 108 */

let max = -Infinity;
let min = Infinity;
for (let el of list) {
    max = Math.max(max,el);
    min = Math.min(min,el);
}
console.log(max*min;)

// my solution
var min = Math.min(...list);
var max = Math.max(...list);
console.log(min*max);

// or more shortly
console.log(Math.max(...list) * Math.min(...list));

/* 9.8 В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите программу, которая переворачивает массив list и выводит результат в консоль. Метод массива reverse() использовать нельзя.
"list" = [2,45,3,23,6] "result" = [6,23,3,45,2]
"list" = [5,3,31,1,12] "result" = [12,1,31,3,5]
"list" = [5,4,3,11,32] "result" = [32,11,3,4,5]
"list" = [9,34,2,54,2] "result" = [2,54,2,34,9] */

let result = [];

for (let i = list.length - 1; i >=0 ;i--) {
    result.push(list[i]);
}
console.log(result)

/* 9.9 В программе объявлена переменная sentence со строковым значением. Преобразуйте эту строку в массив так, чтобы каждое слово было отдельным элементом массива. Результат выведите в консоль.
Метод строки split() использовать нельзя.
 "sentence" = "Завтра будет лучше чем вчера"
"result" = ["Завтра","будет","лучше","чем","вчера"]
"sentence" = "Терпение и труд все, я устал"
"result" = ["Терпение","и","труд","все,","я","устал"]
"sentence" = "Семь раз отмерь, один раз отрежь"
"result" = ["Семь","раз","отмерь,","один","раз","отрежь"]
"sentence" = "Слово не воробей, все не воробей кроме воробья"
"result" = ["Слово","не","воробей,","все","не","воробей","кроме","воробья"]*/

let words = [];
let word = "";
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        words.push(word);
        word = "";
    } else {
        word += sentence[i];
    }
}
words.push(word);
console.log(words);

/* 9.10 В программе объявлена переменная list, в которую записан массив из числовых значений. Напишите функцию count(list), которая принимает массив в качестве аргумента и возвращает количество четных элементов в массиве. Вызовите функцию count(list) и в качестве аргумента передайте ей список list. Выведите в консоль то, что вернет функция.
list = [2,45,3,23,6] result = 2
list = [5,3,31,1,12] result = 1
list = [5,4,3,11,32] result = 2
list = [9,34,2,54,2] result = 4 */

function quantityEvenNum() {
    const result = [];
    for (let value of list) {
        if (value % 2 === 0) {
            result.push(value);
        }
    }
    return result;
}

console.log(quantityEvenNum(list).length)

/* 9.11 В программе объявлена переменная list, в которую записан массив из числовых значений. Гарантируется, что массив не пустой. Реализуйте функцию average(list), которая принимает в качестве аргумента массив, рассчитывает среднее значение элементов массива, округляет получившееся значение по правилам математики и получившееся значение возвращает. Вызовите функцию average(list) и в качестве аргумента передайте список list. То, что функция вернет, необходимо вывести в консоль.
list = [2,45,3,23,6] result = 16
list = [5,3,31,1,12] result = 10
list = [5,4,3,11,32] result = 11
list = [9,34,2,54,2] result = 20 */

function average (list) {
    let s = 0;
    for ( let i = 0; i < list.length; i++) {
        s += list[i];
    }
    let result = Math.round(s/list.length)
    return result;
}

console.log(average (list))

/* 9.12 В программе объявлена переменная list, в которой записан массив из чисел и логических значений. Используя цикл, посчитайте сумму числовых значений до первого логического значения. Дойдя до логического значения, остановите цикл. Результат выведите в консоль.
"list" = [2,54,2,54,false,2]
"result" = 112
"list" = [4,23,6,54]
"result" = 87
"list" = [true]
"result" = 0
"list" = [2,false,4,23,true,55,2]
"result" = 2 */

let result = 0;
for ( let value of list) {
  if (typeof(value) === "number") {
    result += value;
  } else if (typeof(value) === "boolean") {
    break;
  }
}
console.log(result)

/* 9.13 Используя цикл, сформируйте массив list со значениями от 10 до 20. Выведите значение переменной list в консоль.
"result" = [10,11,12,13,14,15,16,17,18,19,20] */

list = [];
for (let i = 10; i <= 20; i++) {
    list.push(i);
}
console.log(list);

/* 9.14 В программе объявлена переменная list, в которую записан массив. Используя цикл, сформируйте массив numbers_list, который содержит в себе только числа из массива list. Если в процессе прохода циклом по массиву list обнаружится значение false, последующие значения рассматривать не нужно. В конце программы выведите значение переменной numbers_list в консоль. 
"list" = [2,"привет",23,true,2,false,2]
"result" = [2,23,2]
"list" = ["привет",1,"пока",true,2,false]
"result" = [1,2]
"list" = [4,2,65,3,2,11]
"result" = [4,2,65,3,2,11]
"list" = ["привет","пока"]
"result" = [] */

let hash = [];

for (let val of list) {
  if (typeof(val) === "number") {
    hash.push(val);
  } else if (val === false) { break; }
}

console.log(hash)

/* 9.15 В программе объявлена переменная list, в которой записан массив из строковых значений. Напишите программу, которая считает количество элементов в массиве list без учета элементов со значением "default" и выводит результат в консоль. Сравнение должно быть регистронезависимым.
"list" = ["Лёша","default","полке","клопа","нашёл"]
"result" = 4
"list" = ["А","роза","Default","на","лапу","Азора"]
"result" = 5
"list" = ["default","хочу","Default","эту","DeFaUlT"]
"result" = 2
"list" = ["Искать","такси","DEFAULT","DefAult"]
"result" = 2 */

let cnt = 0;
for (let val of list) {
    if (val.toLowerCase() !== "default") {
        cnt++;
    }
}
console.log(cnt)

/* 9.16 В программе объявлена переменная list, в которую записан массив из строковых значений. Сформируйте строку из первых букв каждого элемента массива и выведите ее в консоль. Гарантируется, что каждый элемент массива не нулевой длины.
list = ["почтовый","желание","абсолютный","закрытый"] result = "пжаз"
list = ["сесть","поглядывать","оставаться","позиция"] result = "споп"
list = ["написать","золото","любовный","увеличение"] result = "нзлу"
list = ["развитый","вступать","помещение","жилой","внимание"] result = "рвпжв" */

let str = "";
for (let el of list) {
    str += el[0];
}
console.log(str)

/* 9.17 В программе объявлена переменная obj, содержащая объект с подобным набором значений:

{
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
Напишите скрипт, который формирует новый объект со значениями и их количеством. Выведите новый объект в консоль.
"obj" = {"Яблоко":"фрукт","Арбуз":"ягода","Помидор":"овощ","Огурец":"овощ","Вишня":"ягода"} "result" = {"фрукт":1,"ягода":2,"овощ":2}
"obj" = {"Велосипед":"лето","Лыжи":"зима","Сноуборд":"зима"} "result" = {"лето":1,"зима":2}
"obj" = {"Май":"весна","Июнь":"лето","Январь":"зима","Март":"весна","Июль":"лето"} "result" = {"весна":2,"лето":2,"зима":1} */

hash = {};

for (let k in obj) {
    if (hash[obj[k]]) {
        hash[obj[k]]++;
    } else {
        hash[obj[k]] = 1;
    }
}
console.log(hash)

/* 9.18 В программе объявлена переменная list, в которую записан массив из объектов. В каждом объекте записаны название продукта и его стоимость.
Выведите в консоль название продукта, цена которого является максимальной в заданном массиве. Если таких несколько, выведите название первого из них.
"list" = [{"product":"Велосипед","price":60},{"product":"Лыжи","price":40},{"product":"Скейт","price":32}]
"result" = "Велосипед"
"list" = [{"product":"Груша","price":30},{"product":"Яблоко","price":54},{"product":"Апельсин","price":49}]
"result" = "Яблоко"
"list" = [{"product":"Портфель","price":60},{"product":"Рюкзак","price":44},{"product":"Туфли","price":54}]
"result" = "Портфель" */

let list = [
    { product: "Apple", price: 25 },
    { product: "Cherry", price: 32 },
    { product: "Strawberry", price: 45 }
]

let max = 0;
let word = "";
for (let i = 0; i < list.length; i++) {
    //max = Math.max(max, list[i].price);
    if (list[i].price > max) {
        word = list[i].product;
        max = list[i].price;
    }
}
console.log(word);

// Сортировка пузырьком для массива в 100.000 элементов составляет 15-20 секунд

let arr = [];
function getRandom(n) {
    return Math.floor(Math.random() *n);
}
let length = 10000; // количество случайных чисел в массиве

while (length--) {
    arr.push(getRandom(100)); // числа до 100
}
console.log(arr)

console.time("bubble");
function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}
bubbleSortConcept1(arr);
console.log(arr);
console.timeEnd("bubble")

// Сортировка шейкерная для массива в 100.000 элементов составляет 15-20 секунд

console.time("cocktail")
function swap(arr, i, j) {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}
function cocktailSort(arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        right--;
        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            }
        }
        left++;
    }
    return arr;
}
cocktailSort(arr);
console.log(arr);
console.timeEnd("cocktail")

// Сортировка выбором для массива в 100.000 элементов составляет 15-20 секунд

console.time("choise")
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Находим наименьшее число в правой части массива
        let min = i;
        for (let j = i; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            // Заменяем элементы
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
selectionSort(arr);
console.log(arr);
console.timeEnd("choise")

// Сортировка вставками для массива в 100.000 элементов составляет 5-7 секунд

console.time("insertion")
const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};
insertionSort(arr);
console.log(arr);
console.timeEnd("insertion")

// Сортировка слиянием для массива в 100.000 элементов составляет 0,2-0,3 секунды

console.time("merge")
const mergeSort = arr => {
    // Проверяем корректность переданных данных
    if (!arr || !arr.length) {
        return null;
    }
    //Если массив содержит один элемент просто возвращаем его
    if (arr.length <= 1) {
        return arr;
    }
    // Находим середину массива и делим его на два
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};
mergeSort(arr);
console.log(arr);
console.timeEnd("merge")

// Сортировка расческой для массива в 100.000 элементов составляет 0,07-0,08 секунды

console.time("comb")
const combSort = arr => {
    const l = arr.length;
    const factor = 1.247;
    let gapFactor = l / factor;
    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);
        for (let i = 0, j = gap; j < l; i++, j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        gapFactor = gapFactor / factor;
    }
    return arr;
};
combSort(arr);
console.log(arr);
console.timeEnd("comb")

// Сортировка гномья для массива в 100.000 элементов составляет 0,02-0,04 секунды

console.time("gnome")
const gnomeSort = arr => {
    const l = arr.length;
    let i = 1;
    while (i < l) {
        if (i > 0 && arr[i - 1] > arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        } else {
            i++;
        }
    }
    return arr;
};
gnomeSort(arr);
console.log(arr);
console.timeEnd("gnome")