let Player = {
  audioObj: new Audio(),
  isPlaying: false,

  // load and play audio
  load: function(path, onPlayCallback) {
    // setup audio object and add listeners
    if (Player.isPlaying) Player.pauseAudio();
    Player.audioObj.src = path;
    Player.playAudio(onPlayCallback);
  },

  playAudio: (onPlayCallback) => {
    Player.audioObj.play().
    then(() => {
      if (onPlayCallback) onPlayCallback();
      Player.isPlaying = true;
    });
  },

  pauseAudio: () => {
    if (Player.isPlaying) {
      Player.audioObj.pause();
      Player.isPlaying = false;
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
