$(document).ready(function() {
  ColorMap.createColorList();

  $('#beautiful-art').on('load', function() {
    generateCanvas();
  });

  $('<span id="tooltip"></span>').appendTo('body');

  $('#beautiful-art').mousemove(function(e) {
    var selected = ColorMap.getCategory(e);
    $('#tooltip').html(selected)
    .css('left', e.pageX + 5 + 'px')
    .css('top', e.pageY + 5 + 'px')
    .css('display', 'block');
  });

  $('#beautiful-art').mouseleave(function(e) {
      $('#tooltip').css('display', 'none');
  });

  $('#beautiful-art').click(function(e) {
    console.log(e);
    var selected = ColorMap.getCategory(e);
    console.log(selected);
    ColorMap.selectColor(selected);
  });

  $(window).resize(function() {
    generateCanvas();
  });
});
