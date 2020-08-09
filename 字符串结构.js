let str="hello world!";
console.log(str.includes('hello'));
console.log(str.startsWith('hello'));
console.log(str.endsWith('!'));

console.log('hello'.repeat(3));

let name='jack',age=18;
let template=`this is ${name}, he ${age}`;
console.log(template);

let target= [1,2,3,4].find(item=>item<0)
console.log(target===undefined);