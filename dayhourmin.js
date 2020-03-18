function showTime(){
var today =new Date();
var year = today.getFullYear();
var month = today.getMonth();
var monthlist = ["January","February", "March","April","May","June","July","August","September","October","November","December"];
var currentMonth=monthlist[month];
var date = today.getDate();
function date1(){
   
   document.getElementById("date").innerHTML=(date + " "+currentMonth +" " +year);
}
date1();


//var day = today.getDay();
//var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//function date(){
//document.getElementById("date").innerHTML=( daylist[day]);}
//date();

var am_pm ="";
var hour = today.getHours();
if(hour > 12){
    am_pm = "PM";

}else {
    am_pm = "AM";
}


if(hour ==0)
{
    hour = 12;
}
if(hour > 12){
hour = hour - 12;
}

var minutes = today.getMinutes();
if(minutes < 10 ){
    minutes = "0" + minutes;
}
var seconds = today.getSeconds();
if(seconds < 10){
    seconds = "0" + seconds;
}
function time(){


document.getElementById("time").innerHTML=(hour + ":" + minutes + ":" + seconds + " "+ am_pm);}
time();
};

showTime();
setInterval(showTime,1000);
