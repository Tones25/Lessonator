
Template.slide1.helpers({
	videosSet1: function() {
	    Meteor.subscribe('videos');

	      return Videos.find({},
	      	{
	      		sort: [['score', 'desc']],
	      		limit: 3
	      	});
	 },
});

Template.slide2.helpers({
	videosSet2: function() {
	    Meteor.subscribe('videos');

	      return Videos.find({},
	      {
	      	sort: [['score', 'desc']],
	      	skip: 3,
	      	limit: 3,
	      });
	 },
});

Template.slide3.helpers({
	videosSet3: function() {
	    Meteor.subscribe('videos');

	      return Videos.find({},
	      {
	      	sort: [['score', 'desc']],
	      	skip: 6,
	      	limit: 3,
	      });
	 },
});

