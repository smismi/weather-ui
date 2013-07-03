function Plot(dataset, colorset, width, height, container, grid) {
	this.dataset = dataset;
	this.color = colorset;
	this.width = width;
	this.height = height;
	this.container = container;
	this.grid = grid;
	this.getAnchors = function (p1x, p1y, p2x, p2y, p3x, p3y) {


//		console.log(p1x, p1y, p2x, p2y, p3x, p3y)

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
	};

	this.drawBlanket = function () {


		for (var i = 0, ii = data.length; i < ii; i++) {
			var y = Math.round(height - bottomgutter - Y * data[i]),
				x = Math.round(leftgutter + X * (i + .5));


			blanket.push(r.rect(leftgutter + X * i, 0, X, height - bottomgutter).attr({stroke: "#f00", fill: "#f4f", opacity: 0}));
			var rect = blanket[blanket.length - 1];

			(function (x, y, i) {
				var timer;
				rect.click(function () {
					var value = data[i];
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


	}

	this.draw = function (data) {
		var p, bgpp;
		for (var i = 0, ii = data.length; i < ii; i++) {
			var y = Math.round(height - bottomgutter - Y * data[i] + min * Y),
				x = Math.round(leftgutter + X * (i + .5));
			if (!i) {
				p = ["M", x, y, "C", x, y];
				bgpp = ["M", leftgutter + X * .5, height - bottomgutter, "L", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
				var Y0 = Math.round(height - bottomgutter - Y * data[i - 1] + min * Y),
					X0 = Math.round(leftgutter + X * (i - .5)),
					Y2 = Math.round(height - bottomgutter - Y * data[i + 1] + min * Y),
					X2 = Math.round(leftgutter + X * (i + 1.5));
				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
				bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}


		p = p.concat([x, y, x, y]);
		bgpp = bgpp.concat([x, y, x, y, "L", x, height - bottomgutter, "z"]);

		return {_p: p, _bgpp: bgpp}
	}


	this.drawGradient = function (data) {
		var p, bgpp;
		for (var i = 0, ii = data.length; i < ii; i++) {
			var y = Math.round(height - bottomgutter - Y * data[i] + min * Y),
				x = Math.round(leftgutter + X * (i + .5));
			if (!i) {
				bgpp = ["M", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
//				console.log("verse" + i, data[i - 1], data[i + 1]);

				var Y0 = Math.round(height - bottomgutter - Y * data[i - 1] + min * Y),
					X0 = Math.round(leftgutter + X * (i - .5)),
					Y2 = Math.round(height - bottomgutter - Y * data[i + 1] + min * Y),
					X2 = Math.round(leftgutter + X * (i + 1.5));


//				console.log("verse i, i- 0.5, i+1.5: " + i, i - .5, i + 1.5);


				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				bgpp = bgpp.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}


		bgpp = bgpp.concat([x, y, x, y, "z"]);

		var delta = 2;

		for (var i = 0, ii = data.length; i < ii; i++) {
			var y = Math.round(height - bottomgutter - Y * data[i] + min * Y),
				x = Math.round(leftgutter + X * (i + .5));
			if (!i) {
				p = ["M", x, y, "C", x, y];
			}
			if (i && i < ii - 1) {
//				console.log("verse" + i, data[i - 1], data[i + 1]);

				var Y0 = Math.round(height - bottomgutter - Y * data[i - 1] + min * Y),
					X0 = Math.round(leftgutter + X * (i - .5)),
					Y2 = Math.round(height - bottomgutter - Y * data[i + 1] + min * Y),
					X2 = Math.round(leftgutter + X * (i + 1.5));


//				console.log("verse i, i- 0.5, i+1.5: " + i, i - .5, i + 1.5);


				var a = this.getAnchors(X0, Y0, x, y, X2, Y2);
				p = p.concat([a.x1, a.y1, x, y, a.x2, a.y2]);
			}

		}

		p = p.concat([x, y, x, y, "L", x, y - delta]);


		for (var i =  data.length, ii = 0; i > ii; i--) {
			var y = Math.round(height - bottomgutter - Y * data[i - 1] + min * Y),
				x = Math.round(leftgutter + X * (i - .5));
			if (i === data.length) {


				p = p.concat(["C", x, y - delta]);
			}
			if (i !=  data.length && i > ii + 1) {

//				console.log("reverse" + i, data[i], data[i - 2]);

				//				p = p.concat([x, y])

				var Y0 = Math.round(height - bottomgutter - Y * data[i] + min * Y),
					X0 = Math.round(leftgutter + X * (i - 1.5)),
					Y2 = Math.round(height - bottomgutter - Y * data[i - 2] + min * Y),
					X2 = Math.round(leftgutter + X * (i + 0.5));

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
	}

	this.updateData = function () {
		alert(1);
	}


	this.drawTicks = function () {
		for (var i = 0, ii = 10; i <= ii; i++) {
			if (i === 0) {
				this.ticks.push(g.rect(0, topgutter + (this.height - bottomgutter - topgutter) / ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(g.text(12, topgutter + (this.height - bottomgutter - topgutter) / ii * i, this.value_min).attr({fill: '#858f97', 'font-size': 8, 'font-weight': "bold", 'font-family': "Arial"}));
			} else if (i === ii) {
				this.ticks.push(g.rect(0, topgutter + (this.height - bottomgutter - topgutter) / ii * i, 3, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
				this.ticks.push(g.text(12, topgutter + (this.height - bottomgutter - topgutter) / ii * i, this.value_max).attr({fill: '#858f97', 'font-size': 8, 'font-weight': "bold", 'font-family': "Arial"}));
			} else {
				this.ticks.push(g.rect(0, topgutter + (this.height - bottomgutter - topgutter) / ii * i, 1, 1).attr({stroke: "none", fill: "#858f97", opacity: 1}));
			}

//			this.ticks.push(g.text(12, topgutter + (this.height -  bottomgutter - topgutter)/ii * i, "+" + i).attr({fill: '#f00', 'font-size':11, 'font-weight':"bold", 'font-family':"Arial Narrow"}));
		}


	}


	// Draw


	var data = [],
		width = this.width,
		height = this.height,
		leftgutter = 0,
		bottomgutter = 10,
		topgutter = 10;


	var r = Raphael(this.container, this.width, this.height);
	var g = Raphael(this.grid, 20, this.height);


	for (var i = 0, ii = dataset.length; i < ii; i++) {
//            prepare data
		_data = dataset[i],

			max = Math.max.apply(Math, data.concat(_data)),
			min = Math.min.apply(Math, data.concat(_data));


		data = dataset[i];
	}
	this.value_max = max;
	this.value_min = min;

	var X = (width - leftgutter) / data.length,
		Y = (height - bottomgutter - topgutter) / (max - min);

	var XX = (width - leftgutter) / data.length,
		YY = (height - bottomgutter - topgutter) / (max - min);

	for (var i = 0, ii = dataset.length; i < ii; i++) {

		var data = dataset[i],
			color = colorset[i];


		var path = r.path().attr({"opacity": "1", stroke: "#f00", "stroke-width": 0, "stroke-linejoin": "round", "fill": "90-#99c2d6:0-#eec2a3:50-#ffc299:100"}),
			bgp = r.path().attr({stroke: "f00", opacity:.2, fill: color});


//		var path = r.path().attr({"opacity": "1", stroke: "#f00", "stroke-width": 0, "stroke-linejoin": "round", "fill": "90-#006699:0-#ffa800:70-#ff6600:100"}),
//		bgp = r.path().attr({stroke: "f00", opacity:.2, fill: color});


		draw_day = this.draw(data);
		draw_day_g = this.drawGradient(data);

		path.attr({path: draw_day_g._p});
		bgp.attr({path: draw_day._bgpp});

		bgp.toFront();
		path.toFront();


	}


	var blanket = r.set();
	this.drawBlanket();
	blanket.toFront();

	this.ticks = g.set();
	this.drawTicks();
	this.ticks.toFront();

	return this;

}