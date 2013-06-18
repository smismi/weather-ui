//COLLECTIONS

W.Collections.Days = Backbone.Collection.extend({
	model: W.Models.Day
})


var collection_days = new W.Collections.Days([

	{
		timestamp: new Date().getTime(),
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
	},
	{
		timestamp: new Date().getTime(),
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
	},
	{
		timestamp: new Date().getTime(),
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
	},
	{
		timestamp: new Date().getTime(),
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
	},
	{
		timestamp: new Date().getTime(),
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
	},
	{
		timestamp: new Date().getTime(),
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



W.Collections.Local = Backbone.Collection.extend({
	model: W.Models.Local
})


var collection_locals = new W.Collections.Local([

	{
		"_id" : "0",
		"name" : "Moscow",
		"geo" : {"n": "23.535", "w" : "23.345"},
		"url" : "/geo/moscow"
	},
	{
		"_id" : "1",
		"name" : "Tver",
		"geo" : {"n": "69.345", "w" : "33.345"},
		"url" : "/geo/tver"
	},
]);




