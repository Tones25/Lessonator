function onVideoPageLoaded() {
	Player.create(Template.player, {});
}

Template.videoPage.rendered = function() {
	onVideoPageLoaded();
};
