//객체 '정적(static)' 리터럴 작성
const kdtMinam = {
  name: "원빈별루ㅎ",
  age: 30,
  email: "onlyOneBean@gmail.com",
  another : "금이빨빼고?"
};
//객체 '동적(dynamic)' 리터럴 작성
kdtMinam.name ="공욱재쌤ㅎ";
kdtMinam.age=20;
kdtMinam.email= "kongukjae@gmailcom";
//객체 '동적(dynamic)' 리터럴 삭제
delete kdtMinam.another;
//delete 연산자는 삭제를 성공하면 true, 실패하면 false를 반환
//kdtMinam 객체에는  true
//객체 .freeze() 메소드로 객체 '동적(dynamic)'리터럴 작성 금지
Object.freeze(kdtMinam);

