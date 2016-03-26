Template.adminPage.helpers({
	mods: function(){
		return Meteor.users.find({roles: 'mod'});
	},
	usrs: function(){
		return Meteor.users.find({roles: 'usr'});
	}
});

Template.adminPage.events({
	'click #newModSave': function(e, template) {
		e.preventDefault();

		var username = $('#modUsername').val();
		var password = $('#modPassword').val();
		console.log(username + ' ' + password);
		Meteor.call('createMod', username, password, function(error, result) {
			if(error) {
				throwError(error.reason);
			} else {
				throwError('Moderator account created');
			}
		});
		template.find('#modInputs').reset();
		$('#modInputs').addClass('hidden');
		$('#newModBttn').removeClass('hidden');

	},
	'click #newModBttn': function(e){
		$('#newModBttn').addClass('hidden');
		$('#modInputs').removeClass('hidden');
	},
	'click #newModCancel': function(e){
		e.preventDefault();
		$('#modInputs').addClass('hidden');
		$('#newModBttn').removeClass('hidden');
	},
	'click #newUsrSave': function(e, template) {
		e.preventDefault();

		var username = $('#usrUsername').val();
		var password = $('#usrPassword').val();
		console.log(username + ' ' + password);
		Meteor.call('createRegUser', username, password, function(error, result) {});
		template.find('#usrInputs').reset();
		$('#usrInputs').addClass('hidden');
		$('#newUsrBttn').removeClass('hidden');

	},
	'click #newUsrBttn': function(e){
		$('#newUsrBttn').addClass('hidden');
		$('#usrInputs').removeClass('hidden');
	},
	'click #newUsrCancel': function(e){
		e.preventDefault();
		$('#usrInputs').addClass('hidden');
		$('#newUsrBttn').removeClass('hidden');
	}
});
