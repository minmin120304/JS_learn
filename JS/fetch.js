var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function (response) {
        return response.json()
        //JSON.parse: JSON -> JS type
    })
    .then(function (posts) {
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        var html = htmls.join('')
        document.getElementById('post-block').innerHTML = html
    })
    .catch(function (err) {
        alert('error')
    })

//JSON sever -> API sever (fake)/ Mock API
var courseApi = 'http://localhost:3000/course'

fetch(courseApi)
    .then(function (response) {
        return response.json()
    })
    .then(function (courses) {
        console.log(courses)
    })
/*
CRUD:
    - Create: Tạo mới -> POST
    - Read: Lấy data -> GET
    - Update: Chỉnh sửa -> PUT / PATCH
    - Delete: Xoá -> DELETE
*/
//Postman