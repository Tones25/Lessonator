function onVideoPageLoaded() {
	Player.create(Template.player, {});
}

Template.videoPage.rendered = function() {
	onVideoPageLoaded();
};

//each time videoPage is rendered currentVideo subscription is renewed.
//this keeps only the current video in client Video collection while
//on this page
Template.videoPage.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var ytId = Session.get('ytId');
		self.subscribe('currentVideo', ytId);
	});
});

Template.videoPage.helpers({
	isRated: function() {
		let userRatedVids = Meteor.user().ratedVids;
		let currentVid = Session.get('ytId');
		if(userRatedVids.indexOf(currentVid) === -1) {
			return false;
		} else {
			return true;
		}
	},

});

Template.videoPage.events({
	'click #rating': function(e) {
		let userRating = $('#rating').data('userrating');
		let currentVidId = Session.get('ytId');
		let userRatedVids = Meteor.user().ratedVids;
		userRatedVids.push(currentVidId);
		//method is in /lib/collctions
		Meteor.call('videoRatingUpdate', currentVidId, userRating,
			function(error, result) {
				if(error) {
					console.log(error);
					return;
				}
			});
		/*let currentVid = ClientVideo.findOne({_id: currentVidId});
		let newRating;
		//if first rating, use userrating(avoid division by 0)
		if(currentVid.numOfRatings !== 0) {
			newRating = (currentVid.rating + userRating) / currentVid.numOfRatings;
			console.log('y');
		} else {
			newRating = userRating;
			console.log('n');
		}*/

		//console.log(newRating);
		Meteor.users.update(
			{_id: Meteor.userId()},
			{$set: {'ratedVids': userRatedVids}},
			function(error) {
			if(error) {
				console.log(error);
			}
		});
	}
});
