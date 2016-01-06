var app = {};
app.menu = function () {
  $('#menu-bar').click(function (event) {
    event.preventDefault();
    if ($(this).hasClass('fa-bars')) {
      $(this).removeClass('fa-bars')
        .addClass('fa-times');
      $('#menu-ul').removeClass('collapse');
    } else {
      $(this).removeClass('fa-times')
        .addClass('fa-bars');
      $('#menu-ul').addClass('collapse');
    }
  });
  $('.bg').click(function () {
    if ($('#menu-bar').hasClass('fa-times')){
      $('#menu-bar').removeClass('fa-times')
        .addClass('fa-bars');
      $('#menu-ul').addClass('collapse');
    }
  });
};
$(function () {
  app.menu();
});
