// var empty={
// };
// var car ={
//   name:'car1',
//   model:400,
//   color:'black',
//
//   company:{
//     start:1997,
//     logo:'star'
//   },
//   run: function() {
//     alert('Car is running');
//   },
//   run2: function() {
//     alert(this.name+' is runing');
//     //javascript에서 this를 생략 불가능
//     // 아래에서 똑같은 속성이름으로 재정의를 하였기때문에 사용이 안됨
//
//   },
//
//   run2: function(x) {
//     alert(this.name+' is runing '+x)
//   }
//   // 함수를 재정의를 함 ---  생성자 생성 못함
//
// };
// // // in 키워드 이용
// // alert('name' in car);
// // alert('company' in car);
// // alert('run' in car);
// //
// // alert('test' in car);
// // ture or false 값을 보여줌 !!
//
// //
// // alert(car.company.logo);
// // car.run();
// // car.run2();
// car.run2('~~~~');
// // alert(car['name']);
// // car['name']='car2';
// //
// // alert(car['name']);
// //
// // alert(car.model);
// //
// // car.model = 500;
// //
// // alert(car.model);
// //
// // alert(car.color);
// // alert(car.fekkd);
// //
// // //배열 함수
// var arr=[];  // var arr -> Array[ 'NaN'.... ]
//
// for(var i=0; i<7; i++) {
//   arr[i] = i+1
//   arr[i] += 1;
//   // javascript  += 연산이 안됨
//   //초기화 하지 않았기 때문에 처음 배열의 value가 NaN이고, NaN에서 +1을 하였기 때문에 NaN으로 연산이 안됨
//   alert(arr[i]);
// }
// // }
// // for(var j=0; j< arr.length; j++) {
// //   alert(arr[j]);
// // } // for(var j in arr{
// // //          alert(arr[j]) };
// //
// // // for in 함수
// // for (var i in car) {
// //   alert(i +': \t'+ car[i]);
// // }
//
//
// var out=""; //var out ->  string
//
// var name ="홍길동 window 객체 car.name 아님 "
//
// with(car){
// out+='name : \n' +name +'\n',
//
// out+='model : \n' +model +'\n',
//
// out+='color : \n' +color +'\n',
//
// out+='company.start : \n' + company.start +'\n',
// out+='company.logo : \n' + company.logo +'\n'
// out+='차주 : \n' +window.name +'\n'
//
//
// }
// alert(out)
alert('d');
