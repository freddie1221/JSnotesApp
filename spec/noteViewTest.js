var list = new List()
list.addNotes("This is a note which is longer than twenty characters")
list.addNotes("Less than 20 chars")
var noteView = new NoteView(list)
var mockNote = {
  text: "Here is a mock note"
}

var expectedMultipleNotes = "<ul><li><div><a href='#notes/3'>This is a note which</a></div></li><li><div><a href='#notes/4'>Less than 20 chars</a></div></li></ul>"


function canDisplayAllNotes() {
  assert.isTrue(noteView.displayNotes() === expectedMultipleNotes)
}

// this function receives a note as it's argument
function canDisplaySingleNote(){
  assert.isTrue(noteView.displayNote(mockNote) === "<div>Here is a mock note</div>")
}


canDisplayAllNotes()
canDisplaySingleNote()

