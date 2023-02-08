//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

    //Some cases:
    //[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

function multipleOfIndex(array) {
    var massiv = [];
    for (var i=0; i < array.length; i++) {
        if (array[i] % i == 0) {
            massiv.push(array[i])
        }

    }

    return massiv

}