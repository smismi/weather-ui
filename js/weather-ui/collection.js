//COLLECTIONS

W.Collections.Items = Backbone.Collection.extend({
	model: W.Models.Item
})


//
//a = new W.Collections.Items({
//    url: "D:/_projects/backb_bone/js/tl/data.json", success: function() {
//        console.log('123');
//    }
//});


//console.log("2");

//
//
//W.Collections.Items = Backbone.Collection.extend(
//    {
//        model: W.Models.Item,
//
//        url: "data.js",
//        parse: function(response)
//        {
//            return response.results;
//        }
//    });

var c_items = new W.Collections.Items([]);




