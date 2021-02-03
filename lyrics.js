var artistName = $("#artistName")
var songTitle = $("#songTitle")
var lyricsUrl = "https://private-anon-5f89c8f692-lyricsovh.apiary-mock.com/v1/"

function searchApi(artistName, songTitle) {
    var localUrl = 'https://private-anon-5f89c8f692-lyricsovh.apiary-mock.com/v1/' + artistName + '/' + songTitle
    fetch(localUrl).then(function (response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();
    })
    .then(function (locRes) {
        console.log(locRes.search.query);
    })
}