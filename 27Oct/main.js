function randomColorGenerator(){
    var elligbleLetters="ABCDEF0123456789";
    var str="#";
    for(var counter=0; counter<6; counter++){
        var random=Math.floor(Math.random()*6);
        str+=elligbleLetters.charAt(random);
    }
}
var snow=document.createElement('div');
snow.classList.add("snow");
document.body.appendChild(snow);
snow.style.backgroundColor="#ff0000";