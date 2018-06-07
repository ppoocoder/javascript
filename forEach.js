var array1=[1,2,3,4,5];
var sum =0;
var out="";// 초기화
array1.forEach(function(value, index, array){
  //(각배열 요소에 대해 특정 작업을 수행할 함수를 이용하기 위해 ~~) forEach(function(value//{배열 요소의 값}, index//{배열 요소의 인덱스}, array//{함수를 통해 특정 작업이 수행될 배열을 의미}))
  sum+=value;
  out+='index' +index+'의 배열요소 : '+ value+'\n';

  if(index ==array.length -1){
    out+='배열요소들의 합은 ' +sum +'입니다.';
  }
});
alert(out);




out = array1.map(function (value){
  return value+10;
});

alert(out);


// 미리 정의된 함수를 사용할 수도 있음

var array1 = [1,2,3,4,5]
var sum =0;
var out="";

function arraySum(value,index,array){
  sum+=value;
  out+='index' +index+'의 배열요소 : '+value+'\n';


    if(index ==array.length -1){
      out+='배열요소들의 합은 ' +sum +'입니다.';
    }

  }

array1.forEach(arraySum);// array sum function 객체로 foreach 문 실행
alert(out); //변화된 out 출력


function plusTen(value) {
  return value+10;
}

alert(array1.map(plusTen));
