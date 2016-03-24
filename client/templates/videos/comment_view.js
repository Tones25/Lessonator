/**
 * Created by DC on 2016-03-19.
 */

Template.commentView.helpers({
    isOwner: function(){
        if (this.userId === Meteor.userId()) {
            return true;
        }
    },
    edit: false,
    isRated: function() {
        if(_.contains(this.ratedBy,  Meteor.userId())) {
            console.log(this.ratedBy + ' ' + Meteor.userId());
            return true;
        }
    },
});

Template.commentView.events({
    'click #delete': function () {
        Comments.remove({_id: this._id});
    },
    'click #upVote': function() {
        if(!Meteor.user()) {
            throwError('Must be logged in to comment!');
            return;
        }
        let comment = Comments.findOne({_id: this._id});
        //add userId to list of users that rated  if not rated then update
        if(!_.contains(comment.ratedBy, Meteor.userId())) {
            comment.ratedBy.push(Meteor.userId());
            Comments.update({_id: comment._id},
                {$set: {
                    rating: comment.rating + 1,
                    ratedBy: comment.ratedBy,
                }
            });
        } else {
            throwError('You have already rated this comment');
        }
    },
    'click #downVote': function() {
        if(!Meteor.user()) {
            throwError('Must be logged in to comment!');
            return;
        }
        let comment = Comments.findOne({_id: this._id});
        //add userId to list of users that rated  if not rated then update
        if(!_.contains(comment.ratedBy,  Meteor.userId())) {
            comment.ratedBy.push(Meteor.userId());
            Comments.update({_id: comment._id},
                {$set: {
                    rating: comment.rating - 1,
                    ratedBy: comment.ratedBy,
                }
            });
        } else {
            throwError('You have already rated this comment');
        }
    }
});