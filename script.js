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
static_youtube_url = "https://www.youtube.com/embed/"
url = ""
// url = object.items[0].id.VideoId
$('#video_player').attr('src', static_youtube_url + url)

// Populate lyrics
$("#lyrics_box").text("FILL IN OBJECT HERE")