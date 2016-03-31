Comments = new Meteor.Collection('comments');

Comments.allow({
    update: function(userId, doc) {
        return !!userId;
    },
    insert: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    }
});

if (Meteor.isServer) {
    Comments.before.insert(function (userId,c) {
        let st = new Date();
        c.dateTime = st;
    });
}