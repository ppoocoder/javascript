var number1 = new Number(1234.567891);

alert(number1.toExponential());
//지수표기법으로 변환
alert(number1.toFixed(4));
// 소수점 아래 4자리 까지 반올림하여 출력(뒤에서)
alert(number1.toPrecision(5));
// 5자리의 숫자만을 반올림하여 출력 (앞에서)
alert(1235.5674.toFixed(3));
//변수안에 숫자를 넣지 않아도 메서드를 호출하여 사용가능.


var numberPr = new Number(123);
alert(Number.MAX_VALUE);
alert(numberPr.MAX_VALUE);//실행되지 않음


Number.prototype.test= function(){
  return this.valueOf()*2
}
alert(numberPr.test());
