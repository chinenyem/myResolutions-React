Resolutions_ = new Mongo.Collection('resolutions');

Meteor.publish('allResolutions', function(){
	return Resolutions_.find();
})

Meteor.publish('userResolutions', function(){
	return Resolutions_.find({user: this.userId});
})

