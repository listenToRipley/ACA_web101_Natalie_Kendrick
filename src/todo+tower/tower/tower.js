// FYI, this is built with jQuery
'use strict';
$(document).ready(function() {

  let $main = document.getElementById('#mainContainer')

  // items

  let dataColor = document.getElementsByClassName('dataColor');
  let dataRow = document.getElementsByClassName('dataRow');

  // squares

  let bluSq = document.getElementById('blue');
  let greSq = document.getElementById('green');
  let redSq = document.getElementById('red');
  let yelSq = document.getElementById('yellow');

  // row

  let bluRow = document.getElementById('drBlu');
  let greRow = document.getElementById('drGre');
  let redRow = document.getElementById('drRed');
  let yelRow = document.getElementById('drYel');
  let rowHolder = document.getElementById('drHol')

  // moving the squares 

  let $block = null;

  ($('.dataRow').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else { 
      $block = $(this).children().last().detach();}
     } ));

  function tower(row, square) {
      if (bluRow === bluSq) {
      after().detach().alert('blue is true! great job!');
    } else if (greRow === greSq)  {
      addEventListener.on(move).after().alert('It\'s easy to be green sometimes! These match')
    } else if (redRow === redSq)  {
      addEventListener.on(move).after().alert('Red Rum! These match')
    } 
      else if (yelRow === yelSq) {
        addEventListener.on(move).after().alert('Most definately mellow! These match')
      }

    // tower(bluRow,bluSq);
    // tower(greRow,greSq);
    // tower(redRow,redSq);
    // tower(yelRow,yelSq); 
  }
});


