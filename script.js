var h = prompt("Height");
var w = prompt("Width");
if(h>0 && w>0) {
    var perimeter = h*2+w*2;{
        console.log(perimeter)
    }
} else if(h<=0 && w<0) {
    console.log("error")
}