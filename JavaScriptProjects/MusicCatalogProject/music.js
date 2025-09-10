const songTitle = document.getElementById('title');
const songArtist = document.getElementById('artist');
const songAlbum = document.getElementById('album');
const songYear = document.getElementById('year');

const addedSongs = [];



function Song(title, artist, album, year){
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.year = year;
    this.getInfo = function () {
    const tr = document.createElement('tr');

    const index = addedSongs.findIndex(song =>
    song.title === this.title &&
    song.artist === this.artist &&
    song.album === this.album &&
    song.year === this.year
    );

    
    const songIndex = document.createElement('td');
    songIndex.textContent = index + 1;
    tr.appendChild(songIndex);

    const titleTd = document.createElement('td');
    titleTd.textContent = this.title;
    tr.appendChild(titleTd);

    const artistTd = document.createElement('td');
    artistTd.textContent = this.artist;
    tr.appendChild(artistTd);

    const albumTd = document.createElement('td');
    albumTd.textContent = this.album;
    tr.appendChild(albumTd);

    const yearTd = document.createElement('td');
    yearTd.textContent = this.year;
    tr.appendChild(yearTd);

    const tableBody = document.getElementById('displaySong');
    tableBody.appendChild(tr);

    
    tr.addEventListener("click", () => {
    
    if (confirm("Delete this song from your catalog?")) {
      tr.remove();

      const index = addedSongs.findIndex(song =>
        song.title === this.title &&
        song.artist === this.artist &&
        song.album === this.album &&
        song.year === this.year
      );

      if (index !== -1) {
        addedSongs.splice(index, 1);
        localStorage.setItem("songs", JSON.stringify(addedSongs));
      }
    }
  });
  };
}


function normalize(str) {
  return str.trim().toLowerCase();
}


function addMusic(event) {

    event.preventDefault();

  const title = songTitle.value.trim();
  const artist = songArtist.value.trim();
  const album = songAlbum.value.trim();
  const year = songYear.value.trim();


  const duplicate = addedSongs.some(song =>
    normalize(song.title) === normalize(title) &&
    normalize(song.artist) === normalize(artist) &&
    normalize(song.album) === normalize(album) &&
    normalize(song.year) === normalize(year)
  );

  if (duplicate) {
    alert("This song already exists!");
    return;
  }

  const form = event.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }


  const newSong = new Song(title, artist, album, year);
  addedSongs.push(newSong);
  newSong.getInfo();
  localStorage.setItem("songs", JSON.stringify(addedSongs));

  form.reset();
}

const form = document.getElementById('songForm');
form.addEventListener('submit', addMusic);

window.addEventListener("DOMContentLoaded", () => {
  const storedSongs = JSON.parse(localStorage.getItem("songs")) || [];
  storedSongs.forEach(songData => {
    const song = new Song(songData.title, songData.artist, songData.album, songData.year);
    addedSongs.push(song);
    song.getInfo();
    });
});