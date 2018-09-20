
var list = new List()

function hasNotes() {
  assert.isTrue(list.notes.length === 0)
}

function testAddNotes() {
  list.addNotes()
  assert.isTrue(list.notes.length === 1)
}

function notesHaveUniqueID() {
  list.addNotes('This is note 1')
  list.addNotes('This is note 2')
  assert.isTrue(list.notes[0].id != list.notes[1].id)
}

hasNotes()
testAddNotes()
notesHaveUniqueID()


