/**
 * Created by DC on 2016-03-19.
 */

Template.commentView.helpers({
    isOwner: function(){
        if (this.userId === Meteor.userId()) {
            return true;
        }
    }
});