
W.Views.Plot = Backbone.View.extend({
	initialize: function() {


		this.dataset = this.model.get("dataset");
		this.colorset = this.model.get("colorset");
		this.fillset = this.model.get("fillset");


		this.data = [],
		this._data = [],
		this.max,
		this.min,
		this.container = this.model.get("container"),
		this.grid = this.model.get("grid"),
		this.width = this.model.get("width"),
		this.height = this.model.get("height"),
		this.leftgutter = 0,
		this.bottomgutter = 10,
		this.topgutter = 10;



		var r = Raphael(this.container, this.width, this.height);
		var g = Raphael(this.grid, 20, this.height);








		for (var i = 0, ii = this.dataset.length; i < ii; i++) {
//            prepare data
			this._data = this.dataset[i],

				this.max = Math.max.apply(Math, this.data.concat(this._data)),
				this.min = Math.min.apply(Math, this.data.concat(this._data));

			this.data = this.dataset[i];
		}
		this.value_max = max;
		this.value_min = min;

		var X = (this.width - this.leftgutter) / this.data.length,
			Y = (this.height - this.bottomgutter - this.topgutter) / (this.max-this.min);


		for (var i = 0, ii = this.dataset.length; i < ii; i++) {

			var data = this.dataset[i],
				fill = this.fillset[i],
				color = this.colorset[i];


			var path = r.path().attr({stroke: color, "stroke-width": 3, "stroke-linejoin": "round"}),
				bgp = r.path().attr({stroke: "none", opacity: 1, fill: fill[0], "fill-opacity": fill[1]});


			draw_day = this.draw(data);
//
//			path.attr({path: draw_day._p});
//			bgp.attr({path: draw_day._bgpp});
//
//			path.toFront();


		}





	},

	render: function () {





		var blanket = r.set();
		this.drawBlanket();
		blanket.toFront();

		this.ticks = g.set();
		this.drawTicks();
		this.ticks.toFront();

		return this;

	},


	getAnchors : function (p1x, p1y, p2x, p2y, p3x, p3y) {
		var l1 = (p2x - p1x) / 3,
			l2 = (p3x - p2x) / 3,
			a = Math.atan((p2x - p1x) / Math.abs(p2y - p1y)),
			b = Math.atan((p3x - p2x) / Math.abs(p2y - p3y));
		a = p1y < p2y ? Math.PI - a : a;
		b = p3y < p2y ? Math.PI - b : b;
		var alpha = Math.PI / 2 - ((a + b) % (Math.PI * 2)) / 2,
			dx1 = l1 * Math.sin(alpha + a),
			dy1 = l1 * Math.cos(alpha + a),
			dx2 = l2 * Math.sin(alpha + b),
			dy2 = l2 * Math.cos(alpha + b);
		return {
			x1: p2x - dx1,
			y1: p2y + dy1,
			x2: p2x + dx2,
			y2: p2y + dy2
		};
	},

	drawBlanket : function() {
		var y, x;

		for (var i = 0, ii = this.options.settings.data.length; i < ii; i++) {
			y = Math.round(height - bottomgutter - Y * this.options.settings.data[i]),
				x = Math.round(leftgutter + X * (i + 0.5));


			blanket.push(r.rect(leftgutter + X * i, 0, X, height - bottomgutter).attr({stroke: "#f00", fill: "#f4f", opacity: 0}));
			var rect = blanket[blanket.length - 1];

			(function (x, y, i) {
				var timer;
				rect.click(function(){
					var value = data[i];
					console.log(i);
				});
				rect.hover(function () {
					//                    clearTimeout(leave_timer);

				}, function () {
					//                    leave_timer = setTimeout(function () {
					//
					//                    }, 1);
				});
			})(x, y, i);

		}


	},

	draw : function(data) {
		var p, bgpp, y, x;
		for (var i = 0, ii = data.length; i < ii; i++) {
			y = Math.round(this.height - this.bottomgutter - Y * data[i] + min * Y);
			x = Math.round(this.leftgutter + X * (i + 0.5));
			if (!i) {
				p = ["M", x, y, "C", x, y];
				bgpp = ["M", this.leftgutter + X * .5, this.height - this.bottomgutter, "L", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
				var Y0 = Math.round(this.height - this.bottomgutter - Y * data[i - 1]  + min * Y),
					X0 = Math.round(this.leftgutter + X * (i - .5)),
					Y2 = Math.round(this.height - this.bottomgutter - Y * data[i + 1]  + min * Y),
					X2 = Math.round(this.leftgutter + X * (i + 1.5));
				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
				bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}


		p = p.concat([x, y, x, y]);
		bgpp = bgpp.concat([x, y, x, y, "L", x, this.height - this.bottomgutter, "z"]);

		return {_p: p, _bgpp: bgpp};
	},

	drawTicks : function() {
		for (var i = 0, ii = 10; i <= ii; i++) {
			if (i === 0 ) {
				this.ticks.push(g.rect(0, this.topgutter + (this.height -  this.bottomgutter - this.topgutter)/ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(g.text(12, this.topgutter + (this.height -  this.bottomgutter - this.topgutter)/ii * i, this.options.settings.value_max).attr({fill: '#858f97', 'font-size':8, 'font-weight':"bold", 'font-family':"Arial"}));
			} else if (i === ii ) {
				this.ticks.push(g.rect(0, this.topgutter + (this.height -  this.bottomgutter - this.topgutter)/ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(g.text(12, this.topgutter + (this.height -  this.bottomgutter - this.topgutter)/ii * i, this.options.settings.value_min).attr({fill: '#858f97', 'font-size':8, 'font-weight':"bold", 'font-family':"Arial"}));
			} else {
				this.ticks.push(g.rect(0, this.topgutter + (this.height -  this.bottomgutter - this.topgutter)/ii * i, 1, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
			}
		}


	}


});

