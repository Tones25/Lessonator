var youtubeApi = _.once(function() {
  Meteor.startup(function() {
    $.getScript('https://www.youtube.com/iframe_api');
  });
});

Player = {
	create: function(videoTemplate, playerVars) {

      /* 3. This function creates an <iframe> (and YouTube player) */
      /*    after the API code downloads. */
      window.onYouTubeIframeAPIReady = function() {
        window.player = new YT.Player('player', {
          height: '507',
          width: '832',
          videoId: Session.get('ytId'),
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
          }
        });
        videoTemplate.rendered = onYouTubeIframeAPIReady;
      };
      youtubeApi();

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function onPlayerStateChange(event){
        if(event.data === 0) {
          Meteor.call('updateSuggestedTags', Meteor.user(),
            Session.get('ytId'), function(error, result) {
            if(error) {
              console.log(error);
            }
          })
        }
      }
}
};

