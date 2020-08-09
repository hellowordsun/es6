let object={
    name:'jack',
    age:28
}
let map=new Map(Object.entries(object));
console.log(map);

let school={
    classroom:{
        student:{
            name:'jack'
        },
        teacher:{
            id:1
        }
    },
    bus:{
        count:100
    }
}

let {classroom,bus}=school;
console.log(classroom);
console.log(bus);

