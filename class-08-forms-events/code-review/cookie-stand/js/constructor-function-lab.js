'use strict';
//for some reason the css and the stuff from app.js didn't push into my third branch. working here for now.
//This is still super messy. Had some troubles with git while I was working on this, this why it's here instead
//of in a sensible branch.

var Salmon_cookies = function (store_name, location, min_cust, max_cust, store_open, store_close, cookie_order_size, avg_cookies_per_cust){
    this.store_name = store_name;
    this.store_type = 'Salmon Cookies';
    this.location = location;
    this.min_cust = min_cust;
    this.max_cust = max_cust;
    this.open_hour = store_open;
    this.close_hour =store_close;
    this.cookie_order_size = cookie_order_size;
    this.cookies_sold_each_hour = [];
    this.avg_cookies_per_cust = avg_cookies_per_cust || 6.3;
};


Salmon_cookies.prototype.cookies_per_hour = function () {
    var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
    return Math.floor(this.avg_cookies_per_cust * random_customers);
};

//this uses elements from pike_store.cookies_per_hour function. The for loop tells the program how many hours
//it needs to calculate for before terminating. cookies_sold takes in the number that cookies_per_hour generated
Salmon_cookies.prototype.calculate_cookies_sold_each_hour = function () {
    for (var i = 6; i < 20; i++) {
        var cookies_sold = this.cookies_per_hour();
        //takes the number generated above in cookies_sold and adds it to the cookies_sold_each_hour array in the object
        this.cookies_sold_each_hour.push(cookies_sold);
    }
};

var render_one_stores_table = function () {
    this.calculate_cookies_sold_each_hour();

    var target = document.getElementById('store-table');

    var store_row = document.createElement('tr');

    var name_td = document.createElement('td');
    name_td.textContent = this.store_name;
    store_row.appendChild(name_td);

    for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
        var cookie_hour_td = document.createElement('td');
        cookie_hour_td.textContent = this.cookies_sold_each_hour[i];
        store_row.appendChild(cookie_hour_td);
    }



    target.appendChild(store_row);
}

Salmon_cookies.prototype.render_as_a_table_row = render_one_stores_table;

// Salmon_cookies.prototype.render = function (){
//     this.calculate_cookies_sold_each_hour();

//     var target = document.getElementById('store-table');
//     var tr_el = document.createElement('tr');
//     var td_el = document.createElement('td');

//     td_el.textContent = this.store_name;
//     tr_el.appendChild(td_el);

//     /*
//     If I add another  tr_el = document.createElement('tr'); here, it hides the this.store_name element. Why?
//     I would like to be able to add more space between the td elements. I still need to figure out how to add hours
//     and how to use the total cookies functions I created earlier to give me the total number of cookies, though
//     I have some idea, involviong the variables listed inside the constructor function*/
//     td_el = document.createElement('td');
//     td_el.textContent = this.location;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this. min_cust;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this. max_cust;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this.open_hour;
//     tr_el.appendChild(td_el);

//     td_el = document.createElement('td');
//     td_el.textContent = this.close_hour;
//     tr_el.appendChild(td_el);

//     for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
//         td_el = document.createElement('td');
//         td_el.textContent = this.cookies_sold_each_hour[i];
//         tr_el.appendChild(td_el);
//     }



//     target.appendChild(tr_el);
// }

//instantiating area
var pike_store = new Salmon_cookies('Salmon Cookies - Pike Place', 'Pike Place Market', 23, 65, '6AM', '8PM', 6.3);
var seatac_store = new Salmon_cookies('Salmon Cookies - Seatac Airport', 'Seatac Airport', 3, 24, '6AM', '8PM', 1.2);
var seattle_center_store = new Salmon_cookies('Salmon Cookies - Seattle Center', 'Seattle, Center', 11, 38, '6 AM', '8AM', 3.7);
var cap_hill_store = new Salmon_cookies('Salmon Cookies - Capitol Hill', 'Capitol Hill', 20, 38, '6AM', '8AM', 2.3);
var alki_store = new Salmon_cookies('Salmon Cookies - Alki', 'Alki Beach', 2, 16, '6AM', '8PM', 4.6);


var all_stores = [pike_store, seatac_store, seattle_center_store, cap_hill_store, alki_store];

for(var i = 0; i < all_stores.length; i++){
    all_stores[i].render_as_a_table_row();
}
//make em go
// pike_store.render();
// seatac_store.render();
// seattle_center_store.render();
// cap_hill_store.render();
// alki_store.render();


// render_all_stores_table();