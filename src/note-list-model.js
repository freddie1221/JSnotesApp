(function(exports) {
  
  function List() {
    this.notes = []
  }
  
  var noteCounter = 0

  List.prototype.addNotes = function(noteText) { 
    note = new Note(noteText, noteCounter)
    noteCounter += 1
    this.notes.push(note)
  }

  List.prototype.returnNote = function(noteId) {
    var returnArray = this.notes.filter(filterCondition)
    function filterCondition(value){
        return value.id === noteId
      }
    return returnArray[0]
  }

  exports.List = List
})(this)

