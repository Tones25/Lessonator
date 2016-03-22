Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: () => Meteor.subscribe('userData'),

});

Router.route('/', {
	name: 'homePage',
});

Router.route('/video/:_id', {
	name: 'videoPage',
	action: function() {
		Session.set('ytId', this.params._id);
		this.render('videoPage');
	},
});

Router.route('/adminPage', {
	name: 'adminPage',
});

Router.route('/modPage', {
	name: 'modPage',
});

VideoListController = RouteController.extend({
	template: 'videoList',
	increment: 9,
	videoLimit: function() {
		return parseInt(this.params.videoLimit) || this.increment;
	},
	findOptions: function() {
		return this.videoLimit();
	},
	subscriptions: function() {
		this.videosSub = Meteor.subscribe('search',
			Session.get('userSearch'), this.findOptions());
	},
	videos: function() {
		return Videos.find({}, { sort: [['score', 'desc']] });
	},
	data: function() {
		var hasMore = this.videos().count() === this.videoLimit();
		var nextPath = this.route.path({videoLimit: this.videoLimit() + this.increment});
		return {
			videos: this.videos(),
			ready: this.videosSub.ready,
			nextPath: hasMore ? nextPath : null
		};
	},
});
Router.route('/videoList/:videoLimit?', {
	name: 'videoList',
});

VideoListNewestController = RouteController.extend({
	template: 'videoListNewest',
	increment: 9,
	videoLimit: function() {
		return parseInt(this.params.videoLimit) || this.increment;
	},
	findOptions: function() {
		return this.videoLimit();
	},
	subscriptions: function() {
		this.videosSub = Meteor.subscribe('videosByNewest',
			this.findOptions());
	},
	videos: function() {
		return Videos.find({}, { sort: {submitted: -1} });
	},
	data: function() {
		var hasMore = this.videos().count() === this.videoLimit();
		var nextPath = this.route.path({videoLimit: this.videoLimit() + this.increment});
		return {
			videos: this.videos(),
			ready: this.videosSub.ready,
			nextPath: hasMore ? nextPath : null
		};
	},
});
Router.route('/videoListNewest/:videoLimit?', {
	name: 'videoListNewest',
});

VideoListTopratedController = RouteController.extend({
	template: 'videoListToprated',
	increment: 9,
	videoLimit: function() {
		return parseInt(this.params.videoLimit) || this.increment;
	},
	findOptions: function() {
		return this.videoLimit();
	},
	subscriptions: function() {
		this.videosSub = Meteor.subscribe('videosByRating',
			this.findOptions());
	},
	videos: function() {
		return Videos.find({}, { sort: {rating: -1} });
	},
	data: function() {
		var hasMore = this.videos().count() === this.videoLimit();
		var nextPath = this.route.path({videoLimit: this.videoLimit() + this.increment});
		return {
			videos: this.videos(),
			ready: this.videosSub.ready,
			nextPath: hasMore ? nextPath : null
		};
	},
});
Router.route('/videoListToprated/:videoLimit?', {
	name: 'videoListToprated',
});

Router.route('/submit', {name: 'videoSubmit'});

function requireLogin() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
		this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin, {only: 'videoSubmit'});
