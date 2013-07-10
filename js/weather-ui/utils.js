//UTILS
W.Utils.Wind = function (wind_dir) {

	var wind = parseInt(wind_dir, 10);

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
	return  wind_dir;
}



W.Utils.WeatherCondition = function (w) {
	var wcs;
	switch (w) {
		case 1:
			wcs = "c-cloudly";
			break
		default:
			wcs = "c-cloudly";

	}

	return  wcs;
}


