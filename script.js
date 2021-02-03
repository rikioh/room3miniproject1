// Empty variables for user input
var song_title = ""
var artist_name = ""
var youtube_api_key = "AIzaSyBtIgwisnZlgFJWWjVAgFG-Mcdm1xSQWSw"

// Button to pull song title
$("#songTitle").on("click", function() {
    song_title = $("#search-input").value
})

// Button to pull song artist
$("#artistName").on("click", function() {
    song_title = $("#search-input").value
})

// Populate iframe
static_youtube_settings = ""
url = ""
$('#video_player').attr('src', url)

// Populate lyrics
$("#lyrics_box").text("FILL IN OBJECT HERE")