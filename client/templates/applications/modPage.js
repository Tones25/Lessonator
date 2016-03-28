Template.modPage.helpers({
    noResult: function(){
        if(Videos.find().count() > 0){
            return false;
        }else{
            return true;
        }
    }
});