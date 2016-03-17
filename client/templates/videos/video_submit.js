Template.videoSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var title = $("#vidTitle").val();
        var tags = $("#vidTags").val();
        var ytId = getIdFromUrl($("#vidUrl").val());
        Meteor.call('ifVideoExists',ytId, function(err,bool){
            if(err){
                console.log(err);
            }else{
                if(!bool){
                    Videos.insert({
                        _id: ytId,
                        title: title,
                        tags: tags,
                        rating: 0,
                        numOfRatings: 0
                    });
                    Router.go('videoPage', {_id: ytId});
                }else{
                    alert('looks like that already exists');
                }
            }
        });
    }
});

function getIdFromUrl(url){
    var strId = url.split('v=')[1];
    var ampersandPosition = strId.indexOf('&');
    if(ampersandPosition != -1) {
        strId = strId.substring(0, ampersandPosition);
    }
    return strId;
}