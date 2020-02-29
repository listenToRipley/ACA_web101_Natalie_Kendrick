// FYI, this is built with jQuery
'use strict';
$(document).ready(function() {
  var blue = ($('.dataRow').hasClass('blue') && $('.dataColor').hasClass('blue')); 

  var green = ($('.dataRow').hasClass('green') && $('.dataColor').hasClass('green'));

  var red = ($('.dataRow').hasClass('red') && $('.dataColor').hasClass('red'));

  var yellow = ($('.dataRow').hasClass('yellow') && $('.dataColor').hasClass('yellow')); 

  let $block = null;
  
  var move = ($('.dataRow').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else { 
      $block = $(this).children().last().detach();}
     } ));
    // if false what should happened

  if (blue === true){
    return move || null;
  } else if (green === true) {
    $block = $(this).children().last().detach();
  } else if (red === true) {
    $block = $(this).children().last().detach();
  } else if (yellow === true) {
    $block = $(this).children().last().detach();
  } 

    else if (blue !== true){
    $block = $(this).detach('click', function (event) {
      $('#blue').error(function()
      {
       alert('this is row is not blue, try again')
     })
    });
  } else if (green !== true) {
    $block = $(this).children().last().detach();
  } else if (red !== true) {
    $block = $(this).children().last().detach();
  } else if (yellow !== true) {
    $block = $(this).children().last().detach();
  }
    else {
      $block = null;
    }
  }); 

// $(document).ready(function() {
// var dataRow = $('div');
// var dataColor = $('div');

// if (dataRow.length == dataColor.length && dataRow.length == dataRow.filter(dataColor).length) {         

// }
// });