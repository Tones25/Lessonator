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
			newRating = (video.rating + userRating) / (video.numOfRatings + 1);
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
	}
});

