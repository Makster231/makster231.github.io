(function($, window, document) {
    function gallery() {
        $(".js_works-page--slider").slick({
            infinite: true,
            speed: 700,
            slidesToShow: 3,
            lazyLoad: "ondemand",
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }, ],
        });
    }
    $(() => {
        if (!$is_mobile_size) {
            gallery();
        } else {
            $.each($(".js_page-works img"), function() {
                $(this).attr("src", $(this).attr("data-lazy"));
            })
        }

        // activate light version of page in IE
        if (isIE || isEdge) {
            $(".js_wrapper-page").addClass("js_light-version");
        }

        //show content after loaded page
        $("body").css("opacity", "1");
    });
})(window.jQuery, window, document);