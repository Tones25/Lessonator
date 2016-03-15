Template.videoItem.events({
	'click #link': function(e) {
		e.preventDefault();

		console.log(Object.keys(this));
		if (ClientVideo.find(this).fetch().length === 0) {
			ClientVideo.insert(this);
		}

		Router.go('videoPage', {_id: this._id});
	}
});
