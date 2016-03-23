Meteor.methods({
	modEdit: function(videoId, title, tags, isDelete) {
		check(videoId, String);
		check(title, String);
		check(tags, String);
		check(isDelete, Boolean);

		let video = Videos.findOne({_id: videoId});

		if(isDelete) {
			Videos.remove({_id: videoId});
		} else {
			Videos.update(
				{_id: videoId},
				{$set: {
					title: title,
					tags: tags,
					flaged: false,
					flagType: {
						notLesson: 0,
						badTitle: 0,
						badTags: 0,
					}
				}
			});
		}
	}
});
