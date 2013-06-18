
//VIEWS

W.Views.Local = Backbone.View.extend({
	tagName: "li",
	template: _.template("<%= _id %>"),
	initialize: function() {
//        console.log("W.Views.Item: initialize");
		this.render();
//		this.render().colorize().bind();
	},
	render: function() {
//        console.log("W.Views.Item: render");
//        var   ccclass = ;

		this.$el.addClass("tile_item " + (this.model.get("className") || "")).html( this.template( this.model.toJSON() ) )

		this.$el.append(this.buttons.close);
		console.log(c_items.length);
		return this;
	},
	colorize: function() {
//        console.log("W.Views.Item: colorize");

		this.$el.css({"color": this.model.get("color") || "#f60"})
		return this;
	},
	close: function() {
//        alert("close" + this.model.get("_id"))


		this.$el.remove();
		c_items.remove(this.model);
		console.log(c_items.length);


	},
	buttons : {
		close: "<div class='close'>",
		active: "<div class='active'>"
	},
	events : {
		"click .close": "close"
	}

});