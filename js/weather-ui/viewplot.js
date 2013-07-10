
W.Views.Plot = Backbone.View.extend({
	initialize: function() {

		debugger;

//		this.options.dataset = dataset;
//		this.options.color = colorset;
//		this.options.fillset = fillset;
//		this.options.width = width;
//		this.options.height = height;
//		this.options.container = container;
//		this.options.grid = grid;

		var dataset = this.options.settings.dataset;
		var colorset = this.options.settings.colorset;
		var fillset = this.options.settings.fillset;


		var data = [],
			_data = [],
			max,
			min,
			width = this.options.settings.width,
			height = this.options.settings.height,
			leftgutter = 0,
			bottomgutter = 10,
			topgutter = 10;



		var r = Raphael(this.options.settings.container, this.options.settings.width, this.options.settings.height);
		var g = Raphael(this.options.settings.grid, 20, this.options.settings.height);








		for (var i = 0, ii = dataset.length; i < ii; i++) {
//            prepare data
			_data = dataset[i],

				max = Math.max.apply(Math, data.concat(_data)),
				min = Math.min.apply(Math, data.concat(_data));

			data = dataset[i];
		}
		this.options.settings.value_max = max;
		this.options.settings.value_min = min;

		var X = (width - leftgutter) / data.length,
			Y = (height - bottomgutter - topgutter) / (max-min);

		for (var i = 0, ii = dataset.length; i < ii; i++) {

			var data = dataset[i],
				fill = fillset[i],
				color = colorset[i];


			var path = r.path().attr({stroke: color, "stroke-width": 3, "stroke-linejoin": "round"}),
				bgp = r.path().attr({stroke: "none", opacity: 1, fill: fill[0], "fill-opacity": fill[1]});


			draw_day = this.draw(data);

			path.attr({path: draw_day._p});
			bgp.attr({path: draw_day._bgpp});

			path.toFront();


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
			y = Math.round(height - bottomgutter - Y * data[i] + min * Y);
			x = Math.round(leftgutter + X * (i + 0.5));
			if (!i) {
				p = ["M", x, y, "C", x, y];
				bgpp = ["M", leftgutter + X * .5, height - bottomgutter, "L", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
				var Y0 = Math.round(height - bottomgutter - Y * data[i - 1]  + min * Y),
					X0 = Math.round(leftgutter + X * (i - .5)),
					Y2 = Math.round(height - bottomgutter - Y * data[i + 1]  + min * Y),
					X2 = Math.round(leftgutter + X * (i + 1.5));
				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
				bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}


		p = p.concat([x, y, x, y]);
		bgpp = bgpp.concat([x, y, x, y, "L", x, height - bottomgutter, "z"]);

		return {_p: p, _bgpp: bgpp};
	},

	drawTicks : function() {
		for (var i = 0, ii = 10; i <= ii; i++) {
			if (i === 0 ) {
				this.ticks.push(g.rect(0, topgutter + (this.options.settings.height -  bottomgutter - topgutter)/ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(g.text(12, topgutter + (this.options.settings.height -  bottomgutter - topgutter)/ii * i, this.options.settings.value_max).attr({fill: '#858f97', 'font-size':8, 'font-weight':"bold", 'font-family':"Arial"}));
			} else if (i === ii ) {
				this.ticks.push(g.rect(0, topgutter + (this.options.settings.height -  bottomgutter - topgutter)/ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(g.text(12, topgutter + (this.options.settings.height -  bottomgutter - topgutter)/ii * i, this.options.settings.value_min).attr({fill: '#858f97', 'font-size':8, 'font-weight':"bold", 'font-family':"Arial"}));
			} else {
				this.ticks.push(g.rect(0, topgutter + (this.options.settings.height -  bottomgutter - topgutter)/ii * i, 1, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
			}
		}


	}


});

