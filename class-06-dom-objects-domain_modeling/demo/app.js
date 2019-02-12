/*
cat dogs
  cat name
  dog name
  cat color
  dog color
  ten-rating

*/


var molly_snowdrop = {
  cat_name : 'snowdrop',
  dog_name : 'molly',
  cat_color: 'white',
  dog_color: 'chocolate',
  ten_rating: 10,
  say_hello: function() {
    console.log('My name is ' + this.cat_name + ' ' + this.dog_name);
  }
};



var max_sadie = {
  cat_name: 'max',
  'dog_name' : 'sadie',
  cat_color: 'black',
  dog_color: 'brown',
  ten_rating: 10,
  say_hello: function () {
    console.log('My name is ' + this.cat_name + ' ' + this.dog_name);
  }
};


// max_sadie['say_hello']();
// molly_snowdrop.say_hello();

var render_cat_dog = function (){
  /*
  create an li
  create an article
  create an h2, p, and span
  put the text inside of the h2, p, and span
  add the h2, p and span into the article
  add the article to the li
  add the li to the ul
  */

  //creating elements
  var li_el = document.createElement('li');
  var article_el = document.createElement('article');
  var h2_el = document.createElement('h2');
  var p_el = document.createElement('p');
  var span_el = document.createElement('span');

  // giving them content;
  h2_el.textContent = this.cat_name + '-' + this.dog_name;
  p_el.textContent =`${this.dog_name} is ${this.dog_color}, ${this.cat_name} is ${this.cat_color}, they both love lasagna`;
  span_el.textContent = `${this.ten_rating}/10`;

  // combine everything back together
  article_el.appendChild(h2_el);
  article_el.appendChild(p_el);
  article_el.appendChild(span_el);

  li_el.appendChild(article_el);

  var target_element = document.getElementById('cat-dog-list');
  target_element.appendChild(li_el);

};



// adding methods to our objects
molly_snowdrop.render = render_cat_dog;
max_sadie.render = render_cat_dog;

molly_snowdrop.render();
max_sadie.render();
