
var list = new List()

function hasNotes() {
  assert.isTrue(list.notes.length === 0)
}

function testAddNotes() {
  list.addNotes()
  assert.isTrue(list.notes.length === 1)
}

hasNotes()
testAddNotes()

// this function takes as an argument a string 
// that will be the value of the text property of the note e.g. "Favourite drink: seltzer".
