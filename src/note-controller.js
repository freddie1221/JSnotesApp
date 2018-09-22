
(function (exports){
  function NoteController(list = new List, noteViewer = NoteView){
    this.list = list
    this.noteViewer = new noteViewer(this.list)
  }

  var element = document.getElementById("header")
  
  NoteController.prototype.setEventListeners = function() {
    window.addEventListener("hashchange", this.execute.bind(this));
  };
  
  NoteController.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("/")[1]
  }

  NoteController.prototype.execute = function(){
    var iD = parseInt(this.getNoteIdFromUrl(), 10)
    var noteObject = this.list.returnNote(iD)
    this.showFullNote(element, noteObject)
  }

  NoteController.prototype.addNotes = function(noteContent){
    this.list.addNotes(noteContent)
  }
  
  NoteController.prototype.showAllNotes = function(element){
    element.innerHTML = this.noteViewer.displayNotes()
  }

  NoteController.prototype.showFullNote = function(element, note){
    element.innerHTML = this.noteViewer.displayNote(note)
  }
  


exports.NoteController = NoteController
})(this)
  



// everything done except the event listener