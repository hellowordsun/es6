function sum(...nums) {
    let value=0;
    for (let num of nums){
        value+=num
    }
    console.log(value);
}
sum(1,2,3,4,5)

function sum2([x,y]) {
    console.log(x + y);
}
sum2([1,2])

const print=()=> console.log('这是一个箭头函数')
print()

const fn=(x,y)=>{
    return x+y
}
const value=fn(1,2)
console.log(value);

const fn2=(...v)=>{
    let s=0;
    for (let e of v) {
        s+=e
    }
    return s;
}
console.log(fn2(99,98,97));