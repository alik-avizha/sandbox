//Для заданной строки напишите функцию, которая возвращает строку со знаком вопроса ("?"), добавленным в конец, если только исходная строка не заканчивается знаком вопроса, и в этом случае возвращает исходную строку.
//Например ( Ввод --> Вывод )
//"Yes" --> "Yes?"
//"No?" --> "No?"

function ensureQuestion(s) {
    if (s.includes('?')) {
        return s
    } else {
        return s+'?'
    }

}