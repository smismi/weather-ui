var W = {
	Models: {},
	Views: {},
	Collections: {}
}

$(document).ready(function () {

	console.log("ready");




	var view_local = new W.Views.Locals({
		collection: collection_locals
	});


	var addItem = new W.Views.Add();


	var week = new W.Views.OneWeek({
		collection: collection_days
	});

	var fullweek = new W.Views.FullWeek({
		collection: collection_days
	});


})
