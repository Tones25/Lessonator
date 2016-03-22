Videos = new Mongo.Collection('videos');

Videos.allow({
	update: function() {
		return true;
	},
	insert: function(){
		if(Meteor.userId()){
			return true;
		}
	}
});

Meteor.methods({
	videoRatingUpdate: function(id, userRating) {
		check(Meteor.userId(), String);
		check(userRating, Number);
		check(id, String);

		let video = Videos.findOne({_id: id});
		let newRating;
		//if unrated->use current input.
		//if rated->calc mean
		if (video.numOfRatings !== 0) {
			//newRating = mean of old ratings plus new one
			newRating = (video.rating + userRating) / 2;
		} else {
			newRating = userRating;
		}

		Videos.update(
			{_id: id},
			{$set: {
				'rating': newRating,
				'numOfRatings': video.numOfRatings + 1
			}
			});
		return {newRating: newRating};
	},
	ifVideoExists: function(id){
		check(id, String);
		var c = Videos.find({_id: id}).count();
		return c > 0;
	},
	//used for suggested video feature
	//tags are stored as an array of {name: x, count: y} objects
	updateSuggestedTags: function(user, videoId) {
		check(user, Object);
		check(videoId, String);
		let userTags = user.tagStoreForVideoSuggestion;
		let video = Videos.findOne({_id: videoId});
		let videoTags = video.tags;
		let videoTagsArray = videoTags.split(/[\s,]+/);
		videoTagsArray.forEach( function(tag) {
			if (_.findWhere(userTags, {name: tag})) {
				let tagObj = _.findWhere(userTags, {name: tag});
				let objIndex = userTags.indexOf(tagObj);
				userTags[objIndex] = {name: tag, count: tagObj.count + 1};
			} else {
				userTags.push({name: tag, count: 1});
			}
		});

		userTags = _.sortBy(userTags, 'count')
		Meteor.users.update(
			{_id: user._id},
			{$set: {'tagStoreForVideoSuggestion': userTags}},
			function(error) {
			if(error) {
				console.log(error);
			}
		}
		);
		return userTags;
	},
});

