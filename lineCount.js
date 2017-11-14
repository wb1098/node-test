var fileServices = require('fs');

// sync style
/*
const notesFileText = fileServices.readFileSync('./notes.md', 'utf-8').split(/\r\n|\r|\n/).length

console.log(notesFileText)
*/


// Async style

var textNotesTwo = fileServices.readFile('./notes.md', 'utf-8', function (err, data) {
    var theFileNotes = data.split(/\r\n|\r|\n/).length;
    console.log(theFileNotes);
})
