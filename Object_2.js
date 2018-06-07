var car={
  name:'car1',
  model:400,
  color:'black'
};

car['name']='car2';
alert(car['name']);

car.model = 500;
alert(car.model);

car.color=9555;
alert(car.color);

car.coler='white';  // car 객체에 coler가 존재 하지 않기 때문에 수정되지 않고 새로운 coler 속성 생성

var out="";

for(var i in car){
  out+= i+ ' : '+car[i]+'\n';
};
alert(out)

delete(car.color);   // 객체의 속성을 삭제 , 객체 삭제는 불가능

var out2="";

for(var j in car){
  out2 +=  j+ ' : '+car[j]+'\n';
}
alert(out2)

var flight={};
flight.airline ='korea';
flight.number=777;
flight.arrival='Seoul';
flight.printAirline = function (){
  alert('The flight is number :' +this.airline);
}

flight.printNumber = function(){
  alert('The flight is number :' + this.number);
}

var out=''
for(var i in flight){
  out+=i + ' : '+ flight[i]+'\n';
}

alert(out);
flight.printAirline();
flight.printNumber();

delete flight.printAirline;

var out2=''
for(var j in flight){
  out2+= j + ' : '+ flight[j]+'\n';
};
alert(out2);
