var studetn = {
  name:'홍길동',
  korea:99
};

var out="";
Object.defineProperty(student,'math', {
// 배열 의 Objectd 의 the value of attribute 변경  Object.defineProperty([var name], [attribute's name],{[value]:~ ,[writeable]:~ , [enumeralbe]:~ })
  value:97, // the value of attr = 97
  writeable:false, // it can't be changed to the diff
  enumeralbe:true  // use 'for in'
});

student.math = 93;
// but defineProperty의 function 에서 writeable = false 이므로 변경되지 앟고 math= '홍길동이 됨'

for(var i in student){
  out+= i + ':'+student[i]+'\n'
}

Object.defineProperties(student, {
  history:{value:'100', writeable:true, enumerable:'true'},
  name1:{set:function(newname){// set 옵션에서 setter와 입력받은 값 출력후, name 속성의 값을 입력 받은 값으로 변경
    alert('setter ' + newname);
    name= newname; // 추가할 속성의 이름과 옵션을 호출한다.
  },
  get:function(){//[ get:fuction ] getter 와 현재의 name 속성 값을 출력 후, 현재의 name속성 리턴
    alert('getter');
    return name;
  } // set 과 get 옵션 사용시  value와 writealbe을 함께 사용하지 않음
}
});

student.name1='김길동'; // 왜 set function에서 = 값을 넣었는데 인자로 인식하는지 이해가 되지 않음!!!!!!!  값이 있으면, set이 실행되고
student.name1;// 값이 없으면 get이 실행됨
