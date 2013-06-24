
//VIEWS

W.Views.Local = Backbone.View.extend({
	tagName: "li",
	template: '#template_local',
	initialize: function() {
		this.render();
	},
	render: function() {

		var template = _.template( $(this.template).html() );

		this.$el.addClass("weather_local_item").html(template( this.model.toJSON() ));

		this.$el.append(this.buttons.close);

 		return this;
	},
	close: function() {


		this.$el.remove();
		collection_locals.remove(this.model);


	},
	getActive: function() {

		W.EventsLocals.trigger(W.EventsLocals.GETACTIVE, this.model);

	},
	buttons : {
		close: "<div class='close'>",
		active: "<div class='active'>"
	}
	,
	events : {
		"click .close": "close",
		"click": "getActive"

	}

});


W.Views.Locals = Backbone.View.extend({
	el: "#goroda",
	initialize: function() {
		this.render();
		this.collection.on("reset", this.addOne, this);

	},
	addOne: function(local) {

		// создавать новый дочерний вид
		var _local = new W.Views.Local({model: local});
		this.$el.append(_local.render().el);
	},
	render: function() {
		this.collection.each(function(each_item){

			this.renderEach(each_item);

		}, this);

		$("#goroda").append(this.$el);

		return this;
	},
	renderEach: function(model) {

		var _local = new W.Views.Local({model: model});

		this.$el.append(_local.$el);


	}
});



W.Views.Add = Backbone.View.extend({
	el: "#add_form",
	initialize: function() {
		console.log("#add_form");
	},
	events : {
		"click .add_button" : "add"
	},
	add: function(){
		var _name = this.$el.find("input[name]").val();
		var _new_local= new W.Models.Local({_id: 1, name: _name, url: "/to/path", geo: { n: 12.12, w: 12.12 } });
		collection_locals.add(_new_local);
		console.log(collection_locals.length);

	}
});


W.Views.Today = Backbone.View.extend({
	tagName: "div",
	template: '#template_today',
	initialize: function() {
		this.render();
	},
	render: function() {
		var template = _.template( $(this.template).html() );

		this.$el.html(template());
        $("#today").append(this.$el)
		return this;
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
	modelReformated: function (model) {

		var d = new Date(model.get("date"));
		var weekday= ["Воскресенье", 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

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

		model.set({"reformated_day_week": weekday[d.getDay()], "ico_class": wcs[wcs_index], "wind_dir": wind_dir});


	}
});




W.Views.OneWeek = Backbone.View.extend({
	tagName: "p",
	initialize: function() {
		this.render();
		W.EventsLocals.on(W.EventsLocals.GETACTIVE, this.onSetActive, this)
		this.collection.on('reset', this.render, this);
	},
	render: function() {
		this.$el.empty();
		console.log("render", arguments);
		this.collection.each(function(day){

			this.renderEach(day);

		}, this);

		$("#week").append(this.$el);

		return this;
	},
	renderEach: function(model) {

		var day = new W.Views.OneDay({model: model});


		this.$el.append(day.$el);


	},
	onSetActive : function (obj) {

		collection_days.reset(obj.get("days"));
//		this.render(obj)

	}
});


W.Views.Hour = Backbone.View.extend({
	tagName: "div",
	template: '#template_hour',

//	template: _.template("<p>hours: <%= temp %>, <%= humidity %>, <%= pressure %>, <%= wind %></p>"),
	initialize: function() {
		this.render();
	},
	render: function() {

		var template = _.template( $(this.template).html() );

		this.$el.html(template( this.model.toJSON() ));

		return this;
	}

});



W.Views.FullDay = Backbone.View.extend({
	tagName: "div",
	initialize: function() {
		this.render();
	},
	render: function() {

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


	}
})




W.Views.FullWeek = Backbone.View.extend({
	tagName: "div",
	initialize: function() {
		this.render();
	},
	render: function() {
		this.collection.each(function(day){

			this.renderEach(day);

		}, this);

		$("#fullweek").append(this.$el)

		return this;
	},
	renderEach: function(model) {

		var _day = new W.Views.FullDay({model: model});


		this.$el.append(_day.$el);


	}
})



