Template.videoItem.events({
	'click #thumbnailLink': function(e) {
		e.preventDefault();
		Router.go('videoPage', {_id: this._id});
	}
});
