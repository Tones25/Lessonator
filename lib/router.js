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



VideoListController = RouteController.extend({
	template: 'videoList',
	increment: 15,
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
	increment: 15,
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
	increment: 15,
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

ModPageController = RouteController.extend({
	template: 'modPage',
	increment: 15,
	videoLimit: function() {
		return parseInt(this.params.videoLimit) || this.increment;
	},
	findOptions: function() {
		return this.videoLimit();
	},
	subscriptions: function() {
		this.videosSub = Meteor.subscribe('flaged',
			this.findOptions());
	},
	videos: function() {
		return Videos.find({}, { sort: {rating: 1} });
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
Router.route('/modPage/:videoLimit?', {
	name: 'modPage',
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

function requireAdmin() {
	if (! Roles.userIsInRole(Meteor.user(), ['admin'])) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
		this.render('accessDenied');
		}
	} else {
		this.next();
	}
}

function requireMod() {
	if (! Roles.userIsInRole(Meteor.user(), ['mod'])) {
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
Router.onBeforeAction(requireAdmin, {only: 'adminPage'});
Router.onBeforeAction(requireMod, {only: 'modPage'});


