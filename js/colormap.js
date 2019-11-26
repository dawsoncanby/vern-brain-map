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
      let elem = $('<div class="color-button"></div>');
      elem.append('<div class="color-box" style="background-color:' + ColorMap.colors[i].buttonColor + '">');
      elem.append('<span>' + i + '</span>');
      elem.append('<span class="loading-indicator">loading...</span>');
      $(elem).click(function() {
        ColorMap.selectColor(i, elem);
      });
      $('#color-buttons-div').append(elem);
    }
  },

  // called when the user clicks a color
  selectColor: function(key, elem) {
    // change color list style
    if (ColorMap.selectedColorElem) ColorMap.selectedColorElem.css('background-color', 'white');
    elem.css('background-color', 'lightgray');
    // hide all loading indicators (in case some are still there), show one we care about
    $('.loading-indicator').hide();
    elem.find('.loading-indicator').show();
    ColorMap.selectedColorElem = elem;
    // play audio for that color
    Player.load(ColorMap.colors[key].audioPath, ColorMap.onPlay);
  },

  // called when the Player has started to play an audio track
  onPlay: function() {
    ColorMap.selectedColorElem.find('.loading-indicator').fadeOut(200);
  }
};
