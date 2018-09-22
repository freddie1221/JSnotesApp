
(function(exports) {

  function NoteView(list) {
    this.list = list
  }
  
  NoteView.prototype.displayNotes = function() {
    var noteArray = this.list.notes
    var output = "<ul>"
    
    for (var i = 0; i < noteArray.length; i++) {
      var note = noteArray[i]
      var shortened = note.text.substring(0,20)
      output += `<li><div><a href='#notes/${note.id}'>${shortened}</a></div></li>`
    }
    output += `</ul>`
    return output
  }

  NoteView.prototype.displayNote = function(note) {
    return `<div>` + note.text + `</div>`
  }


  
  exports.NoteView = NoteView
  
})(this)



