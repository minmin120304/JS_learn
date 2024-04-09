/*
1. Let, const
2. Template Literals
3. Multi-line String
4. Arrow function
5. Classes
6. Default parameter
7. Destructuring
8. Rest parameters
9. Spread
10. Enhanced object literals
11. Tagged template literal
12. Modules
*/

/*
1.
- Var / Let, Const: Scope, Hoisting
- Const / Var, Let: Assignment

- Code block: if else, loop, {},...
*/

/*
2.
const courseName = 'JS'
const courseName2 = 'Java'
const desc = `Course name: ${courseName}`

console.log(desc)
*/

/*
//3
const lines = `line 1
line 2
line 3
line 4
line 5`

console.log(lines)
*/

/*4. Arrow function (hàm mũi tên) -> ko dùng để làm hàm constructor
const sum = (a, b) => ({ a: a, b: b })
console.log(sum(2, 2))
*/


/* 5. Classes
class Course {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    getName() { return this.name }
    getPrice() { return this.price }
}

const jsCourse = new Course('JS', 100000)
const phpCourse = new Course('PHP', 100000)

console.log(jsCourse)
console.log(phpCourse)
*/

/* 6. Default parameter
function logger(log, type = 'log') {
    console[type](log)
}

logger('Message', error)
*/

/* 7. Destructuring
8. Rest parameters
var course = {
    name: 'JS',
    price: 1000,
    // children: {
    //     name: 'NodeJS'
    // }
}
//var { name, price } = course
//var { name, ...rest } = course //using rest
// var { name, ...newObject } = course
// var { name: parentName, children: { name } } = course
var { name, desc = 'default desc' } = course

// console.log(newObject)
// console.log(rest)
// console.log(parentName)
// console.log(name)
console.log(desc)

function logger(a, ...params) {
    console.log(...params)//lấy ra phần còn lại
}

logger(1, 2, 3, 4)
*/

/* 9. Spread -> hợp nhất mảng, object
var array1 = ['JS', 'JSX', 'JS']

var array2 = ['Ruby']

var array3 = [...array2, ...array1]

console.log(array3)

var obj1 = {
    name: 'JS'
}

var obj2 = {
    price: 1000
}

var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3)

var array = ['JS', 'PHP', 'Ruby']

// function logger(a, b, c) {
//     console.log(a, b, c)
// }

function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}

logger(...array)
*/

/* 10. Enhanced object literals
- Định nghĩa key: value cho object
- Định nghĩa method cho object
- Định nghĩa key cho object dưới dạng biến
*/

// var name = 'JS'
// var price = 1000

// var course = {
//     name,
//     price,
//     getName() {
//         return name
//     }
// }

// console.log(course.getName())


/* 11. Tagged template literal 

// function highlight([first, ...strings], ...values) {
//     console.log('first: ', first)
//     console.log('strings: ', strings)
//     console.log('values: ', values)
// }

function highlight([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
        .join('')
}

var brand = 'F8'
var course = 'JS'

const html = highlight`Học lập trình ${course} tại ${brand}!`;

console.log(html)
*/

/* 12. Modules: Import / Export

import logger from './logger.js'
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constant.js'
import * as constant from './constant.js'

console.log(constant)

// logger('Test message...', TYPE_WARN)
*/

//OPTIONAL CHAINING (?.)

// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Dinah',
//         cat2: {
//             name: 'Dinah2',
//             cat3: {
//                 name: 'Dinah3'
//             }
//         }
//     },
// };

// if (
//     // obj.cat &&
//     // obj.cat.cat2 &&
//     // obj.cat.cat2.cat3
//     obj?.cat?.cat2?.cat3
// ) {
//     console.log(obj.cat.cat2.cat3.name);
// }

const obj = {
    getName(value) {
        console.log(value);
    }
}

obj.getName?.(123);