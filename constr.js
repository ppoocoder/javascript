function A(){}
  A.prototype.printA = function (){
      alert('A');
  }

function B(){}

B.prototype = new A ();
B.prototype.printB = function(){
  alert('B');
}

function C(){}
C.prototype = new B();
C.prototype.printC = function(){
  alert('C');
}


var o = new C();
o.printA();
o.printB();
o.printC();
// C.printA는 실행이 안됨
C.prototype.printC();
C.prototype.printA();
// 표기법({})을 이용해 생성한 객체는 Object.rprototype 객체 연결되고, Object.prototype 객체는 프로토타입 체이닝의 종점임
// 객체는 프로토타입 링크로 연결된 프로토타입 객체의 속성에 접근할 수 있음



function Make(name){
  this.name = name;
}// make 생성자함수 객체 정의 with 변수 추가
Make.prototype.print = function(w){
  name = w
  alert('생성자 함수 Make()의 프로토타입에 새로운 메서드 추가'+ this.name +name ) ;
} //prototype으로 생성자 함수내 print 함수 추가

function Person(name) {
  this.name = name;
}// 또다른 person 생성자함수2 객체 정의

Person.prototype = Make.prototype;
// make 생성자 객체 변수와 함수를 person의 프로토타입을 연결( * 상속화 됨)

Person.prototype.hello = function(){
  return 'hello world';
}

var person = new Person('홍길동');
// 변수에 person 객체를 name변수를 넣어 인스턴스 화 .
//  생성자 함수를 통해 생성된 객체는 생성자 함수의 프로토타입 객체와 링크로 연결되어 있음

alert(person.name)
person.print();

alert(person.hello());
// hello-> 함수 전체가 ex) functiojn() { return 'hello world'} // hello() -> 'hello world'
