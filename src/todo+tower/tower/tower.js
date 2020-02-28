// FYI, this is built with jQuery
'use strict';

var blue = ($('[data-row]').hasClass('blue') === $('[data-color]').hasClass('blue')); 
var green = ($('[data-row]').hasClass('green') === $('[data-color]').hasClass('green'));
var red = ($('[data-row]').hasClass('red') === $('[data-color]').hasClass('red'));
var yellow = ($('[data-row]').hasClass('yellow') === $('[data-color]').hasClass('yellow')); 

$(document).ready(function() {
  let $block = null;
  
  $('[data-row]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } if (blue = true){
      $block = $(this).children().last().detach();
    } if (green = true) {
      $block = $(this).children().last().detach();
    } if (red = true) {
      $block = $(this).children().last().detach();
    } if (yellow = true) {
      $block = $(this).children().last().detach();
    } else {
      $block = null;
    }
  })
});

// $(document).ready(function() {
// var dataRow = $('div');
// var dataColor = $('div');

// if (dataRow.length == dataColor.length && dataRow.length == dataRow.filter(dataColor).length) {         

// }
// });