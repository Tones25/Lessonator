if (Videos.find().count() === 0) {
	Videos._ensureIndex({title: 'text', tags: 'text'});
	Videos.insert({
		_id: 'vh5dnGZhtSM',
		title: 'Train Beat Patters',
		tags: 'country, guitar, train beat',
		rating: 0,
		numOfRatings: 0,
	});

	Videos.insert({
		_id: 'LhrGeolItvw',
		title: 'CAGED System Explained',
		tags: 'guitar, theory, chords',
		rating: 0,
		numOfRatings: 0,
	});

	Videos.insert({
		_id: '3TGDIOT6c0A',
		title: 'Practice Techniques for the Intermediate Player',
		tags: 'practice, guitar, technique, intermediate',
		rating: 0,
		numOfRatings: 0,
	});

	Videos.insert({
		_id: 'D7jV50wt-e0',
		title: 'Ten Basic Lead Guitar Moves',
		tags: 'guitar, lead, scales',
		rating: 0,
		numOfRatings: 0,
	});

	Videos.insert({
		_id: 'O-aD2ddAG6s',
		title: 'Seven Beats Every Drummer Should Know',
		tags: 'drums, beats, basics',
		rating: 0,
		numOfRatings: 0,
	});
	Videos.insert({
		_id: '2d7PDJqfia0',
		title: 'How To Build Hand Speed: Tony Royster Jr',
		tags: 'drums, technique, speed',
		rating: 0,
		numOfRatings: 0,
	});
	Videos.insert({
		_id: '8T-85IbmuxE',
		title: 'Applying Rudiments to the Whole Drum Set',
		tags: 'drums, technique',
		rating: 0,
		numOfRatings: 0,
	});
}

Accounts.onCreateUser(function(options, user) {
	user.ratedVids = [];
	if (options.profile) {
		user.profile = options.profile;
	}
	return user;
});

//gigantic security hole but it'll do for now
Meteor.users.allow({
	update: function() {
		return true;
	}
});

