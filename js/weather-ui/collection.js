//COLLECTIONS

W.Collections.Days = Backbone.Collection.extend({
	model: W.Models.Day
})


var daily_forecast = new W.Collections.Days([

	{
		timestamp: 1234567890,
		wearther: {
			temp: 13.13,
			humidity: 432,
			pressure: 789,
			wind: "NNE"
		},
		sun : {
			sunrise: "12:22",
			sundown: "19:55"
		}
	}

]);



W.Collections.Locals = Backbone.Collection.extend({
	model: W.Models.Local
})


var local = new W.Collections.Locals([

	{
		"name" : "Moscow",
		"geo" : {"n": "23.535", "w" : "23.345"},
		"url" : "/geo/moscow"
	},
	{
		"name" : "Tver",
		"geo" : {"n": "69.345", "w" : "33.345"},
		"url" : "/geo/tver"
	},
]);




