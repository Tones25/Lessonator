Template.reportItem.helpers({
	getFlags: function() {
		let notLesson = this.flagType.notLesson;
		let badTitle = this.flagType.badTitle;
		let badTags = this.flagType.badTags;

		return 'Not a lesson: ' + notLesson + '   Bad title: ' + badTitle + '   Bad tags: ' + badTags;
	}
});
