//COLLECTIONS


W.Collections.Actual = Backbone.Collection.extend({
	model: W.Models.Actual
})

var actual_forecasts = new W.Collections.Actual([
	{
		"id" : "0",
		"local" : "MOSCOW",
		"date" : "18:00",
		"temp" : "+28",
		"weather_conditions": "0",
		"wind_dir" : "283",
		"wind_speed" : "4",
		"text" : "Оползень выползень с переменным но очень сильным ветром смоет нах всех",
		"magnitize" : "0",
		"climat_norm" : "0"
	}
])

W.Collections.Days = Backbone.Collection.extend({
	model: W.Models.Day
})


var collection_days = new W.Collections.Days([
	{
		"date": "2013-03-26",
		"tmax": "27",
		"tmin": "12",
		"prec": "0",
		"prec_prob": "1",
		"wind_dir": "210",
		"windspeed": "6",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "693",
		"pnight": "692",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	},
	{
		"date": "2013-03-27",
		"tmax": "19",
		"tmin": "10",
		"prec": "0",
		"prec_prob": "12",
		"wind_dir": "270",
		"windspeed": "8",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "691",
		"pnight": "695",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "23",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	},
	{
		"date": "2013-03-26",
		"tmax": "27",
		"tmin": "12",
		"prec": "0",
		"prec_prob": "1",
		"wind_dir": "210",
		"windspeed": "6",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "693",
		"pnight": "692",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	},
	{
		"date": "2013-03-27",
		"tmax": "19",
		"tmin": "10",
		"prec": "0",
		"prec_prob": "12",
		"wind_dir": "270",
		"windspeed": "8",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "691",
		"pnight": "695",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	},
	{
		"date": "2013-03-26",
		"tmax": "27",
		"tmin": "12",
		"prec": "0",
		"prec_prob": "1",
		"wind_dir": "210",
		"windspeed": "6",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "693",
		"pnight": "692",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	},
	{
		"date": "2013-03-27",
		"tmax": "19",
		"tmin": "10",
		"prec": "0",
		"prec_prob": "12",
		"wind_dir": "270",
		"windspeed": "8",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "691",
		"pnight": "695",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	},
	{
		"date": "2013-03-28",
		"tmax": "21",
		"tmin": "9",
		"prec": "0",
		"prec_prob": "12",
		"wind_dir": "280",
		"windspeed": "7",
		"weather_conditions": "Переменная облачность, без осадков",
		"pday": "694",
		"pnight": "696",
		"hours": [
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			},
			{
				"date": "2013-03-27",
				"tmax": Math.floor(25 * Math.random()),
				"tmin": "10",
				"prec": "0",
				"prec_prob": "12",
				"wind_dir": "270",
				"windspeed": "8",
				"weather_conditions": "Переменная облачность, без осадков",
				"pday": "691",
				"pnight": "695"
			}
		]
	}
]);

W.Collections.Local = Backbone.Collection.extend({
	model: W.Models.Local
})


var collection_locals = new W.Collections.Local([
	{"id": "40270", "name": "Амман", "country": "Иордания", "region": "", "days": [
		{"date": "2013-03-26", "tmax": "27", "tmin": "12", "prec": "0", "prec_prob": "1", "wind_dir": "210", "windspeed": "6", "weather_conditions": "Переменная облачность, без осадков", "pday": "693", "pnight": "692",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-27", "tmax": "19", "tmin": "10", "prec": "0", "prec_prob": "12", "wind_dir": "270", "windspeed": "8", "weather_conditions": "Переменная облачность, без осадков", "pday": "691", "pnight": "695",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-28", "tmax": "21", "tmin": "9", "prec": "0", "prec_prob": "12", "wind_dir": "280", "windspeed": "7", "weather_conditions": "Переменная облачность, без осадков", "pday": "694", "pnight": "696",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-26", "tmax": "27", "tmin": "12", "prec": "0", "prec_prob": "1", "wind_dir": "210", "windspeed": "6", "weather_conditions": "Переменная облачность, без осадков", "pday": "693", "pnight": "692",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-27", "tmax": "19", "tmin": "10", "prec": "0", "prec_prob": "12", "wind_dir": "270", "windspeed": "8", "weather_conditions": "Переменная облачность, без осадков", "pday": "691", "pnight": "695",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-27", "tmax": "19", "tmin": "10", "prec": "0", "prec_prob": "12", "wind_dir": "270", "windspeed": "8", "weather_conditions": "Переменная облачность, без осадков", "pday": "691", "pnight": "695",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-28", "tmax": "21", "tmin": "9", "prec": "0", "prec_prob": "12", "wind_dir": "280", "windspeed": "7", "weather_conditions": "Переменная облачность, без осадков", "pday": "694", "pnight": "696",

			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
	]},
	{"id": "17128", "name": "Анкара", "country": "Турция", "region": "", "days": [
		{"date": "2013-03-26", "tmax": "16", "tmin": "5", "prec": "6", "prec_prob": "66", "wind_dir": "150", "windspeed": "5", "weather_conditions": "Переменная облачность, небольшой дождь", "pday": "674", "pnight": "673",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-27", "tmax": "14", "tmin": "5", "prec": "4", "prec_prob": "84", "wind_dir": "250", "windspeed": "9", "weather_conditions": "Облачно, небольшой дождь", "pday": "670", "pnight": "674",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-26", "tmax": "16", "tmin": "5", "prec": "6", "prec_prob": "66", "wind_dir": "150", "windspeed": "5", "weather_conditions": "Переменная облачность, небольшой дождь", "pday": "674", "pnight": "673",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-27", "tmax": "14", "tmin": "5", "prec": "4", "prec_prob": "84", "wind_dir": "250", "windspeed": "9", "weather_conditions": "Облачно, небольшой дождь", "pday": "670", "pnight": "674",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-26", "tmax": "16", "tmin": "5", "prec": "6", "prec_prob": "66", "wind_dir": "150", "windspeed": "5", "weather_conditions": "Переменная облачность, небольшой дождь", "pday": "674", "pnight": "673",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-27", "tmax": "14", "tmin": "5", "prec": "4", "prec_prob": "84", "wind_dir": "250", "windspeed": "9", "weather_conditions": "Облачно, небольшой дождь", "pday": "670", "pnight": "674",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]},
		{"date": "2013-03-28", "tmax": "13", "tmin": "4", "prec": "3", "prec_prob": "86", "wind_dir": "240", "windspeed": "8", "weather_conditions": "Облачно, небольшой дождь", "pday": "674", "pnight": "678",
			"hours": [
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				},
				{
					"date": "2013-03-27",
					"tmax": Math.floor(25 * Math.random()),
					"tmin": "10",
					"prec": "0",
					"prec_prob": "12",
					"wind_dir": "270",
					"windspeed": "8",
					"weather_conditions": "Переменная облачность, без осадков",
					"pday": "691",
					"pnight": "695"
				}
			]}
	]}
]);




