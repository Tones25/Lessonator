Template.videoList.helpers({
	videos: function() {
	    Meteor.subscribe('search', Session.get('userSearch'));
	    if (Session.get('userSearch')) {
	    	console.log('1');
	      return Videos.find({}, { sort: [['score', 'desc']] });
	    } else {
	    	console.log('2');
	      return Videos.find({});
	    }
  }
});
