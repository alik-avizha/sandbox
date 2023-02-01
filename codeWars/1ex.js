//countBy(1, 5);  // [1, 2, 3, 4, 5]
//countBy(2, 5);  // [2, 4, 6, 8, 10]

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}