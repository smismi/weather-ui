$(document).ready(function () {

	console.log("ready");

	W.Actual = new W.Views.Actual({collection: actual_forecasts});

	W.Expand = new W.Views.Expand();

	W.OneWeek = new W.Views.OneWeek({
		collection: collection_days
	});

});