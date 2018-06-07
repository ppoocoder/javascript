//Array.sort()
var array1 =[25,32,13,4,10];
var out="";


array1.sort();
for(var i=0; i< array1.length; i++){
  out +=i+'번째 배열요소는 ' +array1[i]+'\n';
}
alert(out);

out ="";
array1.sort(function (a,b){return a-b});
//오름차순 sort 구현
for(vari=0;i<array1.length;i++){
  out+=i+'번째 배열요소는 '+ array1[i]+'\n';
}

alert(out);



out ="";
array1.sort(function (a,b){return b-a});
//내름차순 sort 구현
for(vari=0;i<array1.length;i++){
  out+=i+'번째 배열요소는 '+ array1[i]+'\n';
}

alert(out);
