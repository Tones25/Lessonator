Template.modPage.helpers({
    message: function(){
        if(videos.find().count() > 0){
            return "there are vids";
        }else{
            return "there are not vids";
        }
    }
});