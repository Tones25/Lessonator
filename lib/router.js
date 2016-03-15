Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: () => Meteor.subscribe('userData')
});

Router.route('/', {name: 'homePage'});
Router.route('/videoList', {
	name: 'videoList',
	waitOn: () => Meteor.subscribe('search'),
});
Router.route('/video/:_id', {
	name: 'videoPage',
	action: function() {
		Session.set('ytId', this.params._id);
		
		this.render('videoPage');
	}
});


Router.route('/submit', {name: 'videoSubmit'});
