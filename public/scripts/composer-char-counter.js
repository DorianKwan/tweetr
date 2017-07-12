$(document).ready(function() {
  $('textarea').on('keyup', function (e) {
    var charCount = $('textarea').val().length;
    var counter = $(this).siblings('.counter');
    counter.text(140 - charCount);
    charCount > 140 ? counter.css('color', 'red') : counter.css('color', 'black');
  });
});
