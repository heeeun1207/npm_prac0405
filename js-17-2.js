const nameValue ={
  name: "heeny",
  age : 20,
  email : "heen1207@gmail.com"
}
let oppend =["heeny", 20, "heen1207@gmail.com"];
let target =[];

function isNameCheck(key,value) {
  if(key === value){
    return true;
  }else {
    return false;
  }
}
for(let key in nameValue) {
  target.push(nameValue[key]);
}
oppend.forEach((element, index)=> {
  if(target[index]) {
    console.log(isNameCheck(element,target[index]));
  }else{
    console.error("not found");
  }
})
// ameValue 객체와 oppend 배열을 비교하는 코드
// nameValue 객체의 각 프로퍼티 값을 배열로 만들어 target 배열에 담는다
// for...in 구문을 nameValue 객체의 각 프로퍼티 이름을 반복하면서 해당 프로퍼티 값들을 target 배열에 push
// oppend 배열의 ->target 배열과 값이 일치하는지 비교
