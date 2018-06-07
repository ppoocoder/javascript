

// method 추가, 객체 속성 할당
alert("가");
var car = {
  name: "car1",
  model: 400,
  color:"black",
  run : function(){
    alert(this.name + '  is running');
  }
}

var student = {
      name:'홍길동'
}


student.run = car.run; // 복사가 되는것이 아나리 student.run객체는   car.run에서 객체속성을 참조하여 받아옴

car.run();
student.run();



// Array , object 속성
var student0 = { name:'홍길동', korean:97 ,english:58 ,math:98 , history:58 };
var student1 = { name:'김길동', korean:56 ,english:65 ,math:68 , history:78 };
var student2 = { name:'이길동', korean:52 ,english:54 ,math:48 , history:73 };
var student3 = { name:'고길동', korean:63 ,english:96 ,math:65 , history:96 };
var student4 = { name:'박길동', korean:63 ,english:52 ,math:39 , history:35 };

var students =[];
students.push(student0);
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);

for (var i in students) {

    students[i].getSum = function () {

      return this.korean + this.english +this.math +this.history;

    }

    students[i].getAverage = function(){
      return this.getSum()/4;
    }

}

var out = '';

for (var j in students){
  with (students[i]){
     out+=name+'\t총점:'+getSum()+'\t평균'+getAverage()+'\n';
  }
}
alert(out);
