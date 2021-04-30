
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Please enter your name: ");

console.log("Hello! "+userName+", let's see how well do you know me 😄");

highScore = {
  totalScore: 7,
  name: "Vidhi"
}

questionOne = {
  question: "\nQ1. When is my birthday?\nEnter one of the following options: \n1. 10 October\n2. 20 December\n3. 10 December\n4. 20 October\n",
  answer: 4
}

questionTwo = {
  question: "\nQ2. I have never...\nEnter one of the following options: \n1. broken a bone\n2. Stayed up for more than 24 hours\n3. Ate a whole pizza by herself\n4. Cheated on a test\n",
  answer: 1
}

questionThree = {
  question: "\nQ3. If I meet a genie, what would be my wish? \nEnter one of the following options: \n1. A billion dollars\n2. A superpower \n3. A lot of food\n4. Nothing\n",
  answer: 2
}

questionFour = {
  question: "\nQ4. How many siblings does I have? \nEnter one of the following options: \n1. One\n2. Two\n3. Three\n4. None\n",
  answer: 2
}

questionFive = {
  question: "\nQ5. Am I single or taken? \nEnter one of the following options: \n1. Absolutely single\n2. Taken!\n",
  answer: 1
}

questionSix = {
  question: "\nQ6. If I could wake up with completely different hair colour, what would it be? \nEnter one of the following options: \n1. Blue\n2. Pink\n3. Green\n4. Red\n",
  answer: 3
}

questionSeven = {
  question: "\nQ7. What would make me most happy? \nEnter one of the following options: \n1. Less work \n2. More sleep\n3. More money\n4. A very successful career\n",
  answer: 4
}

questionEight = {
  question: "Q8. What kind of ice cream do I prefer to eat?  \nEnter one of the following options: \n1. Bubble gum \n2. Vanilla\n3. Chocolate\n4. Strawberry\n",
  answer: 3
}

questionNine = {
  question: "\nQ9. Which movie genre would i prefer? \nEnter one of the following options: \n1. Animation \n2. Adventure\n3. Horror\n4. Comedy\n",
  answer: 3
}

questionTen = {
  question: "\nQ10. What do I prefer? \nEnter one of the following options: \n1. Tea \n2. Coffee\n3. None\n",
  answer: 2
}

function questions(question){
  var userAnswer = readlineSync.question(arrayQuestion[i].question);
  if(userAnswer == arrayQuestion[i].answer){
    score++;
  }
}

var arrayQuestion = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for (var i=0; i<arrayQuestion.length; i++){
  questions(arrayQuestion[i]);
}

if(score > highScore.totalScore){
  console.log("YAY! You have passed the test! Your score is: "+score);
}
else{
  console.log("OOPS! Looks like you failed the test. Your score is: "+score);
  var lastQues = readlineSync.question("Do you wish to answer one bonus question to get back in the game?\nEnter 1 for yes and 2 for no\n");
  if(lastQues == 1){
    var bonusQues  = "\nLately what food am I craving for more? \nEnter one of the following options: \n1. Pasta \n2. Pizza\n3. Rajma Chawal\n4. Noodles\n"
    var bonusAnswer = readlineSync.question(bonusQues);
    if(bonusAnswer == 2){
    score+=3;
    }
  }
}

if(lastQues == 1){
  if(score>=highScore.totalScore){
    console.log("You passed the test! Your score is: "+score);
  }
  else{
    console.log("I think we should catch up 🙄 ");
  }
}

