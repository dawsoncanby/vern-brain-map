let Player = {
  audioObj: new Audio(),
  isPlaying: false,

  // load and play audio
  load: function(path) {
    // setup audio object and add listeners
    if (Player.isPlaying) Player.pauseAudio();
    Player.audioObj.src = path;
    $('#currently-playing').html(path.slice(path.indexOf('/') + 1));
    Player.playAudio();
  },

  playAudio: () => {
    Player.audioObj.play().
    then(() => {
      Player.isPlaying = true;
      $('#play-button').html('pause');
    });
  },

  pauseAudio: () => {
    if (Player.isPlaying) {
      Player.audioObj.pause();
      Player.isPlaying = false;
      $('#play-button').html('play')
    }
  },

  toggleAudio: () => {
    if (Player.isPlaying) {
      Player.pauseAudio();
    }
    else {
      Player.playAudio();
    }
  }
}
