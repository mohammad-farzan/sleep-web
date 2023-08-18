async function fetchMusicData() {
  try {
    const response = await fetch("./musicData.json");
    const jsonResp = await response.json();

    return jsonResp.musicFiles;
  } catch (error) {
    console.log(error);
  }
}

async function MusicPlayer() {
  await fetchMusicData();

  const songs = await fetchMusicData();

  const audio = new Audio();

  const SongTitle = window.document.querySelector("#song-title");
  const playToggle = window.document.querySelector("#play");
  const perv = window.document.querySelector("#prev");
  const next = window.document.querySelector("#next");
  const timeLine = document.querySelector("#timeLine");

  let isplaying = false;
  let songIndex = 0;

  loadSong(songs[songIndex]);

  playToggle.addEventListener("click", playcurrentSong);
  next.addEventListener("click", nextSong);
  perv.addEventListener("click", prevSong);

  function loadSong(song) {
    SongTitle.innerText = song.slice(0,-4);
    audio.src = `./musics/${song}`;
    // let cover = audio.getAttribute('src');
    
    // var image = document.createElement('img');
    // image.src = cover;
    // image.style.width = "512px"
    // image.style.height = "512px"
    // document.body.appendChild(image);
  }

  function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    audio.play();
    isplaying = true;
    playToggle.firstChild.classList.replace("fa-play-circle", "fa-stop-circle");
  }

  function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }

    loadSong(songs[songIndex]);

    audio.play();
    isplaying = true;
    playToggle.firstChild.classList.replace("fa-play-circle", "fa-stop-circle");
  }

  function playcurrentSong() {
    if (isplaying) {
      audio.pause();
      isplaying = false;
      playToggle.firstChild.classList.replace(
        "fa-stop-circle",
        "fa-play-circle"
      );
    } else {
      audio.play();
      isplaying = true;
      playToggle.firstChild.classList.replace(
        "fa-play-circle",
        "fa-stop-circle"
      );
    }
  }

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    timeLine.value = progress;
  });

  timeLine.addEventListener("input", function () {
    const currentTime = audio.duration * (timeLine.value / 100);
    audio.currentTime = currentTime;
  });

  audio.addEventListener("ended", nextSong);
}

MusicPlayer()


//////// OWL CARUSEL ////////

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 3,
              nav: false
          },
          1000: {
              items: 5,
              nav: true,
              loop: false
          }
      }
  });
});
