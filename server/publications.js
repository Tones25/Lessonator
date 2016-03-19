Meteor.publish('videos', () => Videos.find({}));
//publish  the currently rendered video only to client db
Meteor.publish('currentVideo', function(videoId) {
  check(videoId, String);
  return Videos.find({_id: videoId});
});

Meteor.publish('vidComments', function (id){
  check(id, String);
  return Comments.find({video: id}, {sort:{dateTime: -1}});
});

Meteor.publish('search', function(userSearch) {
  // If `searchValue` is not provided, we publish all known Videos. If it is
// provided, we publish only Videos that match the given search value.
  if (!userSearch) {
    userSearch = '';
    check(userSearch, String);
  	console.log('searching', userSearch);
    return Videos.find({ytId: ''});
  }
  check(userSearch, String);
  console.log('searching for ', userSearch);
  return  Videos.find(
    { $text: {$search: userSearch} },
    {
      // `fields` is where we can add MongoDB projections. Here we're causing
      // each document published to include a property named `score`, which
      // contains the document's search rank, a numerical value, with more
      // relevant documents having a higher score.
      fields: {
        score: { $meta: 'textScore' }
      },
      // This indicates that we wish the publication to be sorted by the
      // `score` property specified in the projection fields above.
      sort: {
        score: { $meta: 'textScore' }
      }
    }
  );
});
Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'ratedVids': 1}});
  } else {
    this.ready();
  }
});

