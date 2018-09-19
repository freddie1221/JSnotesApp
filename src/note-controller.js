
(function (exports){
  function NoteController(list = new List, viewer = NoteListView){
    this.list = list
    this.viewer = new viewer(this.list)
  }


  NoteController.prototype.addNotes = function(noteContent){
    this.list.addNotes(noteContent)
  }
  
  NoteController.prototype.updateFrontEnd = function(element){
    element.innerHTML = this.viewer.displayNotes()
  }


exports.NoteController = NoteController
})(this)
  


