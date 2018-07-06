function zaman(){
var time= new Date();
 var s= "seconds";
document.querySelector("#sec center").innerHTML= time.getSeconds();
var s= document.createElement("span");
document.querySelector("#min center").innerHTML= time.getMinutes();
document.querySelector("#hours center").innerHTML= time.getHours();
document.querySelector("#day center").innerHTML= time.getDate();
}
setInterval(zaman,1);

function sec(){
var vaxt= new Date();
var saniye= vaxt.getSeconds()
var wit= saniye*1.66;
var bar= document.querySelector("#barsec");
    bar.style.width= wit + "%"
}
setInterval(sec, 1)

function min(){
    var vaxt= new Date();
    var deqiqe= vaxt.getMinutes()
    var wit= deqiqe*1.66;
    var bar= document.querySelector("#barmin");
        bar.style.width= wit + "%"
    }
    setInterval(min, 1)

function hour(){
    var vaxt= new Date();
    var saat= vaxt.getHours()
    var wit= saat*4.16;
    var bar= document.querySelector("#barhour");
    bar.style.width= wit + "%"
}
setInterval(hour, 1)

function day(){
     var vaxt= new Date();
     var gun= vaxt.getDate()
     var wit= gun*3.33;
     var bar= document.querySelector("#barday");
     bar.style.width= wit + "%"}
setInterval(day, 1)
