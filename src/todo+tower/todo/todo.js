$(function() {

  var $list, $newItemForm, $done, $remove;
  $list = $('ul');
  $newItemForm = $('#newItemForm');
  $done = $('#done');
  $remove = $('.remove')

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val(); //this in how you put in your text

    // $('li').className = 'strike'

    console.log(text);

    var li = document.createElement('li'); // this is how you add your content 

    var button = document.createElement('button');
    button.className = 'remove';  // this is your remove button being made

    var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = 'done'
      checkbox.id = 'done'
       
      checkbox.addEventListener('change', function() {
        if(this.checked) {
          li.innerHTML.className = 'strike'
        }
      })
      
      console.log('where is my checkbox', checkbox); // this creates my check box

    li.append(text); //calling your new text here


    button.textContent= 'X';
    $(button).on('click', function() {
      console.log('this is a button', button)
      $(li).remove()
    } )  // removing your new li's from list 


    li.append(checkbox);
    console.log(checkbox)

    li.append(button);
    console.log(button);

    $list.append(li);
    $('input:text').val(''); 

  }
  );

})