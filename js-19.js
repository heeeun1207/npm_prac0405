//단순 "문자열"을 리턴하는 elementMaker 함수
//HTML 형식을 따랐을뿐 HTML로 parsing 되기 전까지는  단순한 문자열이다
function elementMaker(tagName , content){
  return `<${tagName}>${content}</${tagName}>`;
}
//매개변수 하나는 큰개념으로 "데이터"라고 설정
// render라는 함수는 어디까지나 문자열을 리턴하는 함수임
function render(data){
  return `
    <html>
      <head>
        <title> HEEN SWEET HOME </title>
      </head>
      <body>
        ${data}
      </body>
    </html>
    `;
}
// elementData 라는 배열은 문자열 한웅큼씩 하나의 '원소'로 10개가 들어간다.
let elementsData = [];
for(let i=0 ; i<10 ; i++){
  elementsData.push(elementMaker('h1','우리집-${i}'));
};
//join() 메서드는 간단하게 배열의 모든 원소를 연결해 하나의 문자열로 만들어 
// 간단하게  <h1>우리집-${i}</h1>  을 생성한 것을 확인 가능 
render(elementsData.join(''));
// console.log(render(elementsData.join('')));
// {/* <html>
// <head>
//   <title> HEEN SWEET HOME </title>
// </head>
// <body>
//   <h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1><h1>우리집-${i}</h1>
// </body>
// </html> */}
//이거맞나????? .... 
console.log(elementsData.join(''));

//확장성 , 응용성 생각해보기