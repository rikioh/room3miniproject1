
// Populate iframe
// static_youtube_url = "https://www.youtube.com/embed/"
// url = ""
// url = object.items[0].id.VideoId
// $('#video_player').attr('src', static_youtube_url + url)

// get lyrics from local storage
var searchLyrics = JSON.parse(localStorage.getItem("projectLyrics"))

// Populate lyrics

var searchLyricsSplit = searchLyrics.split("\n");
console.log(searchLyricsSplit);
for (i=0;i<searchLyricsSplit.length;i++){
    var lyricsRowDiv = $("<div>")
    var lyricsRowP = $("<p>")
    lyricsRowDiv.addClass("row")
    lyricsRowDiv.attr("id","lyricsRowDiv")
    lyricsRowP.attr("id","lyricsRowP")
    $("#lyrics_box").append(lyricsRowDiv)
    $("#lyricsRowDiv").append(lyricsRowP)
    $("#lyricsRowP").text(searchLyricsSplit[i])
    lyricsRowDiv.removeAttr("id")
    lyricsRowP.removeAttr("id")
}


console.log(searchLyricsSplit[0]);