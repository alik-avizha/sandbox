//восклицательный знак стоит в конце строки. Для начинающего ката вы можете предположить, что входные данные всегда представляют собой непустую строку, ее не нужно проверять.

   // Примеры
//remove("Hi!") === "Hi!"
//remove("Hi!!!") === "Hi!"
//remove("!Hi") === "Hi!"
//remove("!Hi!") === "Hi!"



function remove(s) {
    return s.replace(/!+/g, '') + '!';
}
