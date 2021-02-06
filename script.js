// Empty variables for user input from search forms
var artistName = ""
var songTitle = ""
// global variables set getting the element they represent by Jquery ID
var lyricsEl = $("#lyrics_box")
var searchBtn = $("#searchBtn")
// url for lyrics API
var lyricsUrl = "https://api.lyrics.ovh/v1/"

// pulls the two old search terms and adds them into a single string able to be parsed into the youtube.JS script
var youtubeSearch = `${JSON.parse(localStorage.getItem("songSplit"))}+${JSON.parse(localStorage.getItem("artistSplit"))}`

if(!youtubeSearch){
    console.log("no previous search");
}
else{
    youtubeSearch = `${JSON.parse(localStorage.getItem("songSplit"))}+${JSON.parse(localStorage.getItem("artistSplit"))}`
    console.log(youtubeSearch);
}

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    // set the blank artistName and songTitle global variables as the values from the 2 search bars respectively
    artistName = $("#artistName").val()
    songTitle = $("#songTitle").val()
    // run an alert if a field isn't filled out
    if (!artistName || !songTitle) {
        // not sure if we need this
        console.error("You need to put both the song title and artist name");
        alert("You need to put both the song title and artist name")
        return;
    }
    function searchApi(artistName, songTitle) {
        var localUrl = `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`
        console.log(localUrl);
        fetch(localUrl).then(function (response) {
            if (!response.ok) {
                throw response.json();
            }

            return response.json();
        })
            .then(function (locRes) {
                if(locRes.lyrics===""){
                    alert("This song does not exist in our databases. Check your song and artist spelling.")
                }
                else{
                // sets lyrics from the api response as a local storage variable to be called/pulled on the results page load
                localStorage.setItem("projectLyrics",JSON.stringify(locRes.lyrics))
                var songSplit = songTitle.split(" ")
                var songJoin = songSplit.join("+")
                localStorage.setItem("songSplit",JSON.stringify(songJoin))
                var artistSplit = artistName.split(" ")
                var artistJoin = artistSplit.join("+")
                localStorage.setItem("artistSplit",JSON.stringify(artistJoin))
                console.log(JSON.stringify(locRes.lyrics))
                // loads the display video.lyrics page
                window.location.href = "./display_video.html"
                }
            })
    }
    // run the fetch call passing in artist name and song title as variables
    searchApi(artistName, songTitle);


})



