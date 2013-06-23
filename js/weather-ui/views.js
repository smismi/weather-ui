
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
    currentStatus : function(_id){
        return collection_locals.get("id") == _id;
     },
	getActive: function() {

        var _id = this.model.get("id");

        var _h = collection_locals.get(_id).get("days");
        collection_days = new W.Collections.Days(_h,{model: W.Models.Day});

        W.EventsLocals.trigger(W.EventsLocals.GETACTIVE);




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

		$("#goroda").append(this.$el)

		return this;
	},
	renderEach: function(model) {

		var _local = new W.Views.Local({model: model});

		this.$el.append(_local.$el);


	},
	hightlightme: function() {
        console.log("hailoo");

	}
})



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
})


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
})


W.Views.OneDay = Backbone.View.extend({
	tagName: "div",
	template: '#template_day',
	initialize: function() {
		this.render();
	},
	render: function() {
		var template = _.template( $(this.template).html() );

		this.$el.addClass("day").html(template( this.model.toJSON() ));

		return this;
	}
})




W.Views.OneWeek = Backbone.View.extend({
	tagName: "p",
	initialize: function() {
		this.render();
		W.EventsLocals.on(W.EventsLocals.GETACTIVE, this.redrawWeek, this);
//        this.collection.on("", this.render, this);

    },
	render: function() {

        this.$el.html("");

        this.collection.each(function(day){

			this.renderEach(day);

		}, this);

		$("#week").append(this.$el)

		return this;
	},
	renderEach: function(model) {

		var day = new W.Views.OneDay({model: model});

		this.$el.append(day.$el);


	}
    ,
    redrawWeek : function () {

        this.collection = collection_days;

        this.render();

    }
})


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



