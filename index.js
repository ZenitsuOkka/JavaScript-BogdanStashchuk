// let myName
// console.log(myName)
// myName = "andrej"
// console.log(myName)

// const myName = "Andrej"

// myName = ""

// console.log(myName)
//динамическая типизация 
// const a = () => {
//     console.log("Hello")
// }
// a()

// const myCity ={
//     city: "New York",
//     popular: true,
//     country: "USA"
// }
// console.log(myCity.city)

// const myCity ={
//     city: "New York",
// }
// myCity.city = "las vegas"
// console.log(myCity)

// const myCity ={
//     city: "New York",
// }
// myCity.country = "USA"
// myCity.popular = true
// delete myCity.popular
// console.log(myCity)

// const myCity ={
//     city: "New York",
// }

// myCity['popular'] = true
// console.log(myCity)

// const countryPropertyName = 'country'
// myCity[countryPropertyName] = 'USA'
// console.log(myCity)


// const myCity ={
//     city: "New York",
//     cityGreeting() {
//         console.log('Greetings!')
//     }
// }
// myCity.cityGreeting()


// const myCity ={
//     city: "New York",
//     popular: true,
//     country: "USA"
// }
// const myCity1 = { ...myCity } //копируем обьект
// myCity1.capital = "Vashington"
// console.log(myCity1)
// console.log(myCity)


// const myCity ={
//     city: "New York",
//     popular: true,
//     country: "USA"
// }
// const myCity1 = JSON.parse(JSON.stringify(myCity))//копируем обьект
// myCity1.capital = "Vashington"
// console.log(myCity1)
// console.log(myCity)

// let a = 5
// let b = 7

// function sum(a, b) {
//     const c = a + b
//     console.log(c)
// }
//  sum(a, b)

//  a = 20
//  b = 11

//  sum(a, b)

// 

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// myFn(10, 3) //14



// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function  increasePersonAge(person) {
//     person.age += 1
//     return person
// }

// increasePersonAge(personOne) 
// // console.log(personOne.age)

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function  increasePersonAge(person) {
//     const updatedPersone = Object.assign({}, person)
//     updatedPersone.age += 1
//     return updatedPersone
// }

// const updatedPersoneOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPersoneOne.age)

// function printMyName() {
//     console.log('Andrej')
// }
// setTimeout(printMyName, 1000)

// const a = 5 

// function myFn() {
//     function innerFn() {
//         console.log(a) //5
//     }
//     innerFn()
// }

// myFn()

// // typeof 10
 
// //Опреатор ...
// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)



// // стрелочная функция 
// const myFunction = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// console.log(myFunction (5, 3))//9

// function multByFactory(value, multiplier = 1) {
//     return value * multiplier
// }
// multByFactory(10, 2) // 20
// multByFactory(5) // 5

// function(value, multiplier = 1) {
//     return value * multiplier
// }


// const myFn = (value, multiplier = 1) => value * multiplier

// console.log(myFn(10))

// const newPost = (post, addedAt = Date()) => {
//     return{
//         ...post,
//         addedAt,
//     }

// }

// const firstPost = {
//     id: 1,
//     author: 'Andrej'
// }

// console.table(newPost(firstPost))


// const fnWithError = () => {
//     throw new Error('Some Error')
// }
// fnWithError()
// console.log("Continue...")


// function myFn(a) {
//     console.log(a);
// }

// const b = true;
// let c = 10;

// myFn(2 + 3)
// myFn(b)
// myFn(c = c + 1)
// myFn(c = c + 1;)
// myFn(let d)

// const myArray = [1, true, 'Andrey']

// console.log(myArray)
// console.log(myArray[0])
// console.log(myArray.length)


// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.push(4)
// console.log(myArray)

// myArray.push(true)
// console.log(myArray)

// const removedElement = myArray.pop()
// console.log(myArray)
// console.log(removedElement)

// myArray.unshift(22)
// console.log(myArray)

// myArray.shift()
// console.log(myArray)


// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.forEach(el =>console.log(el * 2))

// console.log(myArray)


// const myArray = [1, 2, 3]

// const newArray = myArray.map(el => el * 2)

// console.log(myArray)
// console.log(newArray)


// const userProfile = {
//     name: 'Andrey',
//     commentsQty: 23,
//     hasSigned: false,
// }

// console.log(userProfile.name)

// const {name, commentsQty, hasSigned} = userProfile
// console.log(name)
// console.log(commentsQty)

// const fruits = ['banana', 'ananas']

// const [fruitsOne, fruitsTwo] = fruits

// console.log(fruitsOne)
// console.log(fruitsTwo)


// const userProfile = {
//     name: 'Andrey',
//     commentsQty: 23,
//     hasSigned: false,
// }

// const userInfo = ({name, commentsQty}) =>{
//     if (!commentsQty) {
//         return `User ${name} has not comments!`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }
// console.log(userInfo(userProfile))


// let val = 10

// if (val > 5) {
//     val += 20
// }

// console.log(val)


// const person = {
//     age: 20
// }

// if (!person.name) {
//     console.log('Имя не указанно ')
// }


// let val = 10

// if (val < 5) {
//     val += 20
// } else {
//     val -=20
// }

// console.log(val)


// const age = 10

// if (age > 18) {
//     console.log('Is addult')
// } else if (age >= 12) {
//     console.log('Is teenager')
// } else {
//     console.log('Is child')
// }


// const age = 5

// if (age > 18) {
//     console.log('Is addult')
// } 
// if (age >= 12 && age < 18) {
//     console.log('Is teenager') 
// } 
// if (age < 12) {
//     console.log('Is child')
// }


// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'One of the arguments is not a number'
//     }

//     if (a <= 0 || b <= 0) {
//         return 'Numbers are not positive'
//     }

//     return a + b
// }

// console.log(sumPositiveNumbers(2, 8))



// const month = 2

// switch (month) {
//     case 12:
//         console.log('December')
//         break
//     case 1:
//         console.log('January')
//         break
//     case 2:
//         console.log('February')
//         break
//     default:
//         console.log('This is not winter month')
// }


// const value = 11

// value 
// ? console.log('Условие истинно')
// : console.log('Условие ложно')


// const value1 = 11
// const value2 = 25

// value1 && value2 
//     ? myFunction1(value1, value2)
//     : myFunction2()


// let value = 11
// console.log(value >= 0 ? value : -value)

// value = -125
// const res = value >= 0 ? value : -value
// console.log(res)


// let i = 0
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)
// i++


// const myArray = [true, 'abc', 10]

// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])


// const myObject = {
//     x: 10,
//     y: true,
//     z:'abc'
// }

// console.log(myObject.x)
// console.log(myObject.y)
// console.log(myObject.z)


// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


// const myArray = ['first', 'second', 'third']

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }


// let i = 0

// while (i < 5 ) {
//     console.log(i)
//     i++
// }


// let i = 10

// do {
//     console.log(i)
//     i++
// } while (i < 5)


// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// for (const key in myObject) {
//     console.log(key, myObject[key])
// }


// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// Object.keys(myObject).forEach(key => {// Object.keys получение всех     значений из обьекта в виде массива
//     console.log(key, myObject[key])
// })


// const myArray = [true, 10, 'abc', null]

// for (const key in myArray) {
//     console.log(myArray[key])
// }


// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty =0
//     }
//     upvot() {
//         this.votesQty += 1
//     }

//     static mergeComment (first, second) {
//         return `${first} ${second}`
//     }
// }

// const firstComment = new Comment('First Comment')
// const secondComment = new Comment('Second Comment')
// const thirdComment = new Comment('Third Comment')
// Comment.mergeComment('First comment.', 'Second comment')



// console.log(firstComment)
// console.log(secondComment)
// console.log(thirdComment)
// console.log(Comment.mergeComment('First comment.', 'Second comment'))


// firstComment.hasOwnProperty('text')
// firstComment.hasOwnProperty('votesQty')
// firstComment.hasOwnProperty('text')


// class NumberArray extends Array {
//     sum(){
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }

// const myArray = new NumberArray(2, 5, 7)


// console.log(myArray)
// console.log(myArray.sum())

// const getData = (url) =>
//     new Promise((resolve, reject) => 
//     fetch(url)
//     .then(response => response.json())
//     .then(json =>resolve(json))
//     .catch(error => reject(error))
    
// )

// getData('url')
//     .then(data => console.log(data))
//     .catch(rror => console.log(error.message))


const timerPromise = () =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 2000))

const asyncFn = async () => {
    console.log('Time starts')
    const startTime = perfomance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}

asyncFn()