
// Populate iframe
// static_youtube_url = "https://www.youtube.com/embed/"
// url = ""
// url = object.items[0].id.VideoId
// $('#video_player').attr('src', static_youtube_url + url)

// get lyrics from local storage and parse them into a new variable on results page load
var searchLyrics = JSON.parse(localStorage.getItem("projectLyrics"))
// split the lyrics into distinct lines by \n (new line) characters
var searchLyricsSplit = searchLyrics.split("\n");

// Populate lyrics using a for loop
for (i=0;i<searchLyricsSplit.length;i++){
    // create a div and p variable for later population
    var lyricsRowDiv = $("<div>")
    var lyricsRowP = $("<p>")
    // make the div a new row
    lyricsRowDiv.addClass("row")
    // add ids to use to append items and populate lyrics with to be removed later
    lyricsRowDiv.attr("id","lyricsRowDiv")
    lyricsRowP.attr("id","lyricsRowP")
    $("#lyrics_box").append(lyricsRowDiv)
    $("#lyricsRowDiv").append(lyricsRowP)
    $("#lyricsRowP").text(searchLyricsSplit[i])
    // remove ids previously added so the for loop can continue to work or the first row and p will continue to be populated
    lyricsRowDiv.removeAttr("id")
    lyricsRowP.removeAttr("id")
}
