
// Populate iframe
static_youtube_url = "https://www.youtube.com/embed/"
url = ""
// url = object.items[0].id.VideoId
// $('#video_player').attr('src', static_youtube_url + url)

// get lyrics from local storage
var searchLyrics = JSON.parse(localStorage.getItem("projectLyrics"))

// Populate lyrics
$("#lyrics_box").text(searchLyrics)
