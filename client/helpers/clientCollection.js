//Used to store the results of the suggested videos query.
//Since full text search can't be implemented client side
//this is the only way to display the data since there is
//no specific field that the reuslts can be sorted by on the
//client
ClientCollection = new Mongo.Collection('videosBySuggested');

