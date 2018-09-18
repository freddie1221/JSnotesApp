function NoteListView(list) {
  this.list = list
  this.output = ""

}

  NoteListView.prototype.DislayNotes = function() {
    var notesArray = this.list.notes // => [noteObject, noteObject]
    for (i = 0 ; i = noteArray.length-1; i++) {
      return
    }
  }






// (function(exports){
//   function CalculatorView(){}
//
//   CalculatorView.prototype.buildOutput = function(result) {
//     return `<h2>${result}</h2>`
//   }
//
//   exports.CalculatorView = CalculatorView
// })(this)
