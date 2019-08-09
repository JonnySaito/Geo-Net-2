console.log('js is loading, matey potatey');
$(document).ready(function(){
  // console.log('ready');
  // Ajax function to retrieve news stories from geonet

  $('#newsButton').on('click', function() {
    $.ajax({
      url: 'https://api.geonet.org.nz/news/geonet',
      type: 'GET',
      dataType: 'json',
      success: function(dataFromJSON){
        console.log(dataFromJSON);
        $('#geonetNewsBox').empty();
        for (var i = 0; i < dataFromJSON.feed.length; i++) {
          // console.log(dataFromJSON.feed[i]);
          // console.log(dataFromJSON.feed[i].title);
          // console.log(dataFromJSON.feed[i].link);
          let showStory = `<div><h3>${dataFromJSON.feed[i].title}</h3><a href="${dataFromJSON.feed[i].link}">Read more</a><hr></div>`;
          // ${#geonetNewsBox}
          $('#geonetNewsBox').append(showStory);

        }

        // function showNews() = {
        //   (`#geonetNewsBox`).html.append(`${dataFromJSON}`)
        // };
      },
      error: function(){
        console.log('something has gone wrong');
      }
    })
  });


  // $.ajax({
  //   url: 'https://api.geonet.org.nz/news/geonet',
  //   type: 'GET',
  //   dataType: 'json',
  //   success: function(dataFromJSON){
  //     console.log(dataFromJSON);
  //     $('#geonetNewsBox').empty();
  //     for (var i = 0; i < dataFromJSON.feed.length; i++) {
  //       // console.log(dataFromJSON.feed[i]);
  //       // console.log(dataFromJSON.feed[i].title);
  //       // console.log(dataFromJSON.feed[i].link);
  //       let showStory = `<div><h3>${dataFromJSON.feed[i].title}</h3><a href="${dataFromJSON.feed[i].link}">Read more</a><hr></div>`;
  //       // ${#geonetNewsBox}
  //       $('#geonetNewsBox').append(showStory);
  //
  //     }
  //
  //     // function showNews() = {
  //     //   (`#geonetNewsBox`).html.append(`${dataFromJSON}`)
  //     // };
  //   },
  //   error: function(){
  //     console.log('something has gone wrong');
  //   }
  // })


});
