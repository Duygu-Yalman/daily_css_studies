var can1 = document.getElementById("can1");
can1.style.color = "white";
can1.style.height = "200px";
can1.style.width = "300px";
can1.style.position = "fixed";
can1.style.top = "1px";
can1.style.left = "1px";
can1.style.backgroundImage = "url(https://images.unsplash.com/photo-1605760677558-e8efc327a974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxLcFNka3dSZWdoZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)";

var isReverseTop = false;
var isReverseLeft = false;
function animate(element,top,left){
    var topOfElement = parseInt(element.style.top.split("px")[0]);
    //console.log(leftOfElement);
    if(topOfElement >= (window.innerHeight-parseInt(element.style.height.split("px")))){
        isReverseTop = true;
    }else if(topOfElement <= 0){
        isReverseTop = false;
    }
    element.style.top = (top + topOfElement).toString()+"px";
    var leftOfElement = parseInt(element.style.left.split("px")[0]);
    //console.log(leftOfElement);
    if(leftOfElement >= (window.innerWidth-parseInt(element.style.width.split("px")))){
        isReverseLeft = true;
    }else if(leftOfElement <= 0){
        isReverseLeft = false;
    }
    element.style.left = (left + leftOfElement).toString()+"px";
}
var timer = setInterval(function(){
    if(isReverseTop == true && isReverseLeft == true){
        animate(can1,-1,-2);
    }else if(isReverseTop == false && isReverseLeft == true){
        animate(can1,1,-2);
    }else if(isReverseTop == true && isReverseLeft == false){
        animate(can1,-1,2);
    }else if(isReverseTop == false && isReverseLeft == false){
        animate(can1,1,2);
    }
},10);
//clearInterval(timer);