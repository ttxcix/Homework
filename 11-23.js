function Aray(){
var numbers = [false, 1, "two", 3, "four", "five", 6, 7, "eight", "nine", 10, 11, 12, "thirteen", "fourteen", 15, "sixteen", 17, 18, "nineteen", true]

    for(var i=0; i < numbers.length; i++){
        if(i%2===1)
        console.log(i + ": " + numbers[i])
    }
}

Aray()

function Palindrome(){
    var num = prompt("Too oruul")
    var rev = 0
    var copy = num
    
    while(copy > 0){
        rev = rev * 10;
        rev = rev + (copy % 10);
        copy = Math.floor(copy / 10);
    }
    if(num == rev)
        console.log(num + " Palindrome too");
    else
        console.log(num + " Palindrome too bish");
}
Palindrome()