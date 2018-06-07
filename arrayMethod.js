//pop  push method
var array1 = [25,32,13,4,10];
var out ="";

var array2= array1.slice(1,4);

for(var i in array2){
  out+=i+'번째 배열요소 : ' +array2[i] +'\n';
}
alert(out);

array1.pop();
// 배열의 마지막 value를 제거 (데이터에 영향)
array1.push(33);
// 배열의 마지막에 33을 붙임
var out="";
for(var i in array1){
  out+=i+'번째 배열요소 : ' +array1[i] +'\n';
}
alert(out);

var x =0;

var xy1 = function(){
  alert(this.x);
};

var xy2 = function (x){
  alert(x+2);
  this.x= x+2
};


xy2 = 2;

xy1();
