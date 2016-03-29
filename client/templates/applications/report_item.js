Template.reportItem.helpers({
	getNotLessonReports: function() {
		let notLesson = this.flagType.notLesson;

		return notLesson;
	},
	getBadTitleReports: function() {
		let badTitle = this.flagType.badTitle;

		return badTitle;
	},
	getBadTagsReports: function() {
		let badTags = this.flagType.badTags;

		return badTags;
	},
});
Template.reportItem.events({
	'click #ignoreButton': function(event, template) {
		console.log(template);
		$(this).remove();
	}
});
