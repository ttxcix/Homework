function negt(){
    for( i=15; i<=125; i++){
        if(i%3===0)
        console.log(i)
    }
}
negt()

function second(){
    var x=parseInt(prompt("Too oruul 1"))
    var y=parseInt(prompt("Too oruul 2"))
    for(i=x; i>=y; i--)
        if(x>y)
        console.log(i)
    for(i=y; i>=x; i--)
        if(y>x)
        console.log(i)
    else{
        if(x=y)
        console.log("X, Y tentsuu bain")
        }
}
second()

function third(){
    var x=parseInt(prompt("Too oruul 1"))
    var y=parseInt(prompt("Too oruul 2"))

    for(i=x; i<=y; i++)
        if(x<y)
        console.log(i)
    for(i=y; i<=x; i++)
        if(y<x)
        console.log(i)
    else{
        if(x=y)
        console.log("X, Y tentsuu bain")
    }
    var hariult = x+y
    console.log(hariult)
}
third()