'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(to obj)
let json = JSON.stringify(true);
console.log(json);//true

json = JSON.stringify(['apple', 'banana']);
console.log(json);// ["apple", "banana"]

const rabbit = {// object
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);//json으로 변환
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); 
// 해당하는 property만 출력 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {// callback 함수를 통해서 전달받을 수 있음
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(from json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json);//birthdate -> string

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
  //키가 만약 birthdate면 새로운 오브젝트를 만들거나 아니면 그냥 원래 값을 쓸것
});
console.log(obj);
rabbit.jump(); //rabbit의 오브젝트는 바로 출력 : can jump!
// obj.jump(); 
//변환한 오브젝트에서 함수는 직렬화 할때 포함되지 않으므로 쓸 수 없음

//API 사용
console.log(rabbit.birthDate.getDate());//29
console.log(obj.birthDate.getDate());//error
//obj.birthDate 이 string으로 오브젝트에 할당
