var api_key = 'AIzaSyBvS-jc6nyGazk1uKhItix2MmiT-HKWqQ0'
URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${youtubeSearch}&type=video&key=${api_key}`
const youtubeurl = fetch(URL)
// this is the same as .then(function(response){response.json()})
.then((response) => response.json())
.then((data) => {
    console.log(data.items[0].id.videoId);
    
    // Populate iframe - THIS IS WRONG PROBABLY
    static_youtube_url = "https://www.youtube.com/embed/"
    url = data.items[0].id.videoId
    fullurl = static_youtube_url+url

    $('#video_player').attr('src', fullurl)
})
.catch(err => { console.log(err);})


// $(document).ready(function()
// {
       
//     $('#searchBtn').click(function()
//     {
        
//         gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
 
        
        
//     });
  
// });

// function onYouTubeApiLoad() 
//         {
            
//             gapi.client.setApiKey('AIzaSyBtIgwisnZlgFJWWjVAgFG-Mcdm1xSQWSw');
//             searchYouTubeApi();
 
//         }
 
//         function searchYouTubeApi(PageToken)
//         {
//              var searchText= $('#searchtext').val();
             
//           $('#response').replaceWith("<div id=\"searching\"><b>Searching for "+searchText+"</b></div>");
 
            
//             var request = gapi.client.youtube.search.list(
//             {
//             part: 'snippet',
//             q:searchText,
//             maxResults:2,
//             pageToken:PageToken
//             });
            
           
//             request.execute(onSearchResponse);
           
//         }

//         function onSearchResponse(response) 
//         {
         
//             var responseString = JSON.stringify(response, '', 2);
//             var resultCount = response.pageInfo.totalResults;
//                 nextPageToken=response.nextPageToken;
//                 prevPageToken=response.prevPageToken;
              
//             $('#count').replaceWith("<div id=count><b>Found "+resultCount+" Results.</b></div>");
          
           
             
//             // for (var i=0; i<response.items.length;i++)
//             {
//                 //store each JSON value in a variable
//                 var publishedAt=response.items[i].snippet.publishedAt;
//                 var channelId=response.items[i].snippet.channelId;
//                 var title=response.items[i].snippet.title;
//                 var description=response.items[i].snippet.description;
//                 var thumbnails_default=response.items[i].snippet.thumbnails.default.url;
//                 var thumbnails_medium=response.items[i].snippet.thumbnails.medium.url;
//                 var thumbnails_high=response.items[i].snippet.thumbnails.high.url;
//                 var channelTitle=response.items[i].snippet.channelTitle;
//                 var liveBroadcastContent=response.items[i].snippet.liveBroadcastContent;
//                 var videoID=response.items[i].id.videoId;
                 
//                if(firstPage===true)
//                {
//                //print the stored variables in a div element
//                 $('#snipp').append("<div id=T><b>Title:</b> "+title+"</div><div id=C><b>Channel ID: </b>"+channelId+"</div><div id=D><b>Description </b>"+description+"</div><div id=P><b>Published on: </b>"+publishedAt+"</div><div id=CT><b>Channel Title: </b>"+channelTitle+"</div><a id=linktoVid href='http://www.youtube.com/watch?v="+videoID+"'><img id=imgTD src=\""+thumbnails_default+"\"/></a><br/><br/><a id=linktoVid1 href='http://www.youtube.com/watch?v="+videoID+"'><video id=vidTD width=\"320\" height=\"240\" controls poster="+thumbnails_default+"><source src='http://www.youtube.com/watch?v="+videoID+">Your browser does not support the video tag.</video></a><br/><br/>");
                
//                 }
//                 else
//                 {
//                   $('#T').replaceWith("<div id=T><b>Title:</b> "+title+"</div>");
//                   $('#C').replaceWith("<div id=C><b>Channel ID: </b>"+channelId+"</div>");
//                   $('#D').replaceWith("<div id=D><b>Description </b>"+description+"</div>");
//                   $('#P').replaceWith("<div id=P><b>Published on: </b>"+publishedAt+"</div>");
//                   $('#CT').replaceWith("<div id=CT><b>Channel Title: </b>"+channelTitle+"</div>");
//                   $('#linktoVid').replaceWith("<a id=linktoVid href='http://www.youtube.com/watch v="+videoID+"'><img id=imgTD src=\""+thumbnails_default+"\"/></a><br/><br/><a id=linktoVid1 href='http://www.youtube.com/watch?v="+videoID+"'><video id=vidTD width=\"320\" height=\"240\" controls poster="+thumbnails_default+"><source src='http://www.youtube.com/watch?v="+videoID+">Your browser does not support the video tag.</video></a><br/><br/>");
//                 }
 
            
 
//             }
            
//              firstPage=false;
//         }