/**
* 1. Как вы думаете, что хотел сделать программист? Исправьте код и объясните свое решение
*/
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
/** 
 * Ну тут программист хотел вывести номер счетчика 5 раз c задержкой равной (i * 1000)
 * Итог он всегда будет получать 5
 * Если нужно получить правильную последовательность, то код нужно переписать так
 */

 for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}


/**
* 2. Написать функцию, которая будет работать правильно при обоих вызовах, 
* как показано на приведенном коде
*/
console.log(sum(2, 3)); // результат 5
const sum = (a, b) => a + b // Решение когда только передано два параметра в одних скобках
console.log(sum(2)(3)(4)); // сумма всех элементов
// Решение когда функция будет с ()()() - n-ым числом скобок
var res = 0;
function summ(num) {
  res += num;
  return summ;
}



/**
* 3. Какая проблема может быть с этим кодом, если список очень длинный? 
* Предложите и объясните свое решение
*/
let list = readHugeList();
let nextListItem = function () {
let item = list.pop();
if (item) {
     // ... обработка записи
    nextListItem();
}
};

/**
* Данный код возьмет и обойдет всю коллекцию до последнего элемента это очень долго
  и нагруженно если задача состояла в том чтобы достать последний елемент из списка то нужно 
  было написать так  
*/

let list = readHugeList();
let lastElement = list[list.length - 1]



/**
* 4. Чему будет равна переменная "a" после выполнения этого участка кода? 
* Объясните почему.
*/
let a = 1;
function foo() {
    a = 2; // В данном случае переменная a описана и привязана к контекстку функции
    return 10;
}
// Но так как у нас есть let a = 1 в глобальном скоупе то мы к 1 будем каждый раз добавлять 10
a += foo();
a += foo();




/**
* 5. Сделайте рефакторинг кода для работы с API чужого сервиса
*/
function printOrderTotal(responseString) {
    // И при работе с данными от бека хорошшей практикой является применение блоков try/catch
    // Fetching data...
    try {
        const responseJSON = JSON.parse(responseString);
        // Json от сервера всегда объект у которого все данные от бека хранятся в ключе data
        // Не хавтатет проверок на успешное получение данных
        if (responseJSON.code === 200) {
            responseJSON.data.forEach(function (item, index) {
                item.price = (item.price) ? item.price : 0
                orderSubtotal += item.price;
            });
            console.log(`Стоимость заказа: ${(total > 0) ? 'Бесплатно' : `${total}руб`}`)
        }

    } catch(e) {
        console.error(e);
    }
}



