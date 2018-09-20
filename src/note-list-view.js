
(function(exports) {

  function NoteListView(list) {
    this.list = list
  }
  
  NoteListView.prototype.displayNotes = function() {
    var noteArray = this.list.notes
    var output = "<ul>"
    
    for (var i = 0; i < noteArray.length; i++) {
      var shortened = noteArray[i].text.substring(0,20)
      output += "<li><div>" + shortened + "</div></li>"
    }
    output += "</ul>"
    return output
  }
  
  exports.NoteListView = NoteListView
  
})(this)



