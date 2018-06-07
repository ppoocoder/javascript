

function showTime(){
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

var si ='';

if(hour < 12) {
  si = '오전';
}else{
  si= '오후';
  hour = hour - 12;
}
if(hour ==0){
  hour =12;
  si ='오전'
}
if(minute<10){
  minute = '0' +minute;
}
if (second<10){
  second ='0' +second;
}
return si+ ' '+hour+' : '+minute+' : '+second;

}

// var interval_ID = setInterval(function(){
//   alert(showTime())
// }, 1000);
//
// setTimeout(function (){
//   clearinterval(interval_ID);
// }, 6000);

var now = new Date();
now.setFullYear(2003);
now.setMonth(2);
now.setDate(23);
now.setHours(13);
now.setMinutes(39);
now.setSeconds(21);

alert(now);
