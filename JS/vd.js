// function joinWithCharacter(array, charactor) {
//     return array.join(charactor);
// }


// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

//Object constructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Min', 'Nguyen', 'Avatar');
// var user = new User('An', 'Nguyen', 'Avatar');

// author.tilte = 'Chia sẻ';
// user.comment = ':)))))';

// //console.log(author.constructor === User); //check ob cons
// console.log(author.getName());
// console.log(user.getName());

//Doi tuong Date
// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(orders) {
//     var sum = 0;
//     for (var i = 0; i < orders.length; i++){
//         sum += orders.price[i];
//     }
//     return sum;
// }


// // Expected results:
// getTotal(orders) // Output: 8700000


// var course = courses.filter(function(course, index){
//     return course.name === 'Ruby';
// });

// function getMostFavoriteSport(sports) {
//     var like = sports.filter(function(sports){
//         return sports.like > 5;
//     })
//     return like
// }

// // reduce
// var i = 0;
// function coinHandler(, currentIndex, originArray) {
//     i++;

// }

// var totalCoin = courses.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.coin;
// }, 0);

// console.log(totalCoin);



// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(sports) {
//     return sports.reduce(function(total, sport){
//         return total + sport.gold;
//     }, 0);
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
// ];

// function calculateRating(watchList){
//     var lists = watchList.filter(function(watchList){
//         return watchList.Director === 'Christopher Nolan'
//     })
//     console.log(lists)

//     var totalPoint = lists.reduce(function(total, list){
//         return +(list.imdbRating) + total
//     }, 0);
//     console.log(totalPoint)

//     return totalPoint/lists.length;
// }
  
//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675
  
// function arrToObj(arr) {
//     return arr.reduce((init, [key, value]) => {init[key] = value;
//         return init}, {}) 
// }
 
// // Expected results:
// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 } 
  
//CALL BACK
// Array.prototype.map2 = function(callback) {
//     var output = [], arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         var result = callback(this[i], i);
//         output.push(result);
//     }
//     return output;
// }  

// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`;
// })

// console.log(htmls.join(''));


//FILLTER METHOD
// Array.prototype.filter2 = function(callback) {
//     var output = []

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }

//     return output;
// }
// var courses = [
//     {
//         name: 'JS',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     }, 
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];

// var filterCourses = courses.filter2(function(course, index, array){
//     // console.log(course, index, array)
//     return course.coin > 700;
// });

// console.log(filterCourses)

//MY SOME() METHOD

// Array.prototype.some2 = function(cb) {
//     for (var i in this) {
//         if (this.hasOwnProperty(i)){
//             if (cb(this[i], i, this)) {
//                 return true
//             }
//         }    
//     }
//     return false
// }

// var courses = [
//     {
//         name: 'JS',
//         coin: 680,
//         isFinish: false
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true
//     }, 
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: false
//     }
// ];

// var result = courses.some2(function(course, index, array){
//     return course.isFinish;
// })

// console.log(result)

//EVERY

// Array.prototype.every2 = function(cb) {
//     var output = true

//     for (var i in this) {
//         if (this.hasOwnProperty(i)){
//             var result = cb(this[i], i, this)
//             if (!result) {
//                 output = false
//                 break
//             }
//         }    
//     }
//     return output
// }

// var courses = [
//     {
//         name: 'JS',
//         coin: 680,
//         isFinish: false
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true
//     }, 
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true
//     }
// ];

// var result = courses.every2(function(course, index, array){
//     return course.isFinish;
// })

// console.log(result)