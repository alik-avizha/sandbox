//Просто удалите пробелы из строки, затем верните результирующую строку.

    function noSpace(x){
    var abc = ''
    for (var i = 0; i < x.length; i++) {
        if(x[i] !== " "){
            abc += x[i]
        }
    }
    return abc
}
