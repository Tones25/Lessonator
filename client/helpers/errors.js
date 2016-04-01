Errors = new Mongo.Collection(null);

//used for errors and general messages
throwError = function(message) {
	this.err = Errors.insert({message: message});
	window.setTimeout(function(){
		Errors.remove(this.err);
	},3000);
};