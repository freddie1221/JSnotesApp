var list = new List()
var listView = new NoteListView(list)

var text = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue(listView.DislayNotes = text)
}

testDisplayNotes()
