$(document).ready(function () {

	console.log("ready");

	new W.Views.Actual({collection: actual_forecasts});

	new W.Views.Expand();

	W.OneWeek = new W.Views.OneWeek({
		collection: collection_days
	});

});