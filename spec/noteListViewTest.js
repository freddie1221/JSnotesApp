var list = new List()
list.addNotes("This is a note which is longer than twenty characters")
list.addNotes("Less than 20 chars")
var listView = new NoteListView(list)


var expectedOutputText = "<ul><li><div><a href='#notes/0'>This is a note which</a></div></li><li><div><a href='#notes/1'>Less than 20 chars</a></div></li></ul>"
  

function testDisplayNotes() {
  assert.isTrue(listView.displayNotes() === expectedOutputText)
}

testDisplayNotes()
