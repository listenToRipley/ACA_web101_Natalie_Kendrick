$(function() {

  var $list, $newItemForm, $done, $remove;
  $list = $('ul');
  $newItemForm = $('#newItemForm');
  $done = $('#done');
  $remove = $('#remove')

  // var includeButtons = ($newItemForm
  // (
  //   if ($newItemForm === true) {
  //   append.$newItemForm('input:checkbox' + $newItemForm + 'type:button')
  // }))


  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var text = $('input:text').val();
    $list.append('<li>' + text + '</li>');
    $('input:text').val('') 
  }
  );

  $list.on('click', $remove, function() {
    var $this = $('li');
    $this.remove().on('click', function(){
    $remove.hid('#remove').hid('#done');
  })})

})