//MODELS
W.Models.Week = Backbone.Model.extend({
	defaults: {
		stateExpanded: false
	}
});

W.Models.Day = Backbone.Model.extend({
	defaults:
	{
		"date": null,
		"tmax": null,
		"tmin": null,
		"prec": null,
		"prec_prob": null,
		"wind_dir": null,
		"windspeed": null,
		"weather_conditions": null,
		"pday": null,
		"pnight": null,
		"hours": [],
		"getReformatedDate": function () {
			return W.Utils.ReformatedDate(this.date);
		},
		"getSuncalcResult": function () {
			return W.Utils.Sundates(this.date, Math.floor(90*Math.random() - 90), Math.floor(180*Math.random() - 180));
		},
		"getWind": function () {
			return W.Utils.Wind(this.wind_dir);
		},
		"getIconedCondition": function () {
			return W.Utils.WeatherCondition(this.weather_conditions);
		}
	}
});


W.Models.Hour = W.Models.Day.extend();

W.Models.Local = Backbone.Model.extend();

W.Models.Actual = W.Models.Day.extend({
	defaults: _.extend({},W.Models.Day.prototype.defaults,
		{
			"id" : "NON",
			"local" : "NON",
			"update_time" : "NON",
			"text" : "NON",
			"magnitize" : "NON",
			"climat_norm" : "NON"
		}
	)
});
