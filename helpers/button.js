function Button(launchpad, note){
  var self = this;

  var noteAsString = note.toString().split("");

  if(noteAsString[1] === "0"){
    // left button
    this.x = 0;
    this.y = parseInt(noteAsString[0]);
  }else if(!noteAsString[1]){
    // bottom button
    this.x = parseInt(noteAsString[0]);
    this.y = 0;
  }else{
    // any other
    this.x = parseInt(noteAsString[1]) || 0;
    this.y = parseInt(noteAsString[0]) || 0;
  }

  this.note = note;
  this.color = 0;

  this.toNote = function(){
    return self.note;
  }

  this.setColor = function(color){
    launchpad._output.sendMessage([144, self.toNote(), color]);
  }

  this.pulseColor = function(color){
    launchpad.sendSysEx([40, self.toNote(), color]);
  }

  // rgb values 0-63
  this.setRgbColor = function(r, g, b){
    launchpad.sendSysEx([11, self.toNote(), r, g, b]);
  }

  this.getColor = function(){
    return self.color;
  }

  this.darken = function(){
    launchpad._output.sendMessage([144, self.toNote(), 0]);
  }

  return this;
}

module.exports = Button;
