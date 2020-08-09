let [a,b,c]=[1,2,3]
console.log(a, b, c);
let[q,,w]=[1,2,3]
console.log(q, w);
let [z,...o]=[1,2,3]
console.log(z, o);

let [aa='aa']=[undefined] //undefined不会被复制成功
let [bb='bb']=[null]
console.log(aa,bb);

// let{name,age}={name:'aaa',age:123}
// console.log(name, age);
let{name:foo,age:bar}={name:'aaa',age:123}
console.log(foo, bar);

let obj={};
let arr=[];
({foo:obj.name,age:arr[0]}={foo:'jack',age:18})
console.log(obj, arr);

let{length:len}='hello';
console.log(len);

function add([a,b]) {
    return a+b;
}
add([1,2]);
let list=[1,2,3,4,5];
list.map(item=>item+1)
console.log(list);

let map=new Map()
map.set('name','jack')
map.set('age',28)
for (let [key,value] of map ) {
    console.log(key, value);
}
for(let [key] of map){
    console.log(key);
}
for(let [,value] of map){
    console.log(value);
}

