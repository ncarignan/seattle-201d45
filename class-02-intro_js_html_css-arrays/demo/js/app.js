'use strict';

/*
ask for username, fact, and movie
give a response that lets the user know whats going on
I want a name
i want to see if they match my quirky fact
if they say im cool, say something nice
or else ...


*/
var username, quirkyfact, amICool;

username = prompt('what is your name');

console.log(typeof(username));

if(username === ''){
  username = prompt('I really want to know your name');
}

if(username === ''){
  username = 'noname person';
}

alert('hello ' + username);

quirkyfact = prompt('tell me a quirky fact about yourself');

if(quirkyfact === 'dnd'){
  alert('that is my favorite thing too');
} else {
  alert('oh, ' + quirkyfact + ' sounds really cool, tell me more');
}





