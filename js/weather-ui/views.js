
//VIEWS

W.Views.Local = Backbone.View.extend({
	tagName: "figure",
	template: '#template_local',
	initialize: function() {
		this.render();
	},
	render: function() {

		var template = _.template( $(this.template).html() );

		this.$el.html(template( this.model.toJSON() ));

		this.$el.append(this.buttons.close);

 		return this;
	},
	close: function() {


		this.$el.remove();
		collection_locals.remove(this.model);


	},
	buttons : {
		close: "<div class='close'>",
		active: "<div class='active'>"
	},
	events : {
		"click .close": "close"
	}

});


W.Views.Locals = Backbone.View.extend({
	initialize: function() {
		this.render();
		this.collection.on("add", this.addOne, this);
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
		var _new_local= new W.Models.Local({name: _name });
		collection_locals.add(_new_local);
		console.log(collection_locals.length);

	}
})


W.Views.OneDay = Backbone.View.extend({
	tagName: "div",
	template: _.template("<%= timestamp %>"),
	initialize: function() {
		this.render();
	},
	render: function() {

		this.$el.html( this.template( this.model.toJSON() ) );

		return this;
	}
})




W.Views.OneWeek = Backbone.View.extend({
	tagName: "p",
	initialize: function() {
		this.render();
	},
	render: function() {
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
})


W.Views.Hour = Backbone.View.extend({
	tagName: "div",
	template: _.template("<p>sun: <%= sunrise %></p><p>sun2: <%= sundown %></p>"),
	initialize: function() {
		this.render();
	},
	render: function() {

		this.$el.html( this.template( this.model.toJSON() ) );

		return this;
	}

});



W.Views.FullDay = Backbone.View.extend({
	tagName: "div",
	initialize: function() {
		this.render();
	},
	render: function() {

		var _h = this.model.get("sun");
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



