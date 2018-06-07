
// 캡슐화 하기전
function Rectangle(width, height){

  //함수(메소드) 지역 변수
  this.width = width;
  this.height = height;

  this.getWidth = function() {
  return this.width;
}; //getwidth 지역함수

this.getHeight = function() {
  return this.height;
};// getHeight 지역함수

this.getArea = function(){
  return this.width * this.height;
}; // getArea 지역함수

}

var rectangle = new Rectangle(4,5);
// 4와 5를 매개변수로 rectangle 생성자 함수를 호출하여 rectangle객체를 생성
alert('witdth: \t'+ rectangle.getWidth());
alert('height: \t'+ rectangle.getHeight());
alert('Area:   \t' +rectangle.getArea());

rectangle.width = -3;
//rectangle.width 재정의
alert('Area:   \t' +rectangle.getArea());
// -15가 출력 캡슐화를 하지 않으면, rectangle값이 음수(-) 되면 안된다는것을 모르고 잘못된 값을 출력가능함
// 자바 스크립트에서 캡슐화는 클로저를 통해 구현가능함


function cap_Rectangle(){
    // function Retangle(width,height){
  ///함수를 통해 지역변수를 수정하고 입력받기 때문에 매개변수가 필요가 없음;
  var width;
  var height;// => var  ::  직접 변수에 접근이 불가능함 & 함수로 접근가능
   this.width = width;
   this.height = height;
//set ~function이 필요!
//set function 구현
this.setWidth = function(w) {
  if(w < 0 ){
    alert('음수는 입력할수 없습니다.');
    return alert('음수는 입력할수 없습니다.');

  }else{
    width = w;
  }
};
this.setHeight = function(h) {
  if(h < 0 ){
    return alert('음수는 입력할수 없습니다.');

  }else{
    height = h;
  }

};

  this.getWidth = function (){
    return width;
    // return this.width; -> :: this.width 객체 변수가아닌 지역변수로 바꿔기 때문에 var 변수로 바꿔야함

  };
  this.getHeight = function(){
    return height;
   //  return this.height;
  };
  this.getArea = function(){
    return width*height;
    // return this.width*this.height;
  };

}

var c_rectangle = new cap_Rectangle();
c_rectangle.setWidth(3);
c_rectangle.setHeight(4);
alert('width:  \t' +c_rectangle.getWidth());
alert('height: \t' +c_rectangle.getHeight());
alert('Area:   \t' +c_rectangle.getArea());
c_rectangle.setHeight(-3);
// c_rectangle.Width = -3;
alert('Area:   \t' +c_rectangle.getArea());
