//MODELS

W.Models.Day = Backbone.Model.extend();

W.Models.Hour = Backbone.Model.extend();

W.Models.Local = Backbone.Model.extend();

W.Models.Actual = Backbone.Model.extend({
    defaults:
        {
            "id" : "NON",
            "local" : "NON",
            "date" : "NON",
            "temp" : "NON",
            "weather_conditions": "NON",
            "wind_dir" : "NON",
            "wind_speed" : "NON",
            "text" : "NON",
            "magnitize" : "NON",
            "climat_norm" : "NON"
        }

});
