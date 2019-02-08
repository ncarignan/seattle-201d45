'use strict';
//declaring variable to use in answer field rather than strings
var answerYes = ['yes', 'YES', 'y', 'Y', 'ye', 'Yes'];
var answerNo = ['no', 'NO', 'n', 'N', 'nope'];


//prompt for question 1 of 5 y/n Qs
//options for Yes answer
var answer ;
//= prompt('Have I ever willingly consumed mayonnaise?');
// for(var i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. This answer is wrong');
//     alert('You are wrong');
//   }else{
//   //I have this log here so that if someone (most likely me) decides to
//   //keyboard-smash/other invalid input, I can still see what they wrote
//     console.log(answer);
//   }
// }

// //options for No answer
// for(var j = 0; j <= answerNo.length; j++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are right. I hate the stuff');
//   }
// }

// //prompt for question 2 of 5 y/n
// answer = prompt('Was my first pet a cat?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. This answer is wrong');
//     alert('You are wrong');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are right, but I think they are cute');
//   }
// }

// //prompt for question 3 of 5 y/n
// answer = prompt('Do I have a collection of interesting rocks?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. This answer is right');
//     alert('You are right. Rocks are cool');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are wrong, and might need more interesting rocks');
//   }
// }



//prompt for question 4 of 5 y/n
// var validAnswer = false;

// do {
//   answer = prompt('Have I lived on the east coast?');
//   for (var i = 0; i < answerYes.length; i++) {
//     if (answerYes[i] === answer) {
//       console.log('answer: ' + answer + '. This answer is wrong');
//       alert('Wrong, but I have family there.');
//       validAnswer = true;
//       break;
//     } else if (answerNo[i] === answer) {
//       alert('right, but I have family there.');
//       validAnswer = true;
//       break;
//     }
//   }

//   if (!validAnswer) {
//     console.log(answer);
//     alert('that was not a good answer, but im letting you move on anyway');
//   }
// } while(!validAnswer);


// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are right, but I still have family there');
//   }
// }

// //prompt for question 5 of 5 y/n
// answer = prompt('Have you done the reading?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. goood answer');
//     alert('Congratulations on being a good student');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' wrong');
//     alert('Well you should do the reading');
//   }
// }

// //Pick a number question. I have picked 9

// var pickNumber = [9, 9, 9, 9];
var correctNumber = 9;
// var guesses = 4; // TODO: find out my off by one error
var pickNumberAnswer = prompt('See if you can guess the number I\'m thinking of. It is between 1 and 15');
/*
This works because it iterates through the pickNumber array, which I have used to limit how many times the
question runs.
Note: This only works because I have set my entire array to the same numer. It is picking an different index,
or a different 9, each time. If I were to change the numbers past index [0] to anything other than 9, the questions
wouldn't work properly. While this works, it is far from a perfect fix.
*/
for(var guesses = 3; guesses > 0; guesses--){
  if (pickNumberAnswer > correctNumber){
    console.log(pickNumberAnswer + ' was too big');
    pickNumberAnswer = prompt('Too big');
  }else if(pickNumberAnswer < correctNumber){
    console.log(pickNumberAnswer + ' was too small');
    pickNumberAnswer = prompt('Too small');
  }else if(pickNumberAnswer == correctNumber){
    console.log(pickNumberAnswer + ' was correct');
    alert('Congrats you got it');
    break;
  } else {
    pickNumberAnswer = prompt('give a num');

  }
}


// /*Trying and failing to solve 7 with similar thing to yes/no questions;
// I've added dogs and bears to one of my answer arrays since it had trouble pulling from the specific
// answer arrays I gave this question. I don't currently have it set up to run through six times, because when
// I added a new alert or prompt inside the else, it runs into an infinite loops. This is the only set-up I have
// found where it disregards the placement in the array. I intend to learn how to tally after I get this section
// up and working right.
// */
// var faveAnimal = ['dogs', 'bears', 'beeps', 'boops', 'fish', 'piggo'];
// var faveAnimalAnswer = prompt('What is one of my favorite animals?');
// for( i = 0; i <= faveAnimal.length; i++){
//   if (faveAnimal[i] === faveAnimalAnswer){
//     console.log('answer: ' + faveAnimalAnswer + '. This answer is right');
//     alert('Yes I like those');
//     break;
//   }else{
//   //I have a log for invalid answers]
//     console.log(faveAnimalAnswer);
//   }
// }


