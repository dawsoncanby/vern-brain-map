let ColorMap = {
  colors: {
    'trauma': { buttonColor: 'red', audioPath: 'wav/boise beer.wav'},
    'school': { buttonColor: '#3399ff', audioPath: 'wav/triangle.wav'},
    'blocked/forgotten': { buttonColor: '#f2f2f2', audioPath: 'wav/long boi.wav'},
    'people': { buttonColor: '#ffff00', audioPath: 'wav/happy art.wav'},
    'positive/lessons': {buttonColor: 'green', audioPath: 'wav/since the summer noah.wav'},
    'gray matter': { buttonColor: '#999999', audioPath: 'wav/triangle.wav'}
  },

  // set to the color button's div when  user chooses a color from the list
  selectedColorElem: undefined,

  // create the list of color buttons
  createColorList: function() {
    for (let i in ColorMap.colors) {
      console.log(ColorMap.colors[i]);
      let elem = $('<div class="color-button"></div>');
      elem.append('<div class="color-box" style="background-color:' + ColorMap.colors[i].buttonColor + '">');
      elem.append('<span>' + i + '</span>');
      $(elem).click(function() {
        ColorMap.selectColor(i, elem);
      });
      $('#color-buttons-div').append(elem);
    }
  },

  selectColor: function(key, elem) {
    // change color list style
    if (ColorMap.selectedColorElem) ColorMap.selectedColorElem.css('background-color', 'white');
    elem.css('background-color', 'lightgray');
    ColorMap.selectedColorElem = elem;
    // play audio for that color
    Player.load(ColorMap.colors[key].audioPath);
  }
};
