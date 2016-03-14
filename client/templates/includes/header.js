Template.header.events({
	//userSearch is the query string
	'keyup form input': _.debounce(function(event, template) {
		  event.preventDefault();
		  Session.set('userSearch', template.find('form input').value);
		}, 300),

	'submit form': function(e) {
		e.preventDefault();

		var userSearch = $(e.target).find('[name=userSearch]').val();
		Session.set('userSearch', userSearch);

		Router.go('videoList', {});
		},
});
