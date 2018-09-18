function NoteListView(list) {
  this.list = list
}

NoteListView.prototype.DislayNotes = function() {
  var noteArray = this.list.notes // => [noteObject, noteObject]
  var output = "<ul>"
  
  for (var i = 0; i < noteArray.length; i++) {
    output += "<li><div>" + noteArray[i].text + "</div></li>"
  }
  output += "</ul>"
  return output
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
