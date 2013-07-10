$(document).ready(function () {

	console.log("ready");

	new W.Views.Actual({collection: actual_forecasts});
	//
	//	var view_local = new W.Views.Locals({
	//		collection: collection_locals
	//	});
	//
	//
	new W.Views.Expand();
	//
	//
	//	var addItem = new W.Views.Add();


//	var today = new W.Views.Today({});

	W.OneWeek = new W.Views.OneWeek({
		collection: collection_days
	});

	new W.Views.FullWeek({
		collection: collection_days
	});

})