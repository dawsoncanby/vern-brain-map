var canvas;

var generateCanvas = function() {
  var art = $('#beautiful-art')[0];
  canvas = $('<canvas>')[0];
  canvas.width = art.width;
  canvas.height = art.height;
  canvas.getContext('2d').drawImage(art, 0, 0, art.width, art.height);
}
