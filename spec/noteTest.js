
var string = 'My favourite language is JavaScript'
var testNote = new Note(string, 1)


function hasText() {
  assert.isTrue(testNote.text === string)
}

function hasID() {
  assert.isTrue(testNote.id === 1)
}

hasText()
