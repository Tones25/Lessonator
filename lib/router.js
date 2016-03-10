Router.configure({
	layoutTemplate: 'layout',
	onBeforeAction: 'loading',
	waitOn: () => Meteor.subscribe('videos'),
});

Router.route('/', {name: 'homePage'});
Router.route('/videoList', {name: 'videoList'});
Router.route('/video/:_id', {
	name: 'videoPage',
	data: function() {},
	action: function() {
		var video = Videos.findOne(this.params._id);
		if (this.ready()) {
		Session.set('ytId', video.ytId);

		this.render('videoPage');
		}
	},
});


Router.route('/submit', {name: 'videoSubmit'});
