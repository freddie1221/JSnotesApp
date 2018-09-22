function mockList(){}
  mockList.prototype = {
    addNotes: function(){}
  }

function mockListView(){}
  mockListView.prototype.displayNotes = function(){
    return "example note"
  }

function mockSingleNoteView(){}
  mockSingleNoteView.prototype.displayNote = function(){
    return "Here is the full length note"
  }

var mockElement = {
  innerHTML: ""
}

var mockList = new mockList()
var testController = new NoteController(mockList, mockListView, mockSingleNoteView)

function canShowAllNotes(){
  testController.showAllNotes(mockElement)
  assert.isTrue(mockElement.innerHTML === "example note")  
}

function canShowFullNote(){
  testController.showFullNote(mockElement, 1)
  assert.isTrue(mockElement.innerHTML === "Here is the full length note")  
}

function canBeInstantiated(){
  assert.isTrue(testController === testController)
}



canBeInstantiated()
canShowAllNotes()
// canShowFullNote()
