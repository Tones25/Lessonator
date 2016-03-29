Template.modPage.helpers({
//<<<<<<< HEAD
    noResult: function(){
        if(Videos.find().count() > 0){
            return false;
        }else{
            return true;
//=======
//    message: function(){
//        if(Videos.find().count() > 0){
//            return "Here's some content that needs fixing:";
//        }else{
//            return "No flagged content at the moment!";
//>>>>>>> c26faa2daee944051b6e9f0b32677019db256dd9
        }
    }
});