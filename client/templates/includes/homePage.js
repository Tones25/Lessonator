Template.homePage.helpers({
	isThereSuggestions: function() {
		if(!Meteor.user()) {
			return false;
		}
		var query = cookUpSuggestedQuery(Meteor.user());
	 	Meteor.subscribe('videosBySuggested', query, 9);
		let videoCount = ClientCollection.find().count();
		if(videoCount >= 7) {
			return true;
		} else {
			return false;
		}
	}
});

//this function is the same as the one in carouselHelpers
//Its being reused to check if there is enough tags in the
//user store to generate enough suggested content to fill
//the carousel. If there isn't enough content, the carousel
//isn't rendered
function cookUpSuggestedQuery(user) {
	let userTags = user.tagStoreForVideoSuggestion;
  	let suggestedTags = [];
	  if (userTags.length > 10) {
	    let tempArray = userTags.slice(userTags.length - 10, userTags.length);
	    suggestedTags = _.sample(tempArray, 5);
	  } else if (userTags.length >3 && userTags.length < 10) {
	    suggestedTags = _.sample(userTags, 5);
	  } else {
	    suggestedTags = userTags;
	  }
	  let suggestedTagNames = _.pluck(suggestedTags, 'name');
	  let suggestedSearch =  suggestedTagNames.join(' ');
	  return suggestedSearch;
}
