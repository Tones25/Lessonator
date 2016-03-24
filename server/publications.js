Meteor.publish('videosByRating', function(limit) {
  check(limit, Number);
  return Videos.find({},
    {
      sort: {rating: -1},
      limit: limit,
    });
});

Meteor.publish('videosByNewest', function(limit) {
  check(limit, Number);
  return Videos.find({},
    {
      sort: {submitted: -1},
      limit: limit,
    });
  });

Meteor.publish('videosBySuggested', function(query, limit) {
  check(query, String);
  check(limit, Number);

  var sub = this;
  var suggestedCursor =   Videos.find(
    { $text: {$search: query} },
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
      },
      limit: limit
    }
  );
  Mongo.Collection._publishCursor(suggestedCursor, sub, 'videosBySuggested');
  sub.ready();
});



//publish  the currently rendered video only to client db
Meteor.publish('currentVideo', function(videoId) {
  check(videoId, String);
  return Videos.find({_id: videoId});
});


Meteor.publish('vidComments', function (id){
  check(id, String);
  return Comments.find({video: id}, {sort:{dateTime: -1}});
});

Meteor.publish('search', function(userSearch, limit) {
  // If `searchValue` is not provided, we publish all known Videos. If it is
// provided, we publish only Videos that match the given search value.
  if (!userSearch) {
    userSearch = '';
    check(userSearch, String);
    check(limit, Number);
  	console.log('searching', arguments);
    return Videos.find({_id: ''});
  }
  check(userSearch, String);
  check(limit, Number);
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
      },
      limit: limit,
    }
  );
});

Meteor.publish('flaged', function(limit) {
  check(limit, Number);
  return Videos.find({flaged: true}, {limit: limit});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'ratedVids': 1, 'tagStoreForVideoSuggestion': 1}});
  } else {
    this.ready();
  }
});

