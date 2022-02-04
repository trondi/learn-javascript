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

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(from json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
