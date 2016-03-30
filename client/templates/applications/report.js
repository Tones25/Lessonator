Template.report.events({
	'click #reportSubmit': function(e) {
		e.preventDefault();

		let flagType = $("div.reportTypes select").val();
        console.log(flagType);
        Meteor.call('flagVideo', flagType, Session.get('ytId'),
        	function(error, result) {
	        	if(error) {
	        		throwError(error.reason);
	        	} else {
	        		throwError('Report submited');
	        	}
        });
        
        
	}
});
