Template.videoSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var title = $("#vidTitle").val();
        var tags = $("#vidTags").val();
        var ytId = getIdFromUrl($("#vidUrl").val());
        if (ytId != -1) {
            //do final stuff
        }
    }
});

function getIdFromUrl(url){
    var strId = url.split('v=')[1];
    var ampersandPosition = strId.indexOf('&');
    if(ampersandPosition != -1) {
        strId = strId.substring(0, ampersandPosition);
    }
    $.ajax({
        url: "https://gdata.youtube.com/feeds/api/videos/" + strId + "?v=2&alt=json",
        dataType: "jsonp",
        success: function(data) {
            console.log("success");
            return strId;
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            // Handle errors here
            alert('ERRORS: ' + textStatus);
            return -1;
        }
    });
}