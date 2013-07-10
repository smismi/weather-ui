var W = {
	Models: {},
	Views: {},
	Events: {},
	Collections: {}
}









W.EventsLocals = _.extend({
	// locals
	GETACTIVE: "getactive",
	SCROLLTO: "scrollto",
	COLLAPSE: "collapse"
}, Backbone.Events);


W.EventsDays = _.extend({
	// active day
	GETACTIVEDAY: "getactiveday"
}, Backbone.Events);
