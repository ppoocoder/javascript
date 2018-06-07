
//reduce  :: 배열요소가 하나가 될때까지 배열을 두개식 묶는 과정을 진행
            // 배열 요소를 묶는 과정에서 호출한 함수의 결과가 다음 배열요소를  묶는 과정에서의 입력값이 됨
var array1 =[1,2,3,4,5];
var out ="";

function checkValue(previous, current, index, array){

  out+='previous : current \n';
  out+='  ' +previous+' : '+'  '+current+'\n\n';
  return current;
}

alert(array1.reduce(checkValue));
alert(out);


var out="";
alert(array1.reduceRight(checkValue));
alert(out);

function arraySum(prev,curr){
  return prev + curr
}
alert('배열요소의 합 : ' + array1.reduce(arraySum));
