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

			var d = new Date(this.date);
			var weekday= ["Воскресенье", 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
			var monthname= ["Января", 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

			return {
				weekday : weekday[d.getDay()],
				day: d.getDay() + " " + monthname[d.getMonth()]
			};
		},
		"getSuncalcResult": function () {

			suncalc = SunCalc.getTimes(new Date(this.date), Math.floor(90*Math.random() - 90), Math.floor(180*Math.random() - 180));

			return {
				dawn : suncalc.dawn.getHours() + ":" + (suncalc.dawn.getMinutes()<10?'0':'') + suncalc.dawn.getMinutes(),
				dusk: suncalc.dusk.getHours() + ":" + (suncalc.dusk.getMinutes()<10?'0':'') + suncalc.dusk.getMinutes()

			};
		}
	}
});



W.Models.Hour = Backbone.Model.extend();

W.Models.Local = Backbone.Model.extend();

W.Models.Actual = Backbone.Model.extend({
	defaults:
	{
		"id" : "NON",
		"local" : "NON",
		"date" : "NON",
		"temp" : "NON",
		"weather_conditions": "NON",
		"wind_dir" : "NON",
		"wind_speed" : "NON",
		"text" : "NON",
		"magnitize" : "NON",
		"climat_norm" : "NON"
	}

});
