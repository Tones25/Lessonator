// If `searchValue` is not provided, we publish all known Videos. If it is
// provided, we publish only Videos that match the given search value.
Meteor.publish('videos', () => Videos.find({}));
Meteor.publish('search', function(userSearch) {
	check(userSearch, String);
  if (!userSearch) {
  	console.log('searching');
    return Videos.find({});
  }
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
