'use strict';

var clicks = 0;

document.addEventListener('click', function(some_cool_click){
  if(some_cool_click.target.tagName === 'H2'){
    clicks ++;
    console.log(clicks);
  }
  // console.log(some_cool_click);
});

var handle_mouse_over = function ( e ) {
  console.log(e.target);
};

// document.addEventListener('mouseover', handle_mouse_over);

var hover_h2 = document.getElementById('hover-h2');
hover_h2.addEventListener('mouseover', handle_mouse_over);

var input = document.getElementById('input-to-change');

input.addEventListener('change', function(form_event){
  console.log(form_event.target.value);
});

var button = document.getElementById('button-clicker');

var handle_button_press = function(event){
  alert('I can\'t believe you\'ve done this');
};

button.addEventListener('click', handle_button_press);


//event fires off and chrome tracks it as an object
// finds functions tied to it;
// gives the event to those functions as their first argument;


// =============================

var form = document.getElementById('student-form');

form.addEventListener('submit', function(formSubmit){
  formSubmit.preventDefault();
  console.log(formSubmit);
  console.log(formSubmit.target.studentName.value);
  var student_name = formSubmit.target.studentName.value;
  var color = formSubmit.target.favColor.value;
  var hobby = formSubmit.target.hobby.value;

  console.log({
    name : student_name,
    color: color,
    hobby: hobby
  });
});

/*
function Student () =>
{
name:,
hobby:,
color:,
}

Student.prototype.render = function () {
  put the student on the page ( in a table)
}
*/


new Student('nicholas', 'board games', 'orange');
