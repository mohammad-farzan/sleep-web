async function fetchMusicData() {
  try {
    const response = await fetch("./musicData.json");
    const jsonResp = await response.json();

    return jsonResp.musicFiles;
  } catch (error) {
    console.log(error);
  }
}

let isplaying = false;

async function MusicPlayer() {
  await fetchMusicData();

  const songs = await fetchMusicData();
  const audio = new Audio();

  const SongTitle = window.document.querySelector("#song-title");
  const playToggle = window.document.querySelector("#play");
  const perv = window.document.querySelector("#prev");
  const next = window.document.querySelector("#next");
  const timeLine = document.querySelector("#timeLine");
  const image = document.createElement('img');
  const curr_time = document.querySelector("#current-time")
  const fullTime = document.querySelector("#full-time")
  const songCounter = document.querySelector("#song-counter")
  const coverContainer = document.querySelector("#cover-container")

  let songIndex = 0;

  loadSong(songs[songIndex]);

  playToggle.addEventListener("click", playcurrentSong);
  next.addEventListener("click", nextSong);
  perv.addEventListener("click", prevSong);

  async function loadSong(song) {
    SongTitle.innerText = song.slice(0, -4);
    audio.src = `./musics/${song}`;

    songCounter.textContent = `${songIndex + 1}/${songs.length}`

    try {
      pause()
      let picResponse = await fetch(`music_pics/${song.slice(0, -4)}.jpg`)
      if (picResponse.ok == false || picResponse.status == 404) {
        image.src = `music_pics/default.jpg`
        throw new Error('no pics found!');
      } else {
        image.src = `music_pics/${song.slice(0, -4)}.jpg`
      }

    } catch (error) {
      console.log(error);
    }
    coverContainer.appendChild(image);
  }

  function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    audio.play();
    resume()
    coverContainer.style.setProperty('--boxAfterBackColor', '1');
    isplaying = true;
    playToggle.firstElementChild.classList.replace("fa-circle-play", "fa-circle-pause");
  }



  function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }

    loadSong(songs[songIndex]);

    audio.play();
    resume()
    coverContainer.style.setProperty('--boxAfterBackColor', '1');
    isplaying = true;
    playToggle.firstElementChild.classList.replace("fa-circle-play", "fa-circle-pause");

  }

  function playcurrentSong() {
    if (isplaying) {
      audio.pause();
      isplaying = false;
      playToggle.firstElementChild.classList.replace(
        "fa-circle-pause",
        "fa-circle-play"
      );
      pause()
      coverContainer.style.setProperty('--boxAfterBackColor', '0');
    } else {
      audio.play();
      isplaying = true;
      playToggle.firstElementChild.classList.replace(
        "fa-circle-play",
        "fa-circle-pause"
      );
      resume()
      coverContainer.style.setProperty('--boxAfterBackColor', '1');
    }
  }

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 10000;
    timeLine.value = progress;

    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);

    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
  });

  audio.addEventListener("loadeddata", function () {
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }

    fullTime.textContent = durationMinutes + ":" + durationSeconds;
  })

  timeLine.addEventListener("input", function () {
    const currentTime = audio.duration * (timeLine.value / 10000);
    audio.currentTime = currentTime;
  });

  audio.addEventListener("ended", nextSong);
}

MusicPlayer()

////////  PARTICLE.JS ////////
window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#ffffff"],
  connectParticles: false,
  speed: .5,
  maxParticles: 220,
  responsive: [
    {
      breakpoint:1200,
      options: {
        maxParticles:200,
      }
    }, {
      breakpoint:1000,
      options: {
        maxParticles:150,
      }
    }, {
      breakpoint:800,
      options: {
        maxParticles:100,
      }
    }, {
      breakpoint:600,
      options: {
        maxParticles:80,
      }
    }, {
      breakpoint:400,
      options: {
        maxParticles:50,
      }
    }
  ]
});

function pause() {
  particles.options.connectParticles = false
}
window.addEventListener("load", pause)

function resume() {
  particles.resumeAnimation();
  particles.options.connectParticles = true
}
