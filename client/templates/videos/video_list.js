Template.videoList.helpers({
	videos: function() {
	    Meteor.subscribe('search', Session.get('userSearch'));
	    if (Session.get('userSearch')) {
	      return Videos.find({}, { sort: [['score', 'desc']] });
	    } else {
	      return Videos.find({});
	    }
  }
});
