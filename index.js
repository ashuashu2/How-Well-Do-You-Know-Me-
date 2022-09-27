var readlineSync = require("readline-sync");


var score = 0;

console.log("Hello");
var userName = readlineSync.question('May I Have Your Name? ');
console.log("You entered " + userName);
var welComeMessage = "welcome " + userName + " in the quiz game of ashutosh birthare";
console.log(welComeMessage);
  console.log("------------------------------------")

var questionOne = "MY AGE IS?  ";
var answerOne = "21";

var questionTwo ="MY BIRTHDAY MONTH IS ?"
var answerTwo = "june";
var questionThree = "MY BROTHER NAME IS? ";
var answerThree = "abhishek";
var questionFour= "MY BIRTHPLACE IS? ";
var answerFour = "guna";
var questionFive = "MY PHONEBRAND IS? ";
var answerFive = "vivo";
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log("you entered " + userAnswer);
  if (userAnswer === answer ) {
    console.log("you are right");
    score = score + 1;
    console.log("score is: " + score)

  }else {
    console.log("you are wrong");
    score = score - 1 ;
    console.log("score is: " + score)
      console.log("-------------")
  }
}

play (questionOne , answerOne)
play (questionTwo , answerTwo)
play (questionThree , answerThree)
play (questionFour , answerFour)
play (questionFive , answerFive)
console.log("YAY! you scored: " + score);
