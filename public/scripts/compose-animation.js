$().ready(function() {

  $('.compose').click(function() {
    $('.compose-tweet').slideToggle('slow');
    $('textarea').trigger('select');
  });

})
