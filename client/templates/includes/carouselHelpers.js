
Template.topRatedSlide1.helpers({
	topRatedVideoSet1: function() {
	    Meteor.subscribe('videosByRating');

	      return Videos.find({},
	      	{
	      		sort: {rating: -1},
	      		limit: 3
	      	});
	 },

});

Template.topRatedSlide2.helpers({
	topRatedVideoSet2: function() {
	    Meteor.subscribe('videosByRating');

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
	    Meteor.subscribe('videosByRating');

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
	 	Meteor.subscribe('videosByNewest');

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			limit: 3,
	 		});
	 },
	});


Template.newestSlide2.helpers({
	 newestVideoSet2: function() {
	 	Meteor.subscribe('videosByNewest');

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
	 	Meteor.subscribe('videosByNewest');

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			skip: 6,
	 			limit: 3,
	 		});
	 },
	});

Template.suggestedSlide1.helpers({
	 suggestedVideoSet1: function() {
	 	Meteor.subscribe('videosBySuggested');

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			limit: 3,
	 		});
	 },
	});


Template.suggestedSlide2.helpers({
	 suggestedVideoSet2: function() {
	 	Meteor.subscribe('videosBySuggested');

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			skip: 3,
	 			limit: 3,
	 		});
	 },
});


Template.suggestedSlide3.helpers({
	 	 suggestedVideoSet3: function() {
	 	Meteor.subscribe('videosBySuggested');

	 		return Videos.find({},
	 		{
	 			sort: {submitted: -1},
	 			skip: 6,
	 			limit: 3,
	 		});
	 },
	});
