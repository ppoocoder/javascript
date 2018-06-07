var car= {
  name: 'car1',
  model: 400,
  color:'black'
};

alert(car.hasOwnProperty('model'));


function Make(name){
  this.name = name;
  Make.prototype.print = function(){
    alert('생성자 함수 Make()의 프로토탑입에 새로운 매서드 추가');
  }
}

var person = new Make('홍길동');
alert(person.name);
alert(person.hasOwnProperty('model'));
person.print();
