Comments = new Meteor.Collection('comments');

Comments.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    }
});

if (Meteor.isServer) {
    Comments.before.insert(function (userId,c) {
        let st = new Date();
        c.dateTime = st+" -- SERVER";
        console.log("ima tea pot");
    });
}