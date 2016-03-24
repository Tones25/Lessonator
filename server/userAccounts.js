if(Meteor.users.find().count() === 0) {
	 let id = Accounts.createUser({
		password: 'admin',
		username: 'admin',
		
	});


	Roles.addUsersToRoles(id, ['admin']);
}
//adds fields to the default user table that are used for
//ratings and suggested viewing
Accounts.onCreateUser(function(options, user) {
	user.ratedVids = [];
	user.tagStoreForVideoSuggestion = [];
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


Meteor.methods({
	createMod: function(username, password) {
		check(username, String);
		check(password, String);
		if(Meteor.users.findOne({username: username})) {
			console.log('username already exists');
		} else {
			
			let id = Accounts.createUser({
				username: username,
				password: password,
			});

			Roles.addUsersToRoles(id, ['mod']);
		}

	}
});
