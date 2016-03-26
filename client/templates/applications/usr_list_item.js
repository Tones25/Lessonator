/**
 * Created by DC on 2016-03-26.
 */
Template.usrListItem.events({
    'click #promoteBttn': function(e){
        Roles.setUserRoles(this, ['mod']);
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