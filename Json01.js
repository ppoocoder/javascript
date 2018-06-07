var car = {
  name:'car1',
  model:400,
  color:'black'
};

var student = {
  name:'홍길동',
  korean:99,
  toJSON:function(){
    return {history:98};
  }
}


alert(JSON.stringify(car));

alert(JSON.stringify(student));
//student 객체에 toJSON 메서드에서 리ㅓㅌㄴ한 속성과 속성갑6ㅅ만 문자열로 변환됨

var car1 = JSON.parse('{"name":"car","model":400,"color":"black"}');
// JSON 객체의 JSON 문자열을 매개변수로 parse 메서드 호출  -> 객체로 변경되어 car1에 저장됨


alert(car.name+':'+car1.model+':'+car1.color);
