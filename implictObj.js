var number1 = 123;
var number2 = new Number(123);

var out="";

out += 'number1의 type: '+typeof(number1)+'\t 값' +number1 +'\n\n';
alert(out);
out += 'number2의 type: '+typeof(number2)+'\t 값' +number2 +'\n\n';
//typeof() -> 객체 타입 출력
// 자료형만 다를 뿐 같은 값을 출력 ->123
alert(out);

number1.print = function(){
  alert('number1');
}
number2.print = function(){
  alert('number2');
}
number2.print();
number1.print();// number1.print is not a function 오류
                //기본 객체(속성+메서드)는 메서드 사용이 가능, 기본 자료형은 일시적으로 객체로 인식하지만,메서드를 추가하지 못함 Object.prototype.메서드를 정의한다음 사용은 가능
