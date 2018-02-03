(function ($) {
    'use strict';
	
	$.fn.draggableSvg = function (options) {
        return this.each(function () {
            var $object = $(this);

            $object.css("cursor", "move");

            $.draggableSvg($object, options);
        });
    };
	
	$.draggableSvg = function ($object, options) {
        var defaults = {
            x: true,
            y: true,
            invertAxis: false
        }

        var settings = $.extend({}, defaults, options)

        if (!settings.x && !settings.y) settings = $.extend({}, defaults)

        _addEvents($object, settings);
    }

    var _addEvents = function ($object, settings) {
        $object.on("mousedown", mouseDown);
        $object.on("mouseup", mouseUp);

        var isEnabledX = settings.x;
        var isEnabledY = settings.y;
        var isInverted = settings.invertAxis;

        var selectedElement = 0;
        var currentX = 0;
        var currentY = 0;

        function mouseDown(event) {
            selectedElement = event.currentTarget;

            if (isEnabledX) {
                currentX = event.clientX;
                if (isInverted) {
                    currentX = event.clientY
                }
            }
            if (isEnabledY) {
                currentY = event.clientY;
                if (isInverted) {
                    currentY = event.clientX
                }
            } 

            $(this).on("mousemove", mouseMove);
        }

        function mouseMove(event) {
            if (isInverted) {
                var temp = 0;

                temp = event.clientX;
                event.clientX = event.clientY;
                event.clientY = temp;
            }
            if (isEnabledX) {				
                $(selectedElement).attr("x",
				_getNewAxis(event.clientX, parseInt($(selectedElement).attr("x")), currentX));
				
                currentX = event.clientX;      
            }

            if (isEnabledY) {
                $(selectedElement).attr("y",
				_getNewAxis(event.clientY, parseInt($(selectedElement).attr("y")), currentY));
				
                currentY = event.clientY;
            }
        }

        function mouseUp() {
            selectedElement = 0;
            $(this).off("mousemove");
        }
    }
	
	    var _getNewAxis = function (clientAxis, elementAxis, currentAxis) {
			var diff = 0;
			var newA = 0;

			diff = clientAxis - currentAxis;
			newA = elementAxis + diff;
			return newA.toString();
    }
	
})(jQuery);