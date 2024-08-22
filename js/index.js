var colorArray = ["#fff","#888","#807f7f","#515050"];
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}