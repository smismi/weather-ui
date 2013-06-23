(function ($) {


    //инициализацичя плагина

    $.extend($.fn, {


        plotify: function(options) {


            var init = function() {
                                console.log("init")
            }





            init();


            return $(this);

        },
        plotifyUpdate: function(options) {


            var init = function() {
                console.log("plotifyUpdate")
            }







            return $(this);

        }

    });


})(jQuery);
