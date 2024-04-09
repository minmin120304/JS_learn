//HTML DOM

//1. Elemen: ID, class, tag name, CSS selector, HTML collection
//2. Attribute
//3. Text

//Get element methods

// var headingNode0 = document.getElementById('heading') //ID
// var headingNode1 = document.getElementsByClassName('headings') //class
// var headingNode2 = document.getElementsByTagName('h1') //tag name
// var headingNode3 = document.querySelector('html .box .heading-2') //CSS selector
// console.log({
//     element0: headingNode0,
//     element1: headingNode1,
//     element2: headingNode2,
//     element3: headingNode3
// })

// //Attribute node & Text node
// //DOM attribute

// var headingElement = document.querySelector('h1')
// var headingElement = document.querySelector('a')

// headingElement.title = 'Tiltle test'
// headingElement.className = 'H'
// headingElement.href = 'H8'
// headingElement.setAttribute('class', 'heading')

// console.log(headingElement.getAttribute('class'))
// console.log(headingElement.getAttribute('title'))

//innerText(get only text on screen), textContent(get dc all ND textnote)
// var headingElement1 = document.querySelector('.headings')

//GETER
// console.log(headingElement1.innerText)
// console.log(headingElement1.textContent)

//SETER
// headingElement1.textContent = 'New heading'

//InnerHTML vs OuterHTML Property
// var boxElement = document.querySelector('.box')

//boxElement.innerHTML = '<h1 title="heading">Heading4</h1>' //+ element node, text node, attribute node -> element
//console.log(boxElement.innerHTML)
//console.log(document.querySelector('h1').innerText)

//boxElement.outerHTML = '<span>Test</span>'
//console.log(boxElement)
//console.log(boxElement.outerHTML)


//DOM style
// boxElement.style.width = '100px'
// boxElement.style.height = '200px'
// boxElement.style.backgroundColor = 'red'

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green',
// })

//ClassList Property

//add
//contains
//remove
//toggle

// console.log(boxElement.classList)

// boxElement.classList.add('red', 'blue') //add class

// console.log(boxElement.classList.contains('red')) //check class

//boxElement.classList.remove('red')

// setTimeout(() => {
//     boxElement.classList.remove('red')
// }, 3000)

// setTimeout(() => {
//     boxElement.classList.toggle('red')
// }, 3000)

// setInterval(() => {
//     boxElement.classList.toggle('red')
// }, 1000)

// document.querySelectorAll('div').forEach((box) =>
//     box.classList.add('box')
// ) //use forEach lap qua cac phan tu div -> add class vao the div


//DOM events

//1. Attribute events
//2. Asign event using the element node

// var h3Elements = document.querySelectorAll('h3')
// var h3Element = document.querySelector('h3')

// h3Element.onclick = function () {
//     console.log(Math.random())
// }

// for (var i = 0; i < h3Elements.length; ++i) {
//     h3Elements[i].onclick = function (e) {
//         console.log(e.target)
//     }
// }

// h3Element.onclick = function (e) {
//     console.log(e) //print element
// }

//Input / select
//key up / down

// var inputValue
// var inputElement = document.querySelector('input[type="text"]')

// inputElement.onchange = function (e) {
//     inputValue = e.target.value
// }

// var inputElement = document.querySelector('input[type="checkbox"]')

// inputElement.onchange = function (e) {
//     console.log(e.target.checked)
// }

// var inputElement2 = document.querySelector('select')

// inputElement2.onchange = function (e) {
//     console.log(e.target.value)
// }

// inputElement.onkeydown = function (e) {
//     console.log(e)
// }

// inputElement.onkeyup = function (e) {
//     console.log(e.which)

//     switch (e.which) {
//         case 27:
//             console.log('Exit')
//             break
//     }
// }

// document.onkeydown = function (e) {
//     // console.log(e.which)

//     switch (e.which) {
//         case 27:
//             console.log('Exit')
//             break;
//         case 13:
//             console.log('SEND CHAT')
//             break;
//     }
// }

//PREVENT DEFAULT
//STOP PROPAGATION

// var aElements = document.querySelectorAll('a')
// var aElements = document.links

// for (var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function (e) {
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault()
//         }
//     }
// }

// var ulElement = document.querySelector('ul')

// ulElement.onmousedown = function (e) {
//     e.preventDefault()
// }
// ulElement.onclick = function (e) {
//     console.log(e.target)
// }

// document.querySelector('div').onclick = function () {
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function (e) {
//     e.stopPropagation()
//     console.log('Click me!')
// }

//Event listener

// var btn = document.getElementById('btn')

// function viec1() {
//     console.log('Viec1')
// }

// function viec2() {
//     console.log('Viec2')
// }

// btn.addEventListener('click', viec1)
// btn.addEventListener('click', viec2)

// setTimeout(function () {
//     btn.removeEventListener('click', viec1)
// }, 3000)

//JSON
//1. là một định dạng dữ liệu (chuỗi)
//2. Javascript Object Notation
//3. JSON: Number, Boolen, String, Null, Array, Object

//Stringify: JS types -> JSON
// Parse: JSON -> JS types

// var json = '["PHP","PYTHON"]'
// var json = '{"name":"Min Min", "age":20'
// var a = '1'

// console.log(JSON.parse(a))

// console.log(JSON.stringify([
//     'J"S',
//     'PHP'
// ]))

//PROMISE
/* 
- Sync: đồng bộ
- Async: bất đồng bộ (setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame)
(callback)
- Callback hell
- Pyramid of doom
- Trạng thái của Promise 
1. Pending
2. Fulfilled
3. Rejected
*/
// Promise methods:
// Promise.all()
// Promise.resolve()
// Promise.reject()

var promise = new Promise(
    //Excutor
    function (resolve, reject) {
        //logic
        //Success: resolve()
        //Failed: reject()

        //Fake call API 
        reject('Co loi!')
    }
); //Object constructor

promise
    .then(function () {
        console.log()
    })
    .catch(function () {
        console.log()
    })
    .finally(function () {
        console.log()
    })
