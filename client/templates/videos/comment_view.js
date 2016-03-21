/**
 * Created by DC on 2016-03-19.
 */

Template.commentView.helpers({
    isOwner: function(){
        if (this.userId === Meteor.userId()) {
            return true;
        }
    },
    edit: false
});

Template.commentView.events({
    'click #edit': function () {
        //not working yet
        Template.commentView.edit = true;
        console.log("doot");
    },
    'click #delete': function () {
        Comments.remove({_id: this._id});
    }
});