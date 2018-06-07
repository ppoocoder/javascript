//object 객체: 최상위 객체, 프로토타입에 속성이나 메서드 추가시 모든 객체에서 활용가능
var number1 = 123;
var number2 = new Number(123);

var out="";
out ='number1 : '+ number1+'\n'+'number2 : '+number2;
alert(out);

if(typeof(number1) == typeof(number2)){
  alert('typeof(number)==typeof(number2)');
}
if(number1.constructor ==number2.constructor){
  //모두 Number 생성자함수에 의해 생성됨
  alert('number1.constructor ==number2.constructor');
}

Object.prototype.print=function(){
alert('모든객체에 추가 ');
}


out.print();
//out은 일시적으로 String객체로 변환되어 print매서드 호출
number2.print();
