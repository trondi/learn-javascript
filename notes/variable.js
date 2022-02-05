// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable 변경될 수 있는 값, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{ //block scope : 블럭 안에서만 선언 된것은 블럭 밖에서 이용불가
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!) : 선언전에 출력 및 이용 가능 => 위험
// var hoisting (move declaration from bottom to top) : 어디에 선언했느냐에 상관없이 항상 제일위로 선언을 끌어올려주는 것.
// has no block scope : block scope이 없음
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: prmitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS -> 배열도 가능
// favor immutable data type always for a few reasons:
//  - security : 값변경 방지
//  - thread safety : 동시에 값변경 방지
//  - reduce human mistakes : 실수방지

// 4. Variable types
// primitive(single item): number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function : 함수도 할당이 가능하다는 뜻

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //infinity
console.log(negativeInfinity); //-infinity
console.log(nAn); //NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (template string) : 백틱이용
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //더편하고 띄어쓰기도 표시됨
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects : 고유한 식별자 또는 동시다발적으로 일어나는곳에서 우선순위를 줄때 쓰임
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //동일한지 검사
const gSymbol1 = Symbol.for('id'); //같게만들때
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string+string => 75
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //number
console.log(text.charAt(0)); //error : 위에서 바꿔서
