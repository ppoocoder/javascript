var array1 =[1,2,'apple','orange',4];
var array2 =[2,4,6,8,9];

alert(typeof(array1));

function isString(value,index,array){
  //function isString(vale) :: 사용하는 매개변수 pramater가 value 뿐이기 때문에,  (value)만 받아와도 filter 함수는 실행

  if(typeof(value)=='string'){
    // value의 타입이 string이면
    return true;
  }
}
alert(array1.filter(isString));
// string 의 value 들만 남음 =>  { 'apple','orange'}
alert(array1)
function overOne(value,index,array){
//function overOne(vale) :: 사용하는 매개변수 pramater가 value 뿐이기 때문에,  (value)만 받아와도 overOne chec 함수는 every,some 함수에서도 실행

  if(value >1){
    return true;
  }
}
alert(array2.every(overOne));
// 모든 배열의 요소가 true => true
alert(array2.some(overOne));
// 하나의 배열 요소가 true 라면 => true
function checkEven(value,index,array){
  if((value %2)==0){
    return true;
  }
}

alert(array2.every(checkEven));
// 모든 배열의 요소가 true 아니면 => false
alert(array2.some(checkEven));

// 하나의 배열 요소가 true 라면 => true
