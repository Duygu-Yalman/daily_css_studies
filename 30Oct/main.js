var date = new Date();
var hours,minutes,seconds,milliseconds;
setInterval(function(){
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    milliseconds = date.milliseconds();
    console.log(hours+":"+minutes+":"+seconds+":"+milliseconds);
},10);


