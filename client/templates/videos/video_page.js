function onVideoPageLoaded() {
	Player.create(Template.player, {});
}

Template.videoPage.rendered = function() {
	this.subscribe('vidComments',(Session.get('ytId')));
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
	video: function() {
		return Videos.findOne();
	},
	isRated: function() {
		let userRatedVids = Meteor.user().ratedVids;
		let currentVid = Session.get('ytId');
		if(userRatedVids.indexOf(currentVid) === -1) {
			return false;
		} else {
			return true;
		}
	},
	numComments: function(){
		return Comments.find().count();
	},
	Comments: function(){
		if(Session.get('commentSort') === 'topRated') {
			return Comments.find({},{sort:{rating: -1}}).fetch();
		} else {
			return Comments.find({},{sort:{dateTime: -1}}).fetch();
	}
	}
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
					throwError('Something went wrong submitting your rating');
					return;
				}
			});

		Meteor.users.update(
			{_id: Meteor.userId()},
			{$set: {'ratedVids': userRatedVids}},
			function(error) {
			if(error) {
				console.log(error);
			}
		});
	},

	'click #commentSubmit': function(e){
		let comment = $('#commentText').val();
		let dt = new Date();
		// just to check that we are getting server time not client
		console.log({
			commentText: comment,
			dateTime: dt+" -- CLIENT",
			userId: Meteor.userId(),
			video: Session.get('ytId')
		});
		Comments.insert({
			commentText: comment,
			dateTime: dt,
			rating: 0,
			ratedBy: [],
			userId: Meteor.userId(),
			username: Meteor.user().username,
			video: Session.get('ytId')
		});
	},
	'change #commentSort': function(e) {
		let newVal = $(e.target).val();
		Session.set('commentSort', newVal);
		console.log(newVal);
	}
});
