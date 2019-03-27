'use strict';
import 'nodelist-foreach-polyfill';
require('formdata-polyfill');
require('es6-promise').polyfill();
require('array-includes');
require("@babel/polyfill");


let tabs = require("./parts/tabs.js"),
    timer = require("./parts/timer.js"),
    scroll = require("./parts/scroll.js"),
    modal = require("./parts/modal.js"),
    form = require("./parts/form.js"),
    slider = require("./parts/slider.js"),
    calculator = require("./parts/calculator.js");
tabs();
timer();
scroll();
modal();
form();
slider();
calculator();

//window.addEventListener('DOMContentLoaded', () => {
    
//});



if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
