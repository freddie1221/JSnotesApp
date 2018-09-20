(function(exports) {
  
  function List() {
    this.notes = []
    this.noteCounter = 0 
    // would like a way to make this private
  }

  List.prototype.addNotes = function(noteText) { 
    note = new Note(noteText, this.noteCounter)
    this.noteCounter += 1
    this.notes.push(note)
  }

  exports.List = List
})(this)

