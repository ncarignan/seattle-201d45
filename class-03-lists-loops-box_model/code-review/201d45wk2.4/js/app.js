'use strict';

var positive_answers = ['y', 'yes', 'ya','i do', 'ye', 'yee', 'yaa', 'why yes, i do', 'affirmative', 'mmhmm', 'yes, mx'];
var worst_answers = ['n', 'no', 'nope', 'I do not', 'nyop', 'yeet', 'As a matter of fact, I do not', 'negaitve', 'No, Mx'];

//Ask the User their name, store in console.
var affirmed_name = prompt('Hello! What is your name?', 'Your Name Here');
console.log('Asked for a name, result:'+name);

//Kicks off the nested if/else statement below.
var horror = prompt(affirmed_name+' Do you know if I like the Horror genre or not?', 'Yes or No');
console.log('Asked if user knew if I liked Horror or not, result:'+ horror);

//Here is my seccond question, and the begining of my if statement
var result = 'Spot on! I enjoy most forms of it immensly, but most of all I love reading horror novels and comic books.';
if(positive_answers.includes(horror.toLowerCase())){
  var book = prompt( result + affirmed_name + ' have we ever discussed books?', 'Yes or No');
  console.log('Asked if user and I had ever discussed books, result:'+book);

  //Nested in the 2nd qhesitons if statement, the full third.

  if(positive_answers.includes(book.toLowerCase())){
    var get_to_know = ('Wow,'+affirmed_name+' it sounds like we might know each other. Can you tell me a bit about yourself?');
    console.log('Asked if I could get to know user:'+ get_to_know);

  }else if(worst_answers.includes(book.toLowerCase())){
    var like_comic = prompt ('Do you like comics?', 'Yes or No');
    console.log('Asked if user likes comics or not, result:'+ like_comic);
  }else{
    alert('Hmmmm....I\'m not sure what your saying...');
  }

//If the user answered that they did not know if I liked horror, this runs.
}else if(worst_answers.includes(horror.toLowerCase())){
  var like_art = prompt('Well, I do. And let me tell you, Vampires are the best! I also like fictional spider based monsters (but not the real ones!), and stories that play on our existential fears. Do you think I like art?', 'Yes or No');
  console.log('Asked if the user thought I liked art, result: '+like_art);
}else{
  alert('That dosent seem like the kind of answer I asked for...');
}

//These next two questions are looking for strings
var art = prompt(' What is your favorite style of art?', 'Type it here!');
console.log('Asked for users favorite style of art, result:'+art);
alert('Well '+affirmed_name+' I quite enjoy '+art+' myself! Fancy that.');

var drink = prompt(affirmed_name+', what do you like to drink?');
console.log('Asked what user likes to drink, result:'+drink);
alert('I wonder if there are any '+art+' artists that use '+drink+' as a medium. Do you know of any, '+affirmed_name+'? Neither do I.');

// eslint-disable-next-line no-redeclare
var like_comic = prompt('Do you like comics?', 'Yes or No');
console.log('Asked if user likes comics or not, result:'+ like_comic);

if (positive_answers.includes(like_comic.toLowerCase())){
  var comic = prompt('Oh? Whats your favorite comic?');
  console.log('Asked user what their favorite comic was'+comic);
  var avil_date = prompt('Oh, Wow! '+comic+'? That is awesome! Woundn\'t it be cool if an issue was done in '+art+' style? Well, '+affirmed_name+' you seem really cool. We should get '+drink+'s some time! When works for you?');
  console.log('Asked user when they would be avaliable for drinks, returned:'+avil_date);

} else if(worst_answers.includes(like_comic.toLowerCase())){
  alert(like_comic+'? Not everyone does, thats why I asked. Well, '+affirmed_name+' you seem pretty cool, if you ever want to talk about '+art+' or learn about comics I would always be happy to grab a '+drink+'. When are you free?');
  console.log('Asked user when they would be avaliable for drinks, returned:'+avil_date);
} else {
  alert('Are you sure you really want to be talking to me?');
}
