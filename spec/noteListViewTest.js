var list = new List()
list.addNotes("This is a note which is longer than twenty characters")
list.addNotes("Less than 20 chars")
var listView = new NoteListView(list)


var expectedMultipleNotes = "<ul><li><div><a href='#notes/0'>This is a note which</a></div></li><li><div><a href='#notes/1'>Less than 20 chars</a></div></li></ul>"
var expectedSingleNote = "<ul><li><div>This is a note which is longer than twenty characters</div></li></ul>"

function testDisplayNotes() {
  assert.isTrue(listView.displayNotes() === expectedMultipleNotes)
}

function testDisplayNote(){
  assert.isTrue(listView.displayNote(0) === expectedSingleNote)
}

testDisplayNotes()
testDisplayNote()





// function filterFunction(array, conditionFunction){
	
// 	var returnArray = []

// 	for (i = 0; i < array.length; i++) {
//     if (conditionFunction(array[i])) { 
//       returnArray.push(array[i]) 
//     }
//   }
// }


// array.each { |element| return element }