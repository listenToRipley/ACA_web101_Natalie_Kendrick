$(document).ready(function() {

  
 // this should set the counter to zero
  var count = 0 

  // this creates your count and amends it no the page 
  // after making this a var then the click function worked

  var counting = $('.addCount').on('click',(function(spin) {
    count++;
    $('#count').html("You've spun round: " + count + " times");
  }
  )
  );

  // makes the counter go back to 0

$('.reset').on('click', function() {
  count = 0
  $('#count').html("Start spinning: " + count);
})
 })