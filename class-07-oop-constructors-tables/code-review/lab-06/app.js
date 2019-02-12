'use strict';


// helper functions

var _random = function(min, max){
  return Math.random()*(max - min) + min;
};

// ============================

/*
List of Stores
  List of hours a store is open paired with total numbers

Store objects {

  min_cust
  max_cust
  avg_cookies_per_customer
  store_name
  store_open: 8
  store_close: 7

  cookies_sold_each_hour []

  calculate_cookies_per_hour (method)
  calculate_cookies_all_hours (method)
  render
}
*/

var Alki = {
  min_cust : 2,
  max_cust : 17,
  avg_cookies_per_customer: 4.6,
  store_name : 'Alki',
  store_open: 8,
  store_close : 19,
  cookies_sold_each_hour: []
};

Alki.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

Alki.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

Alki.render = function (){
  // li > h2(name), ul(store hours) > li (9am : 30 cookies);
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;

  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){

    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }


  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};

var CapHill = {
  min_cust: 7,
  max_cust: 11,
  avg_cookies_per_customer: 9.3,
  store_name: 'Cap Hill',
  store_open: 8,
  store_close: 19,
  cookies_sold_each_hour: []
};

CapHill.calculate_cookies_per_hour = function () {
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

CapHill.calculate_cookies_sold_each_hour = function () {
  for (var i = this.store_open; i < this.store_close; i++) {
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};


var renderStore = function () {
  // li > h2(name), ul(store hours) > li (9am : 30 cookies);
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;

  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {

    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);
  }


  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};


Alki.render = renderStore;
CapHill.render = renderStore;


// init
Alki.calculate_cookies_sold_each_hour();

Alki.render();

CapHill.calculate_cookies_sold_each_hour();
CapHill.render();
