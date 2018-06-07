var student = {
  name:'홍길동'
  age:20
};


var out='';
out += "student.hasOwnProperty('age') : "+ student.hasOwnProperty('age')+'\n\n';
out += "student.hasOwnProperty('constructor') : " +student.hasOwnProperty('constructor') + '\n\n';

alert(out);

out = "student.propertyIsEnumerable('name') : " + student.propertyIsEnumerable('name')+'\n\n';
//propertyIsEnumerable :: name 속성을 반복문으로 열거할 수 있는지 확인 메소드 , propertyIsEnumerable 메소드를 호출하여 true 값을 가지는 석성만이 for in 반복문으로 출력
alert(out);

student.toString = function() {
  return '재선언';
}

alert(studnet);
