//number of hotdogs	price per unit (cents)
//n < 5	100
//n >= 5 and n < 10	95
//n >= 10	90
//You can use if..else or ternary operator to complete it.

    function saleHotdogs(n){
    if (n < 5) {
        return n *=100
    } else if  (n < 10) {
        return n *=95
    } else if (n >= 10)
        return n *=90
}