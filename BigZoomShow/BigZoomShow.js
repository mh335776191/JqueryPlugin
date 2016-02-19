(function ($, window, document) {
    var defaults = {
        fontsize: 12,
        fontcolor: 'red',
        zindex: 100
    };
    $.fn.BigShow = function (options) {
        var opt = $.extend({}, defaults, options);
        var zoomdiv = '<div style="height:' + $(document).height() + ';widht' + $(document).width() + '; position: absolute; top:0px; filter: alpha(opacity=60);background-color: #777;z-index: 1002; left: 0px;opacity:0.5; -moz-opacity:0.5; "></div>';
        $(document).append(zoomdiv);
        $(zoomdiv).show();
        var bigtemp = $(this).copy();
        bigtemp.css("font-size", opt.fontsize);
        bigtemp.css("color", opt.fontcolor);
        bigtemp.css("z-index", zindex);
        bigtemp.show();
        $(zoomdiv).click = function () {
            $(this).remove();
        };
    }
}(jQuery, window, document));