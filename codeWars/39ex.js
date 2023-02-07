
//remove("Hi!",1) === "Hi"
//remove("Hi!",100) === "Hi"
//remove("Hi!!!",1) === "Hi!!"
//remove("Hi!!!",100) === "Hi"
//remove("!Hi",1) === "Hi"

function remove(s,n){
    let input = s;
    while (n > 0) {
        input = input.replace(/!/, "");
        n--;
    }
    return input;
}