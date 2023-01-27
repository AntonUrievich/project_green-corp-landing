/* 2.1 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!
"values" = ["Строка",true,"Число","Объект","Не число",false]
"result" = ["Строка","Булевый тип","Число","Объект","Не число",false]
"values" = [false,false,true]
"result" = ["Булевый тип",false,true]
"values" = ["Строка","Число","Объект","Не число"]
"result" = ["Строка","Число","Объект","Не число"]
"values" = []
"result" = [] */

function printArray(values) {
    for (let index = 0; index < values.length; index++) {
        if (typeof values[index] != "boolean") {
            continue
        }
        else {
            values[index] = "Булевый тип";
            break;
        }
    }
    console.log(values);
}
printArray(values)

/* 2.2 В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.
"partNumbers" = ["ER1234COM","FIV987451RU","GE123JO","P4321NO"]
"result" = ["FIV987451RU","GE123JO","P4321NO"]
"partNumbers" = ["EGH63FD54DF","EF5VGE344","FRGH34GR54FF","REGRGBE"]
"result" = ["EGH63FD54DF","FRGH34GR54FF"]
"partNumbers" = ["REGRG34FH","RGREEGT","354254","54GREG34FG"]
"result" = ["REGRG34FH","54GREG34FG"]
"partNumbers" = []
"result" = []*/

let regexp = /\d\d\D\D$/;

let newpn = [];
values = partNumbers;

function printArray(values) {
    for (let value of values) {
        if (regexp.test(value)) {
            newpn.push(value);
        }
    }
    console.log(newpn);
}

printArray(values)

/* 2.3 В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.
"layout" = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"
"result" = [100,196,23,43,9604,101]
"layout" = "<div>10<span>14<p>25<p>39<p>8<p>101</p></p></p></p></span></div>"
"result" = [100,196,25,39,64,101]
"layout" = ""
"result" = []
"layout" = "<p>Привет друзья!</p>"
"result" = [] */

let numbers = layout.match(/\d+/g) || [];
numbers = numbers.map(el => {
    if (el % 2 === 0) {
        return el ** 2;
    } else {
        return +el;
    }
})
console.log(numbers)

/* 2.4 В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.
"tasks" = [{"title":"Умыться","completed":true},{"title":"Сделать зарядку","completed":true},{"title":"Приготовить завтрак","completed":false}]
"result" = ["Умыться","Сделать зарядку","Приготовить завтрак"]
"tasks" = [{"title":"Сходить на работу"},{"title":"Обсудить детали нового проекта"},{"title":"Реализовать макет"}]
"result" = ["Сходить на работу","Обсудить детали нового проекта","Реализовать макет"]
"tasks" = []
"result" = [] */

let titles = tasks.map(e => e.title);

console.log(titles)

/* 2.5 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.
"values" = ["Строка",true,"Число","Объект","Не число",false,"Не объект"]
"result" = [true,"Число","Объект","Не число",false]
"values" = [true,"Число",false,"Не число",false,"Строка"]
"result" = [true,"Число",false,"Не число",false]
"values" = [true,"Число","Объект","Строка",false]
"result" = [true,"Число","Объект","Строка",false]
"values" = [true,false]
"result" = [true,false] */

let start = values.findIndex(el => typeof el === "boolean");
let end = values.findLastIndex(el => typeof el === "boolean");
let result = values.slice(start, end + 1);
console.log(result);

// version 2

function setStart(arr) {
    if (typeof arr[0] === "boolean") {
        return arr;
    } else {
        arr.shift(); // удалить первый элемент
        return setStart(arr); // повторить действие
    }
}
function setEnd(arr) {
    if (typeof arr[arr.length - 1] === "boolean") {
        return arr;
    } else {
        arr.pop(); // удалить последний элемент
        return setEnd(arr); // повторить действие
    }
}

values = setStart(values);
values = setEnd(values);
console.log(values);

/* 2.6 В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).
"values" = [10,185,11200,980]
"result" = false
"values" = [143,5476,43,2]
"result" = true
"values" = [123,4,342,3]
"result" = false
"values" = [22,443,5432,23]
"result" = true */

function printBool(values) {
    let status = false;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > 999 && 10000 > values[index]) {
            status = true;
        }
    }
    console.log(status);
}
printBool(values)

/* 2.7 Необходимо доработать программу из задания 2.6
В программе задана переменная values, которая хранит в себе массив. Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, которые содержат четырехзначные числа. Если такие значения встречаются, выведите индекс первого в консоль. В противном случае выведите сообщение "Искомый элемент не был найден". 
"values" = [10,185,11200,980]
"result" = "Искомый элемент не был найден"
"values" = [143,5476,43,5476]
"result" = 1
"values" = [123,4,342,3]
"result" = "Искомый элемент не был найден"
"values" = [22,443,5432,23]
"result" = 2 */

let index = values.findIndex(el => (el + "").length === 4);
console.log(index !== -1 ? index : "Искомый элемент не был найден");

// version 2
index = undefined;
for (let i = 0; i <= values.length; i++) {
    let length = (values[i] + "").length; // 456+"" => "456".length => 3
    if (!index && index !== 0 && length === 4) {
        index = i;
    }
}
console.log(index || index === 0 ? index : "Искомый элемент не был найден");

/* 2.8 В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.
"users" = [{"login":"user1","role":"Admin"},{"login":"user2","role":"State user"},{"login":"user3","role":"Moderator"}]
"result" = 1
"users" = [{"login":"manager","role":"username"},{"login":"user","role":"guest"},{"login":"admin","role":"super user"}]
"result" = 2
"users" = [{"login":"manager","role":"user name"},{"login":"user","role":"guest"},{"login":"admin","role":"superuser"}]
"result" = 0
"users" = [{"login":"user","role":"new user"}]
"result" = 0 */

function printIndex(users) {
    const indexval = 0;
    for (let index = 0; index < users.length; index++) {
        let amount = ((((users[index]).role).split(' ')).length);
        if (amount > 1) {
            console.log(users.indexOf(users[index]));
        }
    }
}
printIndex(users)

/* 2.9 В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.
"array" = [[1,2,3],[1,2],[1,2,3,4]]
"result" = [[1,2],[1,2,3],[1,2,3,4]]
"array" = [[4,3,2],[1],[]]
"result" = [[],[1],[4,3,2]]
"array" = [[1],[1],[1]]
"result" = [[1],[1],[1]]
"array" = [[1]]
"result" = [[1]] */

function printArray(array) {
    const sortByTitle = (a, b) => {
        if (a == b) return 0;
        if (a < b) return -1;
        if (a > b) return 1;
    }
    array.sort(sortByTitle);
    console.log(array);
}
printArray(array)

/* 2.10 В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:
В начале массива должны быть все числовые значения по возрастанию
В конце все строковые, упорядоченные по алфавиту
Результат выведите в консоль.
"randValues" = ["Банан",3,"Апельсин",2,"Вишня"]
"result" = [2,3,"Апельсин","Банан","Вишня"]
"randValues" = ["велосипед","самокат","ролики"]
"result" = ["велосипед","ролики","самокат"]
"randValues" = [34,4,23,-100,432]
"result" = [-100,4,23,34,432]
"randValues" = []
"result" = [] */

randValues.sort();
randValues.sort((a, b) => a - b);
console.log(randValues);

/* 2.11 В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.
"words" = ["Заказ","Такси","Доход"]
"result" = [2,1]
"words" = ["Казак","Комок","шалаш"]
"result" = [3,0]
"words" = ["Шашлык","сок","сон"]
"result" = [0,3]
"words" = []
"result" = [0,0] */

let result = [0, 0];
words.forEach(el => {
    el.toLowerCase() === el.split("").reverse().join("").toLowerCase() ? result[0]++ : result[1]++;
})
console.log(result);

/* 2.12 В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.
"dates" = "23.04.1996 07.10.2002 15.08.1945"
"result" = ["23/04/1996","07/10/2002","15/08/1945"]
"dates" = "14.02.1992"
"result" = ["14/02/1992"]
"dates" = ""
"result" = [""]
"dates" = "01.01.0001"
"result" = ["01/01/0001"] */

dates = dates.split(" ").map(el => el.replace(/\./g, "/"));
console.log(dates);

/* 2.13 В программе задана переменная tickets, которая хранит в себе строковое значение. В этой переменной указаны номера билетов на поезд (после слова Train) и на самолет (после слова Airplane). Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. Он должен хранить в себе два ключа (train, airplane), а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.
"tickets" = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
"result" = {"train":["AV432","FS452","OE402"],"airplane":["DR578","JN1089","NDK140"]}
"tickets" = "Train: . Airplane: ."
"result" = {"train":[""],"airplane":[""]} */

let obj = {};
let arr = tickets.split(".")
arr = arr.filter(el => {
    if (el) {
        return el;
    }
});
console.log("filter", arr);
arr = arr.map(el => {
    return el.split(": ");
});
console.log("map", arr);
arr.forEach(el => {
    el[0] = el[0].trim();
    obj[el[0].toLowerCase()] = el[1].split(", ");
});
console.log(obj);

/* 2.14 В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
"numbers" = [10,20,33,55,100]
"result" = 2
"numbers" = [12,4,3,2,4]
"result" = 5
"numbers" = [100,125,210,225]
"result" = 0
"numbers" = [23,4,2,4,3,11,3,12,3,23]
"result" = 7 */

let cnt = numbers.reduce((acc, el) => {
    if (acc.sum + el <= 50) {
        acc.cnt++;
        acc.sum += el;
    }
    return acc;
}, { cnt: 0, sum: 0 })
console.log(cnt.cnt);

/* 2.15 В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.
"values" = ["100","30","Не число","20","Тоже не число"]
"result" = 150
"values" = ["32","Привет","-12"]
"result" = 20
"values" = []
"result" = 0
"values" = ["велосипед","скатерть","стул"]
"result" = 0 */

let result = values.reduce((acc, el) => {
    let n = +el;
    if (!isNaN(n)) {
        acc += n;
    }
    return acc;
}, 0)
console.log(result);

/* 2.16 В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.
array_1 = [2,4,7,8,1] array_2 = [2,5,11,6,1]
result = [2,1]
array_1 = [1,2,3,4] array_2 = [7,8,9]
result = []
array_1 = [] array_2 = []
result = []
array_1 = [1,2,3,4,5] array_2 = []
result = [] */

function intersection(array_1, array_2) {
    let result = array_1.filter(el => {
        return array_2.includes(el);
    })
    result.sort((a, b) => b - a);
    return result;
}
console.log(intersection(array_1, array_2));

/* 3.1 В программе объявлена переменная car, которая хранит в себе объект, у которого есть как минимум одно свойство — engine. Удалите из объекта car свойство engine и результат выведите в консоль.
"car" = {"model":"Audi","color":"white","weight":1850,"engine":"170 hp"}
"result" = {"model":"Audi","color":"white","weight":1850}
"car" = {"engine":"170 hp"}
"result" = {}
"car" = {"model":"Audi","engine":"170 hp"}
"result" = {"model":"Audi"}
"car" = {"engine":"170 hp","model":"BMW"}
"result" = {"model":"BMW"} */

delete car.engine;
console.log(car);

/* 3.2 В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.
"goods" = {"title":"Самокат","price":6000,"good_id":1}
"result" = ["title","price","good_id","Самокат",6000,1]
"goods" = {"id":1,"title":"Покушать","status":"complete"}
"result" = ["id","title","status",1,"Покушать","complete"]
"goods" = {}
"result" = []
"goods" = {"done":true}
"result" = ["done",true] */

let keys = Object.keys(goods);
values = Object.values(goods);
console.log([...keys, ...values]);

/* 3.3 В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.
"article" = {"title":"Загадки дачного огурца","text":"Огурец не перестает удивлять своими выходками."}
"author" = {"name":"Ричард М.В.","age":43}
"result" = {"title":"Загадки дачного огурца","text":"Огурец не перестает удивлять своими выходками.","name":"Ричард М.В.","age":43}
"article" = {}
"author" = {"name":"Ричард М.В.","age":43}
"result" = {"name":"Ричард М.В.","age":43}
"article" = {"title":"Загадки дачного огурца","text":"Огурец не перестает удивлять своими выходками."}
"author" = {}
"result" = {"title":"Загадки дачного огурца","text":"Огурец не перестает удивлять своими выходками."}
"article" = {}
"author" = {}
"result" = {} */

console.log({ ...article, ...author });

/* 3.4 В программе задан массив array. Напишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.
"array" = [true,4,"word","10n"]
"result" = "Количество элементов в массиве: 4"
"array" = [100]
"result" = "Количество элементов в массиве: 1"
"array" = [true,false]
"result" = "Количество элементов в массиве: 2"
"array" = []
"result" = "Количество элементов в массиве: 0" */

function count() {
    console.log(`Количество элементов в массиве: ${array.length}`);
}

/* 3.5 В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.
"employee" = [["firstName","Ivan"],["lastName","Ivanov"],["hireDate","21.10.2015"]]
"result" = [["firstName","Ivan"],["lastName","Ivanov"],["jobName","IT PROG"]]
"employee" = [["firstName","Ivan"],["lastName","Ivanov"]]
"result" = [["firstName","Ivan"],["lastName","Ivanov"],["jobName","IT PROG"]]
"employee" = [["firstName","Ivan"],["hireDate","21.10.2015"],["hireDate","21.10.2015"]]
"result" = [["firstName","Ivan"],["jobName","IT PROG"]]
"employee" = []
"result" = [["jobName","IT PROG"]] */

let str = "hireDate";

employee.sort((a, b) => {
    // console.log(a,b);
    if (b[0] !== str) {
        return 1
    } else if (a[0] !== str) {
        return -1;
    }
})
if (typeof employee[0] === "object") {
    while (employee[employee.length - 1][0] === str) {
        employee.pop();
    }
}
employee.push(["jobName", "IT PROG"])
console.log(employee);

/* 3.6 В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.
"array" = [["boolean",true],["number",4],["string","word"],["object",{}]]
"result" = "Количество строковых элементов в именованном массиве: 1"
"array" = [["boolean",true],["number",4],["object",{}]]
"result" = "Количество строковых элементов в именованном массиве: 0"
"array" = []
"result" = "Количество строковых элементов в именованном массиве: 0"
"array" = [["string","word"],["string","word"],["string","word"]]
"result" = "Количество строковых элементов в именованном массиве: 3" */

const countString = function (a) {
    let cnt = 0;
    for (let val of a) {
        if (typeof val[1] === "string") {
            cnt++;
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${cnt}`)
}
countString(array);

/* 4.1 В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.
"pet_1" = {"name":"Шарик","age":10}
"pet_2" = {"name":"Жучка","age":5}
"result" = "Шарик 10; Жучка 5"
"pet_1" = {"name":"Мурка","age":1}
"pet_2" = {"name":"Одиссей","age":7}
"result" = "Мурка 1; Одиссей 7"
"pet_1" = {"name":"Оскар","age":15}
"pet_2" = {"name":"Мопс","age":46}
"result" = "Оскар 15; Мопс 46" */

function getName() {
    return `${this.name} ${this.age}`
}
pet_1.getName = getName;
pet_2.getName = getName;

/* 4.2 В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().
"input" = {"id":1,"value":"Добрый вечер","firstName":"Григорий","lastName":"Стрельников"}
"sayHi" = function(){ console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)}
"result" = "Добрый вечер, Григорий Стрельников!"
"input" = {"a":12,"b":43}
"sayHi" = function(){console.log(this.a*this.b)}
"result" = 516 */

sayHi.call(input);

/* 4.3 В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.
"pet" = {"name":"Диксон","breed":"Немецкая овчарка"}
"getDescription" = function () {console.log("Имя питомца: " + this.name + ", Порода: " + this.breed)}
"result" = "Имя питомца: Диксон, Порода: Немецкая овчарка"
"pet" = {"name":"Локи","breed":"Лайка"}
"getDescription" = function () {console.log("Имя питомца: " + this.name + ", Порода: " + this.breed)}
"result" = "Имя питомца: Локи, Порода: Лайка" */

getDescription = getDescription.bind(pet);

/* 4.4 В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.
props = {name:'Анатолий',age:29,sayHi:()=>'привет'}
result = 'Значения свойств объекта props (name: Анатолий, age: 29)'
props = {firstName:'Петя',lastName:'Иванов'}
result = 'Значения свойств объекта props (firstName: Петя, lastName: Иванов)'
props = {a:()=>12,b:()=>15}
result = 'Значения свойств объекта props ()'
props = {}
result = 'Значения свойств объекта props ()' */

function getValue() {
    let str = "";
    // console.log(Object.keys(this))
    // console.log(Object.values(this))
    for (let k in this) {
        if (typeof this[k] !== "function") {
            str += `${k}: ${this[k]}, `;
        }
    }
    str = str.slice(0, str.length - 2);
    console.log(`Значения свойств объекта props (${str})`);
}

getValue = getValue.call(props);

/* 4.5 В программе объявлен объект hero, свойства которого описывают информацию о герое. В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.
props = {nick:'FirstHero',position:'Лагерь',getPosition:()=>console.log(\Позиция героя: \ + this.position)}
result = 'Позиция героя: Лагерь' */

hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition: ()=>console.log("Позиция героя: " + hero.position)
}

/* 5.1 В программе объявлена переменная order, которая хранит объект. Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.
"order" = {"productName":"Велосипед","costomerName":"Саша","salesName":"Петя","totalPrice":15000}
"result" = {"value":15000,"writable":true,"enumerable":true,"configurable":true}
"order" = {"totalPrice":0}
"result" = {"value":0,"writable":true,"enumerable":true,"configurable":true}
"order" = {"productName":"Велосипед"}
"result" = undefined */

let descriptor = Object.getOwnPropertyDescriptor(order, "totalPrice");
console.log(descriptor);

/* 5.2 В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.
employees = {firstName:'Петя',lastName:'Иванов',ratePerDay:2500,workingDays:5,getSalary:getSalary() { console.log(employees.ratePerDay * employees.workingDays )}}
result = 'firstName, lastName, ratePerDay, workingDays'
employees = {firstName:'Петя',lastName:'Иванов'}
result = 'firstName, lastName'
employees = {a:()=>12,b:()=>15}
result = ''
employees = {}
result = '' */

let str = "";
for (let k in employees) {
    if (typeof employees[k] !== "function") {
        str += `${k}, `;
    }
}
str = str.slice(0, str.length - 2);
console.log(str);

/* 5.3 В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.
"firstName" = "Всеволод"
"lastName" = "Старозубов"
"result" = "Всеволод Старозубов"
"firstName" = "Игорь"
"lastName" = "Катамаранов"
"result" = "Игорь Катамаранов"
"firstName" = "Ричард"
"lastName" = "Сапогов"
"result" = "Ричард Сапогов"
"firstName" = "Захар"
"lastName" = "Стрельников"
"result" = "Захар Стрельников" */

class Person {
    constructor(a,b) {
        this.firstName = a;
        this.lastName = b;
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName (str) {
        let data = str.split(" ");
        this.firstName = data[0];
        this.lastName = data[1];
    }
}
let user = new Person(firstName, lastName);
console.log(user);
console.log(user.fullName);

/* 5.4 В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.
name = 'Pizza'
phone = '81234567890'
result = false
name = 'Sushi'
phone = '+37443234654'
result = true
name = 'burgers'
phone = ''
result = false */

class Delivery {
    constructor(n, p) {
        this.name = n;
        this.phone = p;
        this.validPhone = /^\+/.test(p)
    }
}
let deliveryName = new Delivery(name, phone);

/* 5.5 В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.
name = Анатолий
result = Анатолий false true false false
name = Светлана
result = Светлана false true false false
name = Константин
result = Константин false true false false
name = Владимир
result = Владимир false true false false */

class Permissions {
    constructor() {
        this.create = false
        this.read = true
        this.update = false
        this.remove = false
    }
}
class User extends Permissions {
    constructor(n) {
        super();
        this.name = n;
    }
}

/* 5.6 В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.
array = [2,4,7,8,1]
num = 2
result = 3
array = [-12,-32,-43,-3,-1]
num = 3
result = -87
array = [2,4,7,8,1]
num = 0
result = 0
array = [2,3,10,11]
num = 2
result = 5 */

function queue() {
    let n = arguments[0];
    let arr = [...arguments];
    arr.shift();
    arr.sort((a,b) => a - b);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(queue(num, ...array));