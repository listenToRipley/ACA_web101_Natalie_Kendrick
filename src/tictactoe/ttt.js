$(document).ready(function() {
  var x = "x"
  var o = "o"
  var turns = 0;

  // locations 

  var l0 = $('#location0');
  var l1 = $('#location1'); 
  var l2 = $('#location2');  
  var l3 = $('#location3');  
  var l4 = $('#location4');  
  var l5 = $('#location5');  
  var l6 = $('#location6');  
  var l7 = $('#location7');  
  var l8 = $('#location8');  

  var oWins = ($('#board li').on('click', function() {
    if (
    l0.hasClass('o') && l1.hasClass('o') && l2.hasClass('o') ||
    l3.hasClass('o') && l4.hasClass('o') && l5.hasClass('o') ||
    l6.hasClass('o') && l7.hasClass('o') && l8.hasClass('o') ||
    l0.hasClass('o') && l4.hasClass('o') && l8.hasClass('o') ||
    l2.hasClass('o') && l4.hasClass('o') && l6.hasClass('o') ||
    l0.hasClass('o') && l3.hasClass('o') && l6.hasClass('o') ||
    l1.hasClass('o') && l4.hasClass('o') && l7.hasClass('o') ||
    l2.hasClass('o') && l5.hasClass('o') && l8.hasClass('o')
    ) 
      { alert('Winner is O!');
      $('#board li').text(':)');
      $('#board li').removeClass('disable');
      $('#board li').removeClass('o');
      $('#board li').removeClass('x');} 
    }
      )
        ); 

  var xWins = ($('#board li').on('click', function() {
      if (
      l0.hasClass('x') && l1.hasClass('x') && l2.hasClass('x') ||
      l3.hasClass('x') && l4.hasClass('x') && l5.hasClass('x') ||
      l6.hasClass('x') && l7.hasClass('x') && l8.hasClass('x') ||
      l0.hasClass('x') && l4.hasClass('x') && l8.hasClass('x') ||
      l2.hasClass('x') && l4.hasClass('x') && l6.hasClass('x') ||
      l0.hasClass('x') && l3.hasClass('x') && l6.hasClass('x') ||
      l1.hasClass('x') && l4.hasClass('x') && l7.hasClass('x') ||
      l2.hasClass('x') && l5.hasClass('x') && l8.hasClass('x')
      ) 
        { alert('Winner is X!');
        $('#board li').text(':)');
        $('#board li').removeClass('disable');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');} 
      }
      
          ));

  var tie = ($('#board li').on('click', function() {
        if(turns === 9) 
        { alert('It\'s a tie!');
          $('#board li').text(':)');
          $('#board li').removeClass('disable');
          $('#board li').removeClass('o');
          $('#board li').removeClass('x');
          turns = 0;} 
      }
        )
          );

   var alternate = ($('#board li').on('click', function() {
      if(turns%2 === 0) 
        {turns++;
        $(this).text(o);
        $(this).addClass('disable o');
        $('#board li').on('click', function() {
          if (oWins === true) 
          {
            alert('Winner is O!');
            turns = 0; } 
          } //inside function closer
            ) //click closer
             } //related to the turn++ closer
        else 
          {
          turns++;
          $(this).text(x);
          $(this).addClass('disable x');
          $('#board li').on('click', function() {
            if (xWins === true) {
              alert('Winner is X!');
              turns = 0 } } ) }
             } // alternative function closer 
              ) // click closer
                ) // alternative var closer

        // compare and state if else statements 
        $('#board li').on('click', function() {
          if (oWins === true) {
            alert('Winner is O!');
            $('#board li').text(':)');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');} 
            else if (xWins === true) {
              { alert('Winner is X!');
              $('#board li').text(':)');
              $('#board li').removeClass('disable');
              $('#board li').removeClass('o');
              $('#board li').removeClass('x');} 
            } else {
              return tie
            }
        });  

        $('#board li').click(function(event) {
            $.event.preventDefault
            if($(this).hasClass('disabled')) 
        { alert('This spot is taken, find another one')} 
          }
        );

        // reset
        $('#reset').on('click', function() {
          $('#board li').text(':)');
          $('#board li').removeClass('disable');
          $('#board li').removeClass('o');
          $('#board li').removeClass('x');
        });
  })