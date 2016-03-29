Template.settings.events({
	'click #clearHistory': function() {
		Meteor.call('clearSuggestedTags', Meteor.user(),
			function(error, result) {
				if(error) {
					throwError(error.reason);
				}
			})
		throwError('History cleared');
	}
});
