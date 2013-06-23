var W = {
	Models: {},
	Views: {},
	Events: {},
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

//	var fullweek = new W.Views.FullWeek({
//		collection: collection_days
//	});


    var bigdata    =   [
        24, 22, 20, 23,
        55, 23, 20, 23,
        22, 22, 22, 20,
        23, 22, 22, 20,
        20, 20, 23, 55,
        23, 20, 23, 22,
        22, 22, 22, 20, 20];
    var weather_by_day = new Plot([[2, -12, 2, -2, 2, -2, 2], [-2, 2, -2, 2, -2, 2, -2]],["rgba(255,102,0,1)", "rgba(0,102,153,1)"], 720, 70, "weather_plot");
    var weather_by_hour = new Plot([bigdata],["rgba(255,102,0,1)"]   , 5560, 270, "weather_plot_big");

//    });


})
