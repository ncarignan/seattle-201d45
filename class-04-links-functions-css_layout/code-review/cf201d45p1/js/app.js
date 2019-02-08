'use strict';

// //About Me Questions

// //Global Functions

function lwr(x){
  if(typeof x === String){
    console.log(typeof x);
    return x.toLowerCase();
  } else return x;
}

//Q1
var username = prompt('Whats your name stranger?');
alert('Hello ' + username + '. Welcome to my about me page. Im Chad!');
console.log('User ' + username + ' has interacted with the about me page.');

// //Q2
// var pet = prompt('Okay ' + username + '.. Are you a dog person or cat person?');
// if(lwr(pet) === 'dog' || lwr(pet) === 'dog person'){
//   alert('Yo dawg me too');
// } else if(lwr(pet) === 'cat' || lwr(pet) === 'cat person'){
//   alert('Thats cool but I like dogs more');
// } else {
//   alert('Cool Cool Cool ' + lwr(pet) + 's are a way to go');
// }
// console.log(username + ' is a ' + ' kind of person.');

// //Q3
// var game = prompt('Truth or Dare?');
// if(lwr(game) === 'truth'){
//   alert('Pull up my code. Ill wait... Now truthfully rip it apart please');
// } else if(lwr(game) === 'dare'){
//   alert('I dare you to give me an A');
// } else {
//   alert('***Google Chrome Alert Warning***/br Malware has been detected on your device./br Please Give Chad an A to continue!');
// }
// console.log(username + ' chose ' + game);

// //Q4
// var pref = prompt('So ' + username + ' would you say your an introvert or extrovert?');
// if(lwr(pref) === 'introvert'){
//   alert('Ahh so your an ' + pref + ' I am more introverted as well');
// } else if(lwr(pref) === 'extroverted'){
//   alert;
// } else if(lwr(pref) === 'both' || lwr(pref) === 'mixed' || lwr(pref) === 'bit of both'){
//   alert('Im mostly the same as you.');
// } else{
//   alert('Your to complex for me, I cant even understand your answer');
// }
// console.log(username + ' chose ' + pref + ' between introverted and extroverted');

// //Q5
// var temp2 = prompt('Do you prefer hot places or cold places to live?');
// if(lwr(temp2) === 'hot' || lwr(temp2) === 'hot places'){
//   alert('Oh boy I cannot take the heat');
// } else if(lwr(temp2) === 'cold' || lwr(temp2) === 'cold places'){
//   alert('Im the same, much more at home in the cold');
// } else if(lwr(temp2) === 'both'){
//   alert('Ahh yes the best of both worlds. Nice!');
// } else{
//   alert('Does not compute');
// }
// console.log(username + ' prefers ' + temp2 + 'climates.');

// //Q6
// var prgrm = prompt('Do you like programming?');
// if(lwr(prgrm) === 'yes' || lwr(prgrm) === 'ya' || lwr(prgrm) === 'yah' || lwr(prgrm) === 'yup'){
//   alert('Same! Lets code something :)');
// } else if(lwr(prgrm) === 'nay' || lwr(prgrm) === 'no' || lwr(prgrm) === 'nah' || lwr(prgrm) === 'nope'){
//   alert('What are you doing here then? :(');
// } else{
//   alert('Cool cool Cool');
// }
// console.log(username + ' when asked whether or not they liked programming said this: ' +prgrm);

// //Q7

//Possible Guesses
var states = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachussetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota','ohio','oklahoma','oregon','pennsylvania','rhode island','south carolina','south dakota','tennessee','texas','utah','vermont','virginia','washington','west virginia','wisconsin','wyoming'];
//Correct Guesses
var correctStates = ['washington','oregon','montana','idaho','california','colorado','wyoming','utah'];
//Guess Storage for Question
var correct = 0;

for(var i = 0; i < 6; i++){
  var guess = prompt('Lets play a game. Guess which states I have visited. You are currently on guess #' + (i + 1));
  //Correct Guess
  var need_to_continue = false;
  for(var j = 0; j < correctStates.length; j++){
    if(lwr(guess) === correctStates[j]){
      alert('Good guess! ' + guess + ' is correct!');
      console.log(username + 's attempt #' + i + 'was correct!');
      correct = correct + 1;
      need_to_continue = true;
      break; // leaves the for loop altogether
    }
  }
  if(need_to_continue) continue; //cancels the rest of the code, but stays in for loop

  // Spell Check After this Point
  var spellCheck = []; //Will contain spelling accuracy
  var mostAccurate = 0;
  var spellCheck2 = [];
  //Break Up Array by Elements
  for(var f = 0; f < states.length; f++){
    var temp = states[f];
    var correctLetters = 0;
    //Break up elements by Letter
    for(var g = 0; g < states[f].length; g++){
      var char1 = temp.charAt(g);
      var char2 = guess.charAt(g);
      if(char1 === char2){
        correctLetters++;
      } else {
        need_to_continue = true;
        break;
      }
    }
    if(need_to_continue) continue;
    //Push Correct # of letters to new array. Will be stored in order so number of correct letters are relative in array position to state names.
    spellCheck.push(correctLetters);
  }
  //Check which element of the spellcheck array has the highest integer value. Updates mostAccurate with the highest integer value.
  for(var g = 0; g < spellCheck.length; g++){
    if(spellCheck[g] > mostAccurate){
      mostAccurate = spellCheck[g];
    }
  }

  //Build an Array with all results with the same accuracy.

  for(var h = 0; h < spellCheck.length;h++){
    if(spellCheck[h] === mostAccurate){
      spellCheck2.push(states[h]);
    } else {
      continue;
    }
  }
  //Display Spellcheck Results with an Alert

  var userFix = prompt('Please reenter your choice using a number. The options are in numerical order starting at 0. Choices:' + spellCheck2.join());
  var finalAnswer = spellCheck2[userFix];

  //Cross Reference New Result With Correct Answers

  for(var u = 0; u < correctStates.length; u++){
    if(lwr(finalAnswer) === correctStates[u]){
      alert('Good guess! ' + finalAnswer + ' is correct!');
      console.log(username + 's attempt #' + (i + 1) + 'was correct!');
      correct = correct + 1;
      continue;
    } else {
      alert('Wrong! Come on use your brain. You have ' + (6-(i + 1)) + ' attempts left.');
      console.log(username + ' got answer #' + i + 'wrong');
      continue;
    }
  }

}



