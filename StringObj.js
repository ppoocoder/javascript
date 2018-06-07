// String 객체의 메서드의 기능(1)
var string1 = 'Ability is decided by one`s own effort';
//string1에 문자열을 저장한 후  메서드 호출
 // 일시적으로 객체로 변화됨  -> 메서드를 호출하여 사용가능(String객체메서드)
var out="";
out +='string1.charAt(2) : ' + string1.charAt(2)+'\n';
//문자열의 2번째 위치 = 'i'
out +='string1.charCode(2) : ' + string1.charCodeAt(2)+'\n';
//i의 유니코드 값
alert(out);


out="string1.concat('test') : "+string1.concat('test')+'\n';
//두개의 문자열을 이어서 리턴

out+="string1.indexOf('is') : "+string1.indexOf('is')+'\n';
//매개변수로 입력받은 문자열과 일치하는 문자열을 앞에서 부터 검색하여 위치를 리턴
out+="string1.lastIndexOf('is') : "+string1.lastIndexOf('is')+'\n';
// 매개변수로 받은 문자열과 일치하는 문자열을 뒤에서부터 검색하나 위치 값은 0을 기준으로 돌려줌
alert(out);

out="string.localeCompare('boy') : " +string1.localeCompare('boy') +'\n';
// 정렬순서에 근거하여 두개의 문자열을 비교 (정렬 순서가 먼저면 : -1 , 같으면 :0 나중이면:1  )
//Abil~ ,boy 중 A가 먼저이기 때문에  = -1
out+="string1.match('by') : "+string1.match('by')+'\n';
//일치하는 문자열을 리턴
out+="string1.match('test') : "+string1.match('test')+'\n';
//일치하는 문자열이 없다면 = null
alert(out);



out="string1.replace('by,'of') : "+string1.replace('by','of')+'\n';
// by를 -> of 로 대체한 문자열 리턴
out+="string1.search('own') : "+ string1.search('own')+'\n';
//own의 위치를 리턴
alert(out);

out="string1.slice(2,28) : " + string1.slice(2,28) +'\n';
//(2)~(28)(인덱스 위치)의 문자열만 리턴
out+="string1.split('by') : " +string1.split('by')+'\n';
//by를 기준으로 분리하여 리턴
out+="string1.substr(2,5) : "+string1.substr(2,5) +'\n';
//i부터 시작하여 5개(갯수) 문자를 리턴
out+="string1.substring(2,28) : "+string1.substring(2,28)+'\n';
//2의 위치부터 5의 위치까지의 문자를 리턴
alert(out);

out="string1.toLowerCase() : "+string1.toLowerCase()+'\n';
//소문자
out+="string1.toUpperCase() : "+string1.toUpperCase()+'\n';
//대문자
alert(out);

alert(string1);

//String객체의 메서드는 문자열 자체의 값을 변화시키지 않고 변화된 문자열을 리턴, 변화된 값이 필요시 따로 변수에 결과값을 저장하여 사용이 필요
