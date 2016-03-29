Template.modPage.helpers({

    message: function() {
        if(Videos.find().count() > 0) {
            return 'Here is some content that needs fixing:';
        } else {
            return 'No flagged content at the moment!';
        }
    }
});
