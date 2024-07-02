var tracks = [
    "JErik_Sati_Anne_Quefflec_-_Trois_Gymnopdies_1_Lent_et_douloureux_48314626.mp3",
    "Jozef De Schutter — Across Borders.mp3",
    "Justus Rümenapp — Rümenapp_ Childhood.mp3"
  ];
var track_number = 0;


function controlWindow() {
    var modal = document.querySelector(".music-control-field");
    var state = modal.style.display;
    if(state == "block"){
        modal.style.display = "none";
    }
    else{
        modal.style.display = "block";
    }
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function loadTrack(trackIndex) {
    audio.src = "../music/" + tracks[trackIndex];
    audio.load();
}

function nextTrack() {
    if (track_number < tracks.length - 1) {
        track_number++;
    } 
    else {
        track_number = 0;
    }
    loadTrack(track_number);
    playAudio();
}

function prevTrack() {
    if (track_number > 0) {
        track_number--;
    } 
    else {
        track_number = tracks.length - 1;
    }
    loadTrack(track_number);
    playAudio();
}


var audio = document.getElementById("audio-player");
loadTrack(track_number);