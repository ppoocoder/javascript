var person = {
  age:20,
  print:function(){
    alert('생성자 함수 없이 속성 구현');
  }, getName:function(){
    return this.name;
  }
};

var person1 = Object.create(person);
// 객체에서 다른 객체 상속 :: ex) Object.create(객체명);
alert(person1.age); // 20
person1.print;// alert '생성자함수 없이 속성 구현'


person1.name ='홍길동';
// 변수 객체 안에  name이라는 속성이 없기 때문에  name = '홍길동'이 추가됨
alert(person1.getName());
//따라서, this.name이 '홍길동'

person1.hello = function(){
  alert('hello world');

}
// 변수 객체에 hello 함수 속성 추가


person1.hello();
