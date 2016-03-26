Template.videoSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var title = $("#vidTitle").val();
        var tags = $("#vidTags").val();
        var ytId = getIdFromUrl($("#vidUrl").val());
        if (ytId != ""){
            Meteor.call('ifVideoExists',ytId, function(err,bool){
                if(err){
                    throwError(error.reason);
                }else{
                    if(!bool){
                        var now = new Date().getTime();
                        Videos.insert({
                            _id: ytId,
                            title: title.toLowerCase(),
                            tags: tags,
                            rating: 0,
                            numOfRatings: 0,
                            submitted: new Date(now),
                        });
                        Router.go('videoPage', {_id: ytId});
                    }else{
                        throwError('looks like that already exists');
                    }
                }
            });
        }
    }
});

function getIdFromUrl(url) {
    var strId = url.split('v=')[1];
    if (!strId) {
        throwError('Somethings wrong with the url');
        return "";
    }
    var ampersandPosition = strId.indexOf('&');
    if(ampersandPosition != -1) {
        strId = strId.substring(0, ampersandPosition);
        return strId;
    }else{
        return strId;
    }
    
}