
(function (exports){
  function NoteController(list = new List, listViewer = NoteListView, singleViewer = SingleNoteView){
    this.list = list
    this.listViewer = new listViewer(this.list)
    // this.singleViewer = new singleViewer(this.list)
  }

  var element = document.getElementById("app")
  
  NoteController.prototype.setEventListeners = function() {
    window.addEventListener("hashchange", showFullNote());
  };

  NoteController.prototype.getNoteIdFromUrl = function() {
    return window.location.hash.split("/")[1]
  }

  NoteController.prototype.addNotes = function(noteContent){
    this.list.addNotes(noteContent)
  }
  
  NoteController.prototype.updateFrontEnd = function(element){
    element.innerHTML = this.listViewer.displayNotes()
  }

  NoteController.prototype.showFullNote = function(element, note){
    var singleViewer = new SingleNoteView(note)
    element.innerHTML = this.singleViewer.displayNote(note)
  }
  // This works :)


exports.NoteController = NoteController
})(this)
  



// everything done except the event listener