Meteor.users.allow({
	update: function(usr, doc) {
		return !!usr;
	}
})
//creates admin account on first time app is run
if(Meteor.users.find().count() === 0) {
	 let id = Accounts.createUser({
		password: 'admin',
		username: 'admin'
	});
	Roles.setUserRoles(id, ['admin']);
}
//adds fields to the default user table that are used for
//ratings and suggested viewing
Accounts.onCreateUser(function(options, user) {
	user.roles = ['usr'];
	user.ratedVids = [];
	user.tagStoreForVideoSuggestion = [];
	if (options.profile) {
		user.profile = options.profile;
	}
	return user;
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
			Roles.setUserRoles(id, ['mod']);
		}

	},
	createRegUser: function(username, password) {
		check(username, String);
		check(password, String);
		if (Meteor.users.findOne({username: username})) {
			console.log('username already exists');
			return 'User already exists';
		} else {

			let id = Accounts.createUser({
				username: username,
				password: password
			});
		}
	},
	removeUser: function(user){
		check(user, Object);
		Meteor.users.remove(user);
	}
});
