
var string = 'My favourite language is JavaScript'
var id = 1
var testNote = new Note(string, id)


function hasText() {
  assert.isTrue(testNote.text === string)
}

function hasID() {
  assert.isTrue(testNote.id === 1)
}

hasText()
hasID()
