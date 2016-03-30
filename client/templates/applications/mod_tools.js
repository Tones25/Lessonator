Template.modTools.helpers({
	title: function() {
		let video = Videos.findOne({});
		return video.title;
	},
	tags: function() {
		let video = Videos.findOne({});
		return video.tags;
	}
});

Template.modTools.events({
	'submit form': function(e) {
		e.preventDefault();

		let video = Videos.findOne({});
		let newTitle = $('#title').val();
		let newTags = $('#tags').val();
		let isDelete = ($('#delete').is(':checked')) ? true : false;
		//console.log(newTitle + ' ' + newTags + ' ' + isDelete);
		//this method is in server/methods
		$('#modModal').modal('hide');
		Meteor.call('modEdit', video._id, newTitle, newTags, isDelete, function(error, result) {
			if(error) {
				throwError(error.reason);
			} else {
				if(!isDelete) {
					throwError('Changes saved');
				} else {

					throwError('Video deleted');
					Router.go('modPage');
				}
			}
		});
	}
});
