// // writing files in new file by node

// const fs = require('fs');

// // calling the function to write the value in the file
// fs.writeFileSync('content.txt','This file is created by Node.js');

// // Appending..
// fs.appendFileSync('content.txt','My name is SUjal gera')



// // Using one file in other by 'require'
// const name = require('./utils.js')

// console.log(name);

// Calling fn
// const multiply = require('./utils.js')
// const sol = multiply(2,5)
// console.log(sol)


// Challenge
// const getNotes =  require('./notes.js')

// const msg = getNotes()
// console.log(msg)

// including validator
// const validator = require('validator')
// console.log(validator.isEmail('sujal@gmail.com'))
// console.log(validator.isURL('http://sujal.in'))


// including chalk lib (more popular than validator)
// import chalk from 'chalk'
// const chalk = require('chalk')
// console.log(chalk.green.bold('Success'))
// console.log(chalk.bgBlue('Failed'))


// Input from User
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing notes')
    }
})

yargs.parse()


