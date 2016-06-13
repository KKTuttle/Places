//business logic
function Dest(name, destination, landmark, timeOfTheYear, notes) {
  this.nameOfUser = nameOfUser;
  this.destination = destination;
  this.landmark = landmark;
  this.timeOfTheYear = timeOfTheYear;
  this.notes = notes;
}

Dest.prototype.newDest = function(){
  return this.nameOfUser + ", "  + this.destination
}
// user interface logic
$(document).ready(function() {
  $("form#beenToPlacesForm").submit(function(event) {
    event.preventDefault();
    var inputtedNameOfUser = $("#nameOfUser").val();
    var inputtedDestination = $("#destination").val();
    var inputtedLandmark = $("#landmark").val();
    var inputtedTimeOfTheYear = $("#timeOfTheYear").val();
    var inputtedNotes = $("#notes").val();

    var newDest = new Dest(inputtedNameOfUser, inputtedDestination, inputtedLandmark, inputtedTimeOfTheYear, inputtedNotes);

    $("destinationLi").append("<li><span class='nameOfUser'>" + newDest.nameOfUser + "</span></li>");
    $("#destinationLi").append("<li><span class='destination'>" + newDest.destination + "</span></li>");
    $("#destinationLi").append("<li><span class='landmark'>" + newDest.landmark + "</span></li>");
    $("#destinationLi").append("<li><span class='timeOfTheYear'>" + newDest.timeOfTheYear + "</span></li>");
    $("#destinationLi").append("<li><span class='notes'>" + newDest.notes + "</span></li>");

    $("#destinationLi").submit(function() {
      debugger;
      $("#show-place").show();
      console.log(nameOfUser);
      $("#show-place").text(newDest.nameOfUser);
      $(".nameOfUser").text(newDest.nameOfUser);
      $(".destination").text(newDest.destination);
      $(".landmark").text(newDest.landmark);
      $(".timeOfTheYear").text(newDest.timeOfTheYear);
      $(".notes").text(newDest.notes);

    });

    $("input#nameOfUser").val("");
    $("input#destination").val("");
    $("input#landmark").val("");
    $("input#timeOfTheYear").val("");
    $("input#notes").val("");
  });
});
