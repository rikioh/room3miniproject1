var artistName = ""
var songTitle = ""
var lyricsUrl = "https://api.lyrics.ovh/v1/"
var lyricsEl = $("#lyrics_box")
var searchBtn = $("#searchBtn")

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    artistName = $("#artistName").val()
    songTitle = $("#songTitle").val()
    console.log(artistName);
    console.log(songTitle);
    if (!artistName || !songTitle) {
        console.error("You need to put both the song title and artist name");
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
                console.log(locRes.lyrics);

                localStorage.setItem("projectLyrics",JSON.stringify(locRes.lyrics))
                window.location.href = "./display_video.html"
            })
    }

    searchApi(artistName, songTitle);


})



// searchApi();