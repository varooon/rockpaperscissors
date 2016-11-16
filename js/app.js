$(document).ready(function(){

  //Select a random value between 1 & 3.
  var computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  //Set rock, paper, scissors values
  var rock = 1;
  var paper = 2;
  var scissors = 3;

  $("#rock").on("click", function(){
    if (computerChoice === rock){
      $("#rock").addClass("tie");
      $("#display-winner").html("It's a tie!").css("color", "#E3B930");
    } else if (computerChoice === paper) {
      $("#rock").addClass("failure");
      $("#display-winner").html("Computer wins!").css("color", "#E33030");
    } else if (computerChoice === scissors) {
        $("#rock").addClass("success");
        $("#display-winner").html("Player wins!").css("color", "#51B551");
    }
  });

  $("#paper").on("click", function(){
    if (computerChoice === paper){
      $("#paper").addClass("tie");
      $("#display-winner").html("It's a tie!").css("color", "#E3B930");
    } else if (computerChoice === scissors) {
      $("#paper").addClass("failure");
      $("#display-winner").html("Computer wins!").css("color", "#E33030");
    } else if (computerChoice === rock) {
      $("#paper").addClass("success");
      $("#display-winner").html("Player wins!").css("color", "#51B551");
    }
  });

  $("#scissors").on("click", function(){
    if (computerChoice === scissors){
      $("#scissors").addClass("tie");
      $("#display-winner").html("It's a tie!").css("color", "#E3B930");
    } else if (computerChoice === rock) {
      $("#scissors").addClass("failure");
      $("#display-winner").html("Computer wins!").css("color", "#E33030");
    } else if (computerChoice === paper) {
      $("#scissors").addClass("success");
      $("#display-winner").html("Player wins!").css("color", "#51B551");
    }
  });

});
