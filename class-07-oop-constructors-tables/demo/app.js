'use strict';

var Jared = {
  name : 'Jerod',
  locality: 'Seattle',
  favorite_eats: 'Daniels Broiler',
  favorite_meal: 'NY steak',
  gpa: 'really good',
  classes: ['Calculus 7', 'Band', 'Football Art'],
};

Jared.say_hi = function(){
  console.log(`hello my name is ${this.name}, I am from ${this.locality} and I like eating ${this.favorite_meal} at ${this.favorite_eats}`);
};

Jared.render = function(){
  var target = document.getElementById('student-container');
  var li_el = document.createElement('li');
  li_el.textContent = `hello my name is ${this.name}, I am from ${this.locality} and I like eating ${this.favorite_meal} at ${this.favorite_eats}`;
  target.appendChild(li_el);
};

var Student = function(name, locality, favorite_eats, favorite_food, favorite_number){
  this.name = name;
  this.locality = locality;
  this.favorite_restaraunt = favorite_eats;
  this.favorite_food = favorite_food;
  this.bigger_number = favorite_number + 1000;
  this.say_hi = function(){console.log('hi');};
};


Student.prototype.render = function () {
  var target = document.getElementById('student-container');

  var tr_el = document.createElement('tr');

  var td_el = document.createElement('td');
  td_el.textContent = this.name;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.locality;
  tr_el.appendChild(td_el);

  target.appendChild(tr_el);

};


//instantiating objects;
var juliann = new Student('Juliann', 'Tahoe', 'Lulu\'s', 'Salad', 2);
var merry = new Student('Merry', 'Urbana, IL', 'Hard question', 'Sushi', 7);

var all_Students = [juliann, merry];

juliann.render();
