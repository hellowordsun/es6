'use strict';
//转码之后的文件
var object = {
    name: 'jack',
    age: 28
};
var map = new Map(Object.entries(object));
console.log(map);

var school = {
    classroom: {
        student: {
            name: 'jack'
        },
        teacher: {
            id: 1
        }
    },
    bus: {
        count: 100
    }
};

var classroom = school.classroom,
    bus = school.bus;

console.log(classroom);
console.log(bus);
