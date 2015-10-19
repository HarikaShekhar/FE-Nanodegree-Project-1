	$(document).ready(function() {
		$("#mainheader").height($(window).height());
        $(".scrollfade").animate({opacity: "1"}, 2000);
        $(window).scroll(function() {
            var target = $("#mainheader"),
                targetHeight = target.outerHeight();
            var scrollPercent = 0;
            scrollPercent = (targetHeight-$(document).scrollTop())/targetHeight;
            if (scrollPercent >= 0.1) {
                target.css('opacity', scrollPercent);

                var top = ($(document).scrollTop() > 0) ? $(document).scrollTop() : 1;
                $('.scrollfade').fadeTo(0, 1 / top);
            }
        });

        window.setTimeout(function() {
            $("hr").animate({
                width: "70%",
                opacity: "1"
            }, 1000);
        }, 1000);
	})