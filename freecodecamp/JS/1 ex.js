//Мы определили функцию с именем rangeOfNumbersс двумя параметрами. Функция должна возвращать массив целых чисел,
//который начинается с числа, представленного startNumпараметром, и заканчивается числом, представленным endNumпараметром.
//Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна использовать рекурсию, вызывая саму себя,
//и не использовать циклы любого рода. Это также должно работать для случаев, когда оба startNumи endNumодинаковы.

//rangeOfNumbers(1, 5)должен вернуться [1, 2, 3, 4, 5].

    function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum]
    } else {
        const array = rangeOfNumbers(startNum, endNum - 1)
        array.push(endNum);
        return array;
    }
}
