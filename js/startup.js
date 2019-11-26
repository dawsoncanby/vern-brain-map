$(document).ready(function() {
  let colorMap = {
    'trauma': { buttonColor: 'red'},
    'blue': { buttonColor: '#3399ff'},
    'blocked/forgotten': { buttonColor: '#f2f2f2'},
    'people': { buttonColor: '#ffff00'},
    'positive/lessons': {buttonColor: 'green'},
    'gray matter': { buttonColor: '#999999'}
  };

  for (let i in colorMap) {
    let elem = $('<div class="color-button"></div>');
    let colorBox = $('<div class="color-box" style="background-color:' + colorMap[i].buttonColor + '">');
    let text = $('<span>' + i + '</span>');
    elem.append(colorBox);
    elem.append(text);
    $(elem).click(function() {
      console.log(i);
    });
    $('#color-buttons-div').append(elem);
  }

});
