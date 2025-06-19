// Audio Player with Click Transitions
const audioPlayer = (() => {
  const audio = new Audio();
  let isPlaying = false;
  const songs = [
    "/mp3/Deva Shree Ganesha Agneepath 128 Kbps.mp3",
    "/mp3/abcd-Sadda Dil VI Tu (Ga Ga Ga Ganpati).mp3"
  ];
  let currentSongIndex = 0;

  function init() {
    audio.src = songs[currentSongIndex];
    const playBtn = document.querySelector('.play_btn');

    playBtn.addEventListener('click', function () {
      // Add click transition class
      this.classList.add('click-transition');

      // Remove transition class after animation completes
      setTimeout(() => {
        this.classList.remove('click-transition');
      }, 300);

      togglePlay();
    });

    audio.addEventListener('ended', playNextSong);
  }

  function togglePlay() {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }

  function playSong() {
    audio.play()
      .then(() => {
        isPlaying = true;
        updatePlayButton();
        document.querySelector('.img_box').classList.add('playing');

        // Add ripple effect
        createRippleEffect();
      })
      .catch(error => {
        console.error("Playback failed:", error);
      });
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    updatePlayButton();
    document.querySelector('.img_box').classList.remove('playing');
  }

  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    playSong();
  }

  function updatePlayButton() {
    const icon = document.querySelector('.play_btn i');
    if (icon) {
      // Smooth icon transition
      icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
      icon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';

      // Bounce effect
      icon.style.transform = 'scale(1.2)';
      setTimeout(() => {
        icon.style.transform = 'scale(1)';
      }, 300);
    }
  }

  function createRippleEffect() {
    const playBtn = document.querySelector('.play_btn');
    const ripple = document.createElement('span');
    ripple.classList.add('ripple-effect');
    playBtn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', audioPlayer.init);











// responsive layouts
const menu = document.getElementById('menuBar');
const close = document.getElementById('close');
const sidebar = document.getElementById('sidebar');
menu.addEventListener('click', function () {
  sidebar.style.display = 'flex';
});

close.addEventListener('click', function () {
  sidebar.style.display = 'none';
});




