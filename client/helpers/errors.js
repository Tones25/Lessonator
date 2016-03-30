Errors = new Mongo.Collection(null);

throwError = function(message) {
	this.err = Errors.insert({message: message});
	window.setTimeout(function(){
		Errors.remove(this.err);
	},3000);
};