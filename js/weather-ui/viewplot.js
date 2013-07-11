W.Views.Plot = Backbone.View.extend({
	initialize: function () {


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


		this.render();


	},

	render: function () {

		var r = this.r = Raphael(this.container, this.width, this.height);
		var g = this.g = Raphael(this.grid, 20, this.height);


		for (var i = 0, ii = this.dataset.length; i < ii; i++) {
//prepare data
			this._data = this.collection.pluck(this.dataset[i]);

			this.max = Math.max.apply(Math, this.data.concat(this._data)),
				this.min = Math.min.apply(Math, this.data.concat(this._data));

			this.data = this.collection.pluck(this.dataset[i]);
		}
		this.value_max = this.max;
		this.value_min = this.min;

		this.X = (this.width - this.leftgutter) / this.data.length,
			this.Y = (this.height - this.bottomgutter - this.topgutter) / (this.max - this.min);


		for (var i = 0, ii = this.dataset.length; i < ii; i++) {

			var data = this.collection.pluck(this.dataset[i]),
				fill = this.fillset[i],
				color = this.colorset[i];


			var path = r.path().attr({stroke: color, "stroke-width": 3, "stroke-linejoin": "round"}),
				bgp = r.path().attr({stroke: "none", opacity: 1, fill: fill[0], "fill-opacity": fill[1]});


			var draw_day = this.draw(data);

			path.attr({path: draw_day._p});
			bgp.attr({path: draw_day._bgpp});

			path.toFront();


		}


		this.blanket = r.set();
		this.drawBlanket(data);
		this.blanket.toFront();

		this.ticks = g.set();
		this.drawTicks();
		this.ticks.toFront();

		return this;


	},


	getAnchors: function (p1x, p1y, p2x, p2y, p3x, p3y) {
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

	drawBlanket: function (data) {
		var y, x;

		for (var i = 0, ii = data.length; i < ii; i++) {
			y = Math.round(this.height - this.bottomgutter - this.Y * data[i]),
				x = Math.round(this.leftgutter + this.X * (i + 0.5));


			this.blanket.push(this.r.rect(this.leftgutter + this.X * i, 0, this.X, this.height - this.bottomgutter).attr({stroke: "#f00", fill: "#f4f", opacity: 0}));
			var rect = this.blanket[this.blanket.length - 1];

			(function (x, y, i) {
				rect.click(function () {
					W.EventsLocals.trigger(W.EventsLocals.SCROLLTO, i);
				});
			})(x, y, i);

		}


	},

	draw: function (data) {
		var p, bgpp, y, x;
		for (var i = 0, ii = data.length; i < ii; i++) {
			y = Math.round(this.height - this.bottomgutter - this.Y * data[i] + this.min * this.Y);
			x = Math.round(this.leftgutter + this.X * (i + 0.5));
			if (!i) {
				p = ["M", x, y, "C", x, y];
				bgpp = ["M", this.leftgutter + this.X * .5, this.height - this.bottomgutter, "L", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
				var Y0 = Math.round(this.height - this.bottomgutter - this.Y * data[i - 1] + this.min * this.Y),
					X0 = Math.round(this.leftgutter + this.X * (i - .5)),
					Y2 = Math.round(this.height - this.bottomgutter - this.Y * data[i + 1] + this.min * this.Y),
					X2 = Math.round(this.leftgutter + this.X * (i + 1.5));
				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
				bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}


		p = p.concat([x, y, x, y]);
		bgpp = bgpp.concat([x, y, x, y, "L", x, this.height - this.bottomgutter, "z"]);

		return {_p: p, _bgpp: bgpp};
	},


	drawGradient: function (data) {
		var p, bgpp;
		for (var i = 0, ii = data.length; i < ii; i++) {
			var y = Math.round(this.height - this.bottomgutter - this.Y * data[i] + this.min * this.Y),
				x = Math.round(this.leftgutter + this.X * (i + .5));
			if (!i) {
				bgpp = ["M", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
//				console.log("verse" + i, data[i - 1], data[i + 1]);

				var Y0 = Math.round(this.height - this.bottomgutter - this.Y * data[i - 1] + this.min * this.Y),
					X0 = Math.round(this.leftgutter + this.X * (i - .5)),
					Y2 = Math.round(this.height - this.bottomgutter - this.Y * data[i + 1] + this.min * this.Y),
					X2 = Math.round(this.leftgutter + this.X * (i + 1.5));


//				console.log("verse i, i- 0.5, i+1.5: " + i, i - .5, i + 1.5);


				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}


		bgpp = bgpp.concat([x, y, x, y, "z"]);

		var delta = 2;

		for (var i = 0, ii = data.length; i < ii; i++) {
			var y = Math.round(this.height - this.bottomgutter - this.Y * data[i] + this.min * this.Y),
				x = Math.round(this.leftgutter + this.X * (i + .5));
			if (!i) {
				p = ["M", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
//				console.log("verse" + i, data[i - 1], data[i + 1]);

				var Y0 = Math.round(this.height - this.bottomgutter - this.Y * data[i - 1] + this.min * this.Y),
					X0 = Math.round(this.leftgutter + this.X * (i - .5)),
					Y2 = Math.round(this.height - this.bottomgutter - this.Y * data[i + 1] + this.min * this.Y),
					X2 = Math.round(this.leftgutter + this.X * (i + 1.5));


//				console.log("verse i, i- 0.5, i+1.5: " + i, i - .5, i + 1.5);


				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}

		p = p.concat([x, y, x, y, "L", x, y - delta]);


		for (var i = data.length, ii = 0; i > ii; i--) {
			y = Math.round(this.height - this.bottomgutter - this.Y * data[i - 1] + this.min * this.Y),
				x = Math.round(this.leftgutter + this.X * (i - .5));
			if (i === data.length) {


				p = p.concat(["C", x, y - delta]);
			}
			if (i != data.length && i > ii + 1) {

//				console.log("reverse" + i, data[i], data[i - 2]);

				//				p = p.concat([x, y])

				var Y0 = Math.round(this.height - this.bottomgutter - this.Y * data[i] + this.min * this.Y),
					X0 = Math.round(this.leftgutter + this.X * (i - 1.5)),
					Y2 = Math.round(this.height - this.bottomgutter - this.Y * data[i - 2] + this.min * this.Y),
					X2 = Math.round(this.leftgutter + this.X * (i + 0.5));

				var a = this.getAnchors(X0, Y2, x, y - delta, X2, Y0);

//				console.log(a.x1, a.y1, x, y, a.x2, a.y2);
//				console.log("reverse X0, x, X2: " + X2, x, X0);
//				console.log("reverse Y0, y, y2: " + Y0, y, Y2);

//				console.log("reverse i, i-0.5, i+1.5: " + i, i - 1.5, i + 0.5);

				p = p.concat([a.x2, a.y2, x, y - delta, a.x1, a.y1]);
			}
		}
		p = p.concat([x, y - delta, x, y - delta, "z"]);


		return {_p: p, _bgpp: bgpp}
	},

	drawTicks: function () {
		for (var i = 0, ii = 10; i <= ii; i++) {
			if (i === 0) {
				this.ticks.push(this.g.rect(0, this.topgutter + (this.height - this.bottomgutter - this.topgutter) / ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(this.g.text(12, this.topgutter + (this.height - this.bottomgutter - this.topgutter) / ii * i, this.value_max).attr({fill: '#858f97', 'font-size': 8, 'font-weight': "bold", 'font-family': "Arial"}));
			} else if (i === ii) {
				this.ticks.push(this.g.rect(0, this.topgutter + (this.height - this.bottomgutter - this.topgutter) / ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(this.g.text(12, this.topgutter + (this.height - this.bottomgutter - this.topgutter) / ii * i, this.value_min).attr({fill: '#858f97', 'font-size': 8, 'font-weight': "bold", 'font-family': "Arial"}));
			} else {
				this.ticks.push(this.g.rect(0, this.topgutter + (this.height - this.bottomgutter - this.topgutter) / ii * i, 1, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
			}
		}


	}


});

