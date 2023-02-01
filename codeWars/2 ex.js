//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]

function digitize(n) {
    //code here
    var z=String(n);
    return z.split('').map(Number).reverse()
}

//String - делает значение n строковым элементом
//split - разделяет нашу строку на элементы
//JavaScript метод map() позволяет вызвать переданную функцию один раз для
//каждого элемента массива, формируя новый массив из результатов вызова этой
//функции - тоесть делая его опять номером
//reverse() - Метод reverse() на месте обращает порядок
//следования элементов массива.