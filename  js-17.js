//임의의 객체,회원가입등 절차에 의해 
//DB에서 가져온 객체 이거나 ,
//외부에서 불러온 json 파일이라고 가정 

const nameValue = {
  name : "heeny",
  age : 20,
  email: "heen1207@gamil.com"
}
//inNameCheck()함수 내부는 리터럴 덩어리 이므로  좋은 함수는 아니지만 ,독해를 위해서 제작된 예시 패턴이다.
//inNameCheck()는 단어앞 (접두사)에 is 를 붙여서 리턴이 boolean 임을 알려준다.
//함수는 typeof() 검사를 통해 인수가 객체가 아니면 에러를 발생시킴.
// 에러가 발생되면 그 다음 실행은 진행되지 않는다. ( 에러처리의 기본형태이다. )
// 사람이 작성할 때는 이러한 조건들이 눈에 보이지만, 컴퓨터는 이러한 조건을 파악하기 힘들기 때문에
// 특히 데이터타입과 함수는 '필요헌(의도한) 것만 작동되게 ' 하는것이 중요하다 

function inNameCheck(nameObject) {
  if(typeof(nameObject) !== 'object'){
    return new Error("parameter is not an object");
  }

//아래에 중첩된 세 개의 if 문은 조건식이 '정해진값'을 요구함.
//실제 활용에서 조건식 우항과 같은 데이터는 모두 매개변수로 받아야한다.
//"매우 까다롭게" if(참조건)을 받아내려고 하는 의도를 봐라
//콜백패턴이기에 가독성이 매우 떨어지는점은 확인할 것.
  if(nameObject.name === "heeny"){
    // if(nameObject.age === 10){  //false
    if(nameObject.age === 20){ //true
      if(nameObject.email === "heen1207@gamil.com") {
        return true;
      }else{
        return false;
      }
    }else {
      return false;
    }
  } else{
    return false;
  }
}
console.log(inNameCheck(nameValue));
//  위의 코드에서 inNameCheck 함수를 호출할 때, nameValue 객체가 함수의 ()인수로 전달됨 
//  함수를 호출할 때 인수로 전달된 값은 함수 내부에서 매개변수를 통해 접근가능 
//  따라서, inNameCheck() 함수 내부에서 nameObject는 nameValue 객체와 같은 값을 가짐
