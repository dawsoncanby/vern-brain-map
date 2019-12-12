let ColorMap = {
  colors: {
    'trauma': { buttonColor: 'rgb(89, 21, 18)', audioPath: 'wav/boise beer.wav', paintingColors: [[89, 21, 18]]},
    'school': { buttonColor: 'rgb(1, 77, 125)', audioPath: 'wav/triangle.wav', paintingColors: [[1, 77, 125]]},
    'blocked-forgotten': { buttonColor: 'rgb(247, 243, 232)', audioPath: 'wav/long boi.wav', paintingColors: [[247, 243, 232]]},
    'people': { buttonColor: 'rgb(227, 170, 7)', audioPath: 'wav/happy art.wav', paintingColors: [[227, 170, 7], [215, 76, 42]]},
    'positive-lessons': {buttonColor: 'rgb(0, 57, 51)', audioPath: 'wav/since the summer noah.wav', paintingColors: [[0, 57, 51]]},
    'grey-matter': { buttonColor: 'rgb(50, 54, 54)', audioPath: 'wav/triangle.wav', paintingColors: [[50, 54, 54]]}
  },

  // set to the color button's div when  user chooses a color from the list
  selectedColorElem: undefined,

  // create the list of color buttons
  createColorList: function() {
    for (let i in ColorMap.colors) {
      let elem = $('<div id="' + i + '-button" class="color-button"></div>');
      elem.append('<div class="color-box" style="background-color:' + ColorMap.colors[i].buttonColor + '">');
      elem.append('<span>' + i + '</span>');
      elem.append('<span class="loading-indicator">loading...</span>');
      $(elem).click(function() {
        ColorMap.selectColor(i);
      });
      $('#color-buttons-div').append(elem);
    }
  },

  // called when the user clicks a color
  selectColor: function(key) {
    // change color list style
    var elem = $('#' + key + '-button');
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
  },

  // get the category at a mouse location
  getCategory: function(e) {
    var clickColor = canvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
    var min = 1000;
    var minIdx = -1;
    for (i in ColorMap.colors) {
      var colors = ColorMap.colors[i].paintingColors;
      colors.forEach((e) => {
        var dist = ColorMap.colorDist(e, clickColor)
        if (dist < min){
          min = dist;
          minIdx = i;
        }
      });
    }
    return minIdx;
  },

  // get "distance" between two colors
  colorDist: function(colArr1, colArr2) {
    var dists = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      dists[i] = Math.pow(colArr1[i] - colArr2[i], 2);
    }
    return Math.sqrt(dists.reduce((a,b) => a + b, 0));
  }
};
