Template.adminPage.events({
	'submit form': function(e) {
		e.preventDefault();

		var username = $(e.target).find('[name=username]').val();
		var password = $(e.target).find('[name=password]').val();
		console.log(username + ' ' + password);
		Meteor.call('createMod', username, password, function(error, result) {
			if(error) {
				console.log(error);
			}
		});
},
});
