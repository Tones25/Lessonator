/**
 * Created by DC on 2016-03-26.
 */
Template.modListItem.events({
    'click #demoteBttn': function(e){
        Roles.setUserRoles(this, ['usr']);
    },
    'click #deleteBttn': function(e){
        Meteor.call('removeUser', this, function(error, result) {
            if(error) {
                throwError(error.reason);
            } else {
                throwError('Deleted');
            }
        });
    }
});