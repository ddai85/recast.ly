var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    dataType: 'json',
    success: function(data) {
      console.log('success!', data);
      var dataArray = data.items;

      callback(dataArray);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('failure', jqXHR, textStatus, errorThrown);
    }
  });
};

window.searchYouTube = searchYouTube;


var getYouTubeComment = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: options,
    dataType: 'json',
    success: function(data) {
      console.log('success!');
      var dataArray = data.items[0];

      callback(dataArray);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('failure', jqXHR, textStatus, errorThrown);
    }
  });
};

window.getYouTubeComment = getYouTubeComment;
