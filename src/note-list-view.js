
(function(exports) {

  function NoteListView(list) {
    this.list = list
  }
  
  NoteListView.prototype.displayNotes = function() {
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

  NoteListView.prototype.displayNote = function(noteID) {
    var noteArray = this.list.notes
    var noteID = noteID
    var output = "<ul><li><div>"

    
    var returnArray  = noteArray.filter(filterCondition)
    var returnText = returnArray[0].text

    function filterCondition(value) {
      return value.id === noteID
      debugger
    }
    output += `${returnText}</div></li></ul>`
    return output
  }

  // I need to find out how to retreive an element from an array using a note ID
  //array.filter perhaps. Not that clear to me how this method works. 
  
  exports.NoteListView = NoteListView
  
})(this)



