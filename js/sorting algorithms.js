/* Создать функцию. которая будет генерировать массив с случайными числами от 1 до 100 */

let arr = [];
function getRandom(n) {
    return Math.floor(Math.random() *n);
}
let length = 10; // количество случайных чисел в массиве

while (length--) {
    arr.push(getRandom(100)); // числа до 100
}

console.log(arr)

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