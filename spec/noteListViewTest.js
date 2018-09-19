var list = new List()
list.addNotes("Hello my name is Freddie")
list.addNotes("Hello my name is Andrew")
var listView = new NoteListView(list)


var expectedOutputText = "<ul><li><div>Hello my name is Freddie</div></li><li><div>Hello my name is Andrew</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue(listView.displayNotes() === expectedOutputText)
}

testDisplayNotes()
