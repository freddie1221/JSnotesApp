var list = new List()
list.addNotes("This is a note which is longer than twenty characters")
list.addNotes("Less than 20 chars")
var listView = new NoteListView(list)


var expectedOutputText = "<ul><li><div>This is a note which is longer than twenty characters</div></li><li><div>Hello my name is Andrew</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue(listView.displayNotes() === expectedOutputText)
}

testDisplayNotes()
