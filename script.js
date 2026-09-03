const playButton = document.getElementById("playButton");
const vinyl = document.querySelector(".vinyl");

playButton.addEventListener("click", function() {
    vinyl.classList.toggle("playing");
});
