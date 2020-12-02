const fs = require('fs')
// const book = {
//     title: 'Superhero',
//     author: 'sujal gera',
//     describe: 'life story of author'
// }

// const JSONbook = JSON.stringify(book)
// // console.log(JSONbook)

// // const parsedData = JSON.parse(JSONbook)
// // console.log(parsedData.title)
// fs.writeFileSync('1-json.json',JSONbook)

// read the file
// const dataBuffer = fs.readFileSync('1-json.json')
// // convert it  in string format
// const dataJSON = dataBuffer.toString()
// // parse it to access the properties 
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// challenge
const bufferData = fs.readFileSync('1-json.json')
const dataJSON = bufferData.toString()
const user = JSON.parse(dataJSON)

user.name = 'SG'
user.age = '19'

const data = JSON.stringify(user)
fs.writeFileSync('1-json.json',data)