
(function(exports) {

  function NoteListView(list) {
    this.list = list
  }
  
  NoteListView.prototype.displayNotes = function() {
    var noteArray = this.list.notes
    var output = "<ul>"
    
//  OK so we want the note list view to be adding some HTML which references the ID of the note

    for (var i = 0; i < noteArray.length; i++) {
      var note = noteArray[i]
      var shortened = note.text.substring(0,20)
      output += `<li><div><a href='#notes/${note.id}'>${shortened}</a></div></li>`
    }
    output += `</ul>`
    return output
  }
  
  exports.NoteListView = NoteListView
  
})(this)



