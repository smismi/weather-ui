W.Views.Actual = Backbone.View.extend({
	tagName: "div",
	className: "actual",
	template: "#template_actual",
	initialize: function() {
		this.render();
		this.collection.on('add', this.render, this);
	},
	render: function() {

//        var a = this.collection.get({"date": "18:00"});



		model = this.collection.models[this.collection.length -1 ];

		//TODO: тут написала хуйня - переписать

		var template = _.template( $(this.template).html() );

		this.$el.html(template( model.toJSON() ));

		$("#actual_condition").html("").append(this.$el);

		console.log("actual draw")
		return this;
	}
})




W.Views.Expand = Backbone.View.extend({
	el: "#one",
	initialize: function() {
		this.render();
	},
	expandFullView: function() {

		$("#one").animate({width: 1000}, 240, function () {

			$("#two").css({height: 0}).show().animate({height: 456});
			$(this).addClass("opened");

		});
		return false;
	},
	collapseFullView: function() {

		$("#two").animate({height: 0}, 140, function () {
			$("#one").animate({width: 720}).removeClass("opened");
			$(this).hide();
		});

		return false;


	},
	events : {

		"click .more": "expandFullView",
		"click .less": "collapseFullView"

	}

});



W.Views.OneWeek = Backbone.View.extend({
	tagName: "p",
	initialize: function() {
		this.render();
		W.EventsLocals.on(W.EventsLocals.GETACTIVE, this.onSetActive, this)
		this.collection.on('reset', this.render, this);
		this.collection.on('reset', this.redrawFullWeek, this);
	},
	render: function() {
		this.$el.empty();
		console.log("render", arguments);
		this.collection.each(function(day){

			this.renderEach(day);

		}, this);

		new W.Views.WeekPlot({collection: this.collection});

		$("#week").append(this.$el);

		return this;
	},
	renderEach: function(model) {

		var day = new W.Views.OneDay({model: model, collection: this.collection});


		this.$el.append(day.$el);


	},
	onSetActive : function (obj) {

		collection_days.reset(obj.get("days"));
//		this.render(obj)

	},
	redrawFullWeek : function (obj) {

		new W.Views.FullWeek({
			collection: collection_days
		});

		//		this.render(obj)

	}
});




W.Views.OneDay = Backbone.View.extend({
	tagName: "div",
	template: '#template_day',
	initialize: function() {
		this.render();
	},
	render: function() {
		this.modelReformated(this.model);

		var template = _.template( $(this.template).html() );

		this.$el.addClass("day").html(template( this.model.toJSON() ));

		return this;
	},
	events : {
		"click" : "slideTo"
	},
	slideTo : function() {

		W.EventsDays.trigger(W.EventsDays.GETACTIVEDAY, this.collection.indexOf(this.model));

	},
	modelReformated: function (model) {

		var d = new Date(model.get("date"));

		var weekday= ["Воскресенье", 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
		var monthname= ["Января", 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

		var wind = parseInt(model.get("wind_dir"), 10);

		switch (true) {
			case wind <= 23:
				wind_dir = 0;
				break
			case wind <= 45:
				wind_dir = 1;
				break
			case wind <= 68:
				wind_dir = 2;
				break
			case wind <= 90:
				wind_dir = 3;
				break
			case wind <= 112.5:
				wind_dir = 4;
				break
			case wind <= 135:
				wind_dir = 5;
				break
			case wind <= 157.5:
				wind_dir = 6;
				break
			case wind <= 180:
				wind_dir = 7;
				break
			case wind <= 202.5:
				wind_dir = 8;
				break
			case wind <= 225:
				wind_dir = 9;
				break
			case wind <= 247.5:
				wind_dir = 10;
				break
			case wind <= 270:
				wind_dir = 11;
				break
			case wind <= 292.5:
				wind_dir = 12;
				break
			case wind <= 315:
				wind_dir = 13;
				break
			case wind <= 337.5:
				wind_dir = 14;
				break
			case wind <= 360:
				wind_dir = 15;
				break
			default:
				wind_dir = 0;

		}

		var w = new Date(model.get("weather_conditions"));


		switch (w) {
			case "Переменная облачность, без осадков":
				wcs_index = 0;
				break
			case "Облачно, небольшой дождь":
				wcs_index = 1;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 2;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 3;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 4;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 5;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 6;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 7;
				break
			default:
				wcs_index = 0;

		}


		var wcs= ["c-cloudly", 'c-rainy', 'cloudly', 'c-cloudly', 'c-cloudly', 'c-cloudly', 'c-cloudly'];

		model.set({"reformated_day_week": weekday[d.getDay()], "reformated_day": d.getDay() + " " +monthname[d.getMonth()], "ico_class": wcs[wcs_index], "wind_dir": wind_dir});


	}
});



W.Views.WeekPlot = Backbone.View.extend({
	_el: "weather_plot",
	_el_ticks: "weather_plot_measure",
	initialize: function() {
		this.render();
	},
	render: function() {

		var max_temp_data = [];
		var min_temp_data = [];

		this.collection.each(function(day){

			max_temp_data.push(day.get("tmax"));
			min_temp_data.push(day.get("tmin"));

		}, this);
		$("#" + this._el).html("");
		$("#" + this._el_ticks).html("");



		new Plot([max_temp_data, min_temp_data],["rgba(255,102,0,1)", "rgba(0,102,153,1)"],[["url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAVSURBVHjaYmBAgP8MRHHQwX+AAAMAgcID/ZGxyQ8AAAAASUVORK5CYII=)",.1], ["#fff", 1]], 720, 70, this._el, this._el_ticks);

		return this;
	}
})




// full view


W.Views.FullWeek = Backbone.View.extend({
	el: "#two",
	template: '#template_fullweek',

	initialize: function() {

//		this.render();
		this.render().carouselize().plotarize();


	},
	render: function() {


		var template = _.template( $(this.template).html() );

		this.$el.html(template());

		this.collection.each(function(day){

			this.renderEach(day);

		}, this);

		return this;
	},
	renderEach: function(model) {

		var _day = new W.Views.FullDay({model: model});

		this.$el.find("#touchcarousel-container").append(_day.$el);

	},
	carouselize: function () {

		new W.Views.FullWeekCarousel();
		return this;
	},
	plotarize: function () {

		new W.Views.FullWeekPlot({collection: this.collection});

	}
})

W.Views.FullWeekCarousel = Backbone.View.extend({
	initialize: function() {

		W.EventsDays.on(W.EventsDays.GETACTIVEDAY, this.onSetActiveDay, this)

		this.render();
	},
	render: function() {

		$("#carousel-image-and-text").touchCarousel({
			pagingNav: true,
			snapToItems: true,
			itemsPerMove: 1,
			scrollToLast: false,
			loopItems: false,
			scrollbar: true,
			onAnimStart : function(){
				$(this.items).each(function(){
					this.item.removeClass("active");
				});
			},
			onAnimComplete : function(){
				index = this.getCurrentId();
				this.items[index].item.addClass("active");
			}

		});

		this.carousel = $("#carousel-image-and-text").data("touchCarousel");

		this.carousel.items[0].item.append("	<div id=\"weather_plot_big\" style=\"position: absolute; top:125px; left:20px; width: 0; height: 0;\"></div>")

	},
	onSetActiveDay: function (index) {

		this.carousel.goTo(index);

	}
});

W.Views.FullDay = Backbone.View.extend({
	tagName: "li",
	className: "touchcarousel-item",
	initialize: function() {
		this.render();
	},
	render: function() {

		this.modelReformated(this.model);

		this.setTitle(this.model).getDayLight(this.model);

		var _h = this.model.get("hours");

		collection = new Backbone.Collection(_h,{model: W.Models.Hour});

		_this = this;

		collection.each(function(hour) {
			_this.renderEach(hour);
		});

		return this;
	},
	renderEach: function(model) {

		var _hour = new W.Views.Hour({model: model});
		this.$el.append(_hour.$el);

	},
	getDayLight: function(model) {

		var suncalc = SunCalc.getTimes(new Date(model.get("date")), Math.floor(90*Math.random() - 90), Math.floor(180*Math.random() - 180));
		this.$el.append("<div class=\"day_night\"><div class=\"tooltip tooltip_sunrise\"> Рассвет (" + suncalc.dawn.getHours() + ":" + suncalc.dawn.getMinutes() + ") <i></i></div><div class=\"tooltip tooltip_sundown\"> Закат (" + suncalc.dusk.getHours() + ":" + suncalc.dusk.getMinutes() + ") <i></i></div></div>")
		return this;

	},
	setTitle: function(model) {

		this.$el.append("<div class=\"fullday_item_date\"><div class=\"day_month\">" + model.get("reformated_day") + "</div><div class=\"day_week\">" + model.get("reformated_day_week") + "</div></div>")
		return this;

	},
	modelReformated: function (model) {

		var d = new Date(model.get("date"));

		var weekday= ["Воскресенье", 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
		var monthname= ["Января", 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

		var wind = parseInt(model.get("wind_dir"), 10);

		switch (true) {
			case wind <= 23:
				wind_dir = 0;
				break
			case wind <= 45:
				wind_dir = 1;
				break
			case wind <= 68:
				wind_dir = 2;
				break
			case wind <= 90:
				wind_dir = 3;
				break
			case wind <= 112.5:
				wind_dir = 4;
				break
			case wind <= 135:
				wind_dir = 5;
				break
			case wind <= 157.5:
				wind_dir = 6;
				break
			case wind <= 180:
				wind_dir = 7;
				break
			case wind <= 202.5:
				wind_dir = 8;
				break
			case wind <= 225:
				wind_dir = 9;
				break
			case wind <= 247.5:
				wind_dir = 10;
				break
			case wind <= 270:
				wind_dir = 11;
				break
			case wind <= 292.5:
				wind_dir = 12;
				break
			case wind <= 315:
				wind_dir = 13;
				break
			case wind <= 337.5:
				wind_dir = 14;
				break
			case wind <= 360:
				wind_dir = 15;
				break
			default:
				wind_dir = 0;

		}

		var w = new Date(model.get("weather_conditions"));


		switch (w) {
			case "Переменная облачность, без осадков":
				wcs_index = 0;
				break
			case "Облачно, небольшой дождь":
				wcs_index = 1;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 2;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 3;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 4;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 5;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 6;
				break
			case "Переменная облачность, без осадков":
				wcs_index = 7;
				break
			default:
				wcs_index = 0;

		}


		var wcs= ["c-cloudly", 'c-rainy', 'cloudly', 'c-cloudly', 'c-cloudly', 'c-cloudly', 'c-cloudly'];

		model.set({"reformated_day_week": weekday[d.getDay()], "reformated_day": d.getDay() + " " +monthname[d.getMonth()], "ico_class": wcs[wcs_index], "wind_dir": wind_dir});


	}
})


W.Views.Hour = Backbone.View.extend({
	tagName: "div",
	className: "day_part",
	template: '#template_daypart',

	initialize: function() {
		this.render();
	},
	render: function() {

		var template = _.template( $(this.template).html() );

		this.$el.html(template( this.model.toJSON() ));

		return this;
	}

});


W.Views.FullWeekPlot = Backbone.View.extend({
	_el: "weather_plot_big",
	_el_ticks: "weather_plot_measure2",
	initialize: function() {
		this.render();
	},
	render: function() {
		$("#" + this._el).html("");
		$("#" + this._el_ticks).html("");

		var bigdata = [
//						24, 22, 20, 23,
//						55, 23, 20, 23,
//						22, 22, 22, 20,
//						22, 22, 22, 20,
//						22, 22, 22, 20,
//						22, 22, 22, 20,
//						23, 22, 22, 20,
//						56
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ), Math.floor(25 * Math.random() ),
			Math.floor(25 * Math.random() )
		];
		new Plot([bigdata], ["rgba(255,102,0,1)"], [""], 5510, 150, this._el, this._el_ticks);

		return this;
	}
})
