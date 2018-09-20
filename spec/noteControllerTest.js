function ListDouble(){}

ListDouble.prototype = {
  addNotes: function(){}
}

function ListViewDouble(){}

ListViewDouble.prototype.displayNotes = function(){
  return "example note"
}

var mockElement = {
  innerHTML: ""
}

var listDouble = new ListDouble()
var testController = new NoteController(listDouble, ListViewDouble)



function canUpdateFrontEnd(){
  testController.updateFrontEnd(mockElement)
  assert.isTrue(mockElement.innerHTML === "example note")  
}


function canBeInstantiated(){
  assert.isTrue(testController === testController)
}


canBeInstantiated()
canUpdateFrontEnd()
