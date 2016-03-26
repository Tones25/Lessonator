Template.header.events({
	//userSearch is the query string
	'keyup form input': _.debounce(function(event, template) {
		  	search();
		}, 300),
	'submit form': function(e) {
		e.preventDefault();
			search();
		},
	'click #sIcon': function(e){
			search();
		}
});

function search(){
	var userSearch = $("#userSearch").val();
	$('#userSearch').addClass('loading');
	if(userSearch != ""){
		Session.set('userSearch', userSearch);
		Router.go('videoList', {});
	}else{
		Router.go('homePage');
	}
}