var array1=[25,32,13,4,10];
var out="";

array1.splice(0,3);

//splice (0 {첫번째수: 제거하거나 삭제할 인덱스},3 {두번째수: 제거할 개수 })
//~0번재에서 시작하여 3개의 수를 제거함
for(var i in array1){
  out+=i +'번째 배열 요소 : '+ array1[i]+'\n';
}
alert(out);

out="";

array1.splice(1,0,23,42,65);
//array1.splice(1{제거하거나 삭제할 시작점의 인덱스},0{제거할 배열 요소의 개수},23,42,65{나머지: 추가할 배열요소 });
// 1번째에서 제거 없이 23,42,65를 배열요소로 덮어 넣음
for(var i in array1) {
  out+=i+'번째 배열요소 : '+array1[i]+'\n';
}
alert(out);



//Array 객체 특정 위치의 요소 하나만을 삭제하는 메서드를 추가한 뒤, 반복문을 이용하여 조건에 맞는 배열 요소만 삭제하기
Array.prototype.delete = function(index) {
  this.splice(index,1);
}
var array1 = [25,32,13,4,10];
out="";
//for 문 함수를 이용하여 20보다 큰 value의 배열요소를 삭제
if(false){
  for(var i =0;i<array1.length;i++){
  if(array1[i]>20){
    array1.delete(i);
    //i=0일 때 ('25>20' 조건을 만족하여 제거) :: 25,32,13,4,10 -splice(0,1)--> 32,13,4,10
    //i=1일 때 ('13>20' 조건을 만족하지 않음) :: 32,13,4,10
    //i=2일 때 ('4>20' 조건을 만족하지 않음) ::32,13,4,10
    //i=3일 때 ('10>20' 조건을 만족하지 않음) ::32,13,4,10
    //i=4일 때 반복문 종료!
    //splice메서드의 배열 요소가 제거되면 인덱스가 앞으로 당겨지기 때문
    //방지방법: 뒤에서부터 배열요소를 비교하여 삭제하도록 코드 수정
  }
}
}

for(var i = array1.length;i>=0;i--){
// lenth~ 뒤자리 인덱스에서 0이될때 까지 i를 1씩 감소하며 ~~ for 
if(array1[i]>20){
  array1.delete(i);


for(var i =0;i<array1.length;i++){
  out+=i+'번째 배열 요소 : '+array1[i]+'\n';
}
alert(out);
