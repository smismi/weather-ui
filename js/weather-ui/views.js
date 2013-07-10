W.Views.Actual = Backbone.View.extend({
	tagName: "div",
	className: "actual",
	template: "#template_actual",
	initialize: function() {
		this.render();
		this.collection.on('add', this.render, this);
	},
	render: function() {

		model = this.collection.models[this.collection.length - 1];

		//TODO: тут Залепа!!!!!!!!!!!!!!

		var template = _.template( $(this.template).html() );

		this.$el.html(template( model.toJSON() ));

		$("#actual_condition").html("").append(this.$el);

		console.log("actual draw")
		return this;
	}
});




W.Views.Expand = Backbone.View.extend({
	el: "#one",
	initialize: function() {
		this.render();
	},
	expandFullView: function() {
		W.EventsLocals.trigger(W.EventsLocals.COLLAPSE, true);

		$("#one").animate({width: 1000}, 240, function () {

			$("#two").css({height: 0}).show().animate({height: 456});
			$(this).addClass("opened");

		});
		return false;
	},
	collapseFullView: function() {
		W.EventsLocals.trigger(W.EventsLocals.COLLAPSE, false);
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
		this.stateExpanded = false;
		this.stateIndex = 0;
		this.render();
		W.EventsLocals.off(W.EventsLocals.GETACTIVE, this.onSetActive, this);
		W.EventsLocals.off(W.EventsLocals.COLLAPSE, this.setCollapseState, this);
		W.EventsLocals.on(W.EventsLocals.GETACTIVE, this.onSetActive, this);
		W.EventsLocals.on(W.EventsLocals.COLLAPSE, this.setCollapseState, this);

		W.EventsLocals.off(W.EventsLocals.SCROLLTO, this.slideTo, this);
		W.EventsLocals.on(W.EventsLocals.SCROLLTO, this.slideTo, this);

		this.collection.on('reset', this.render, this);
		this.collection.on('reset', this.redrawFullWeek, this);
	},
	render: function() {
		this.$el.empty();
		console.log("render", arguments);

		var max_temp_data = [];
		var min_temp_data = [];

		this.collection.each(function(day){

			this.renderEach(day);
			max_temp_data.push(day.get("tmax"));
			min_temp_data.push(day.get("tmin"));

		}, this);

		new W.Views.WeekPlot({collection: this.collection});



		var settings = {
			dataset: [max_temp_data, min_temp_data],
			colorset: ["rgba(255,102,0,1)", "rgba(0,102,153,1)"],
			fillset: [["url(data:)", 0.1],["#fff", 1]],
			width: 720,
			height: 70,
			container: "weather_plot",
			grid: "weather_plot_measure"
		}



		new W.Views.Plot({collection: this.collection, model: new Backbone.Model(settings)});

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

	},
	setCollapseState : function (flag) {

		this.stateExpanded = flag;

	},
	getCollapseState : function () {

		return this.stateExpanded;

	},
	setScrollIndex : function (index) {

		this.stateIndex = index;

	},
	getScrollIndex : function () {

		return this.stateIndex;

	},
	slideTo : function(index) {

		if (!this.getCollapseState() || this.getScrollIndex() === index) return;

		this.setScrollIndex(index);

		W.EventsDays.trigger(W.EventsDays.GETACTIVEDAY, index);

	}
});




W.Views.OneDay = Backbone.View.extend({
	tagName: "div",
	template: '#template_day',
	initialize: function() {
		this.render();
	},
	render: function() {
//		this.modelReformated(this.model);

		var template = _.template( $(this.template).html() );

		this.$el.addClass("day").html(template( this.model.toJSON() ));
		return this;
	},
	events : {
		"click" : "slideTo"
	},
	slideTo : function () {

		W.EventsLocals.trigger(W.EventsLocals.SCROLLTO, this.collection.indexOf(this.model));

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

		carousel = new W.Views.FullWeekCarousel();
		return this;

	},
	plotarize: function () {

		new W.Views.FullWeekPlot({collection: this.collection});
		return this;

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
	template: '#template_fullday',
	className: "touchcarousel-item",
	initialize: function() {
		this.render();
	},
	render: function() {

		var template = _.template( $(this.template).html() );

		this.$el.html(template( this.model.toJSON() ));

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
//		this.$el.append("<div class=\"day_night\"><div class=\"tooltip tooltip_sunrise\"> Рассвет (" + suncalc.dawn.getHours() + ":" + suncalc.dawn.getMinutes() + ") <i></i></div><div class=\"tooltip tooltip_sundown\"> Закат (" + suncalc.dusk.getHours() + ":" + suncalc.dusk.getMinutes() + ") <i></i></div></div>")
		return this;

	},
	setTitle: function(model) {

// 		this.$el.append("<div class=\"fullday_item_date\"><div class=\"day_month\">" + model.get("reformated_day") + "</div><div class=\"day_week\">" + model.get("reformated_day_week") + "</div></div>")
		return this;
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
		new Plot([bigdata], ["rgba(255,102,0,1)"], [""], 1500, 150, this._el, this._el_ticks);

		return this;
	}
});

