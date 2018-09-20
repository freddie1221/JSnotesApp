function mockList(){}

mockList.prototype = {
  addNotes: function(){}
}

function mockListView(){}

mockListView.prototype.displayNotes = function(){
  return "example note"
}

var mockElement = {
  innerHTML: ""
}

var mockList = new mockList()
var testController = new NoteController(mockList, mockListView)


function canUpdateFrontEnd(){
  testController.updateFrontEnd(mockElement)
  assert.isTrue(mockElement.innerHTML === "example note")  
}


function canBeInstantiated(){
  assert.isTrue(testController === testController)
}


canBeInstantiated()
canUpdateFrontEnd()
