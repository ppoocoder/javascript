alert('가rk');

function Make(name, korean, english, math, history){
  this.name = name;
  this.korean = korean;
  this.english = english;
  this.math = math;
  this.history = history;

  this.getSum = function(){
    return this.korean+this.english+this.math+this.history;
  };
  this.getAverage = function(){
    return this.getSum()/4;
  };

}
alert('가rkddd');

var students =[];
students.push(new Make('홍길동',97,93,98,96));
students.push(new Make('김길동',87,88,80,88));
students.push(new Make('이길동',80,90,83,93));
students.push(new Make('고길동',95,87,90,92));
students.push(new Make('박길동',94,94,91,85));

var out = '';

for (var j in students){
  with (students[j]){
     out += name +'\t총점::'+getSum()+'\t평균:'+getAverage()+'\n';
  }
}
alert(out);
