 
Template.topRatedSlide1.helpers({
	topRatedVideoSet1: function() {
		Meteor.subscribe('videosByRating', 9);

	      return Videos.find({},
	      	{
	      		sort: {rating: -1},
	      		limit: 3
	      	});
	 },

});

Template.topRatedSlide2.helpers({
	topRatedVideoSet2: function() {

	      return Videos.find({},
	      {
	      	sort: {rating: -1},
	      	skip: 3,
	      	limit: 3,
	      });
	 },

});

Template.topRatedSlide3.helpers({
	topRatedVideoSet3: function() {

	      return Videos.find({},
	      {
	      	sort: {rating: -1},
	      	skip: 6,
	      	limit: 3,
	      });
	 },

});


Template.newestSlide1.helpers({
	 newestVideoSet1: function() {
	 	Meteor.subscribe('videosByNewest', 9);
	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			limit: 3,
	 		});
	 },
	});


Template.newestSlide2.helpers({
	 newestVideoSet2: function() {

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			skip: 3,
	 			limit: 3,
	 		});
	 },
});


Template.newestSlide3.helpers({
	 	 newestVideoSet3: function() {

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			skip: 6,
	 			limit: 3,
	 		});
	 },
	});

//creates query based off a random sample of the users top 10 most viewed tags
function cookUpSuggestedQuery(user) {
	let userTags = user.tagStoreForVideoSuggestion;
  	let suggestedTags = [];
	  if (userTags.length > 10) {
	    let tempArray = userTags.slice(userTags.length - 10, userTags.length);
	    suggestedTags = _.sample(tempArray, 5);
	  } else if (userTags.length >3 && userTags.length < 10) {
	    suggestedTags = _.sample(userTags, 5);
	  } else {
	    suggestedTags = userTags;
	  }
	  let suggestedTagNames = _.pluck(suggestedTags, 'name');
	  let suggestedSearch =  suggestedTagNames.join(' ');
	  return suggestedSearch;
}

Template.suggestedSlide1.helpers({
	 suggestedVideoSet1: function() {
	 	 var query = cookUpSuggestedQuery(Meteor.user());
	 	Meteor.subscribe('videosBySuggested', query, 9);

	 		return ClientCollection.find({},
	 		{
	 			
	 			limit: 3,
	 		});
	 },
	});


Template.suggestedSlide2.helpers({
	 suggestedVideoSet2: function() {

	 		return ClientCollection.find({},
	 		{
	 			
	 			skip: 3,
	 			limit: 3,
	 		});
	 },
});


Template.suggestedSlide3.helpers({
	 	 suggestedVideoSet3: function() {

	 		return ClientCollection.find({},
	 		{
	 			
	 			skip: 6,
	 			limit: 3,
	 		});
	 },
	});


