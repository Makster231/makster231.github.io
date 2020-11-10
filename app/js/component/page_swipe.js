// (function($, window, document) {

//     $("#js_body").swipe({
//         //Generic swipe handler for all directions
//         swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
//             console.log(direction);

//             pages.about.removeClass("js_animation-about");
//             pages.works.removeClass("js_animation-works");
//             pages.costs.removeClass("js_animation-costs");
//             pages.contacts.removeClass("js_animation-contacts");

//             if (direction === "left") {
//                 if (nav.about.hasClass("js_active")) {
//                     rotateToSection(1);
//                     nav.about.removeClass("js_active");
//                     nav.works.addClass("js_active");
//                     pages.works.addClass("js_animation-works");
//                     return;
//                 }

//                 if (nav.works.hasClass("js_active")) {
//                     rotateToSection(2);
//                     nav.works.removeClass("js_active");
//                     nav.costs.addClass("js_active");
//                     pages.costs.addClass("js_animation-costs");
//                     return;
//                 }

//                 if (nav.costs.hasClass("js_active")) {
//                     rotateToSection(3);
//                     nav.costs.removeClass("js_active");
//                     nav.contacts.addClass("js_active");
//                     pages.contacts.addClass("js_animation-contacts");
//                     return;
//                 }

//                 if (nav.contacts.hasClass("js_active")) {
//                     rotateToSection(0);
//                     nav.contacts.removeClass("js_active");
//                     nav.about.addClass("js_active");
//                     pages.about.addClass("js_animation-about");
//                     return;
//                 }
//             } else {
//                 if (nav.about.hasClass("js_active")) {
//                     rotateToSection(3);
//                     nav.about.removeClass("js_active");
//                     nav.contacts.addClass("js_active");
//                     pages.contacts.addClass("js_animation-contacts");
//                     return;
//                 }

//                 if (nav.works.hasClass("js_active")) {
//                     rotateToSection(0);
//                     nav.works.removeClass("js_active");
//                     nav.about.addClass("js_active");
//                     pages.about.addClass("js_animation-about");
//                     return;
//                 }

//                 if (nav.costs.hasClass("js_active")) {
//                     rotateToSection(1);
//                     nav.costs.removeClass("js_active");
//                     nav.works.addClass("js_active");
//                     pages.works.addClass("js_animation-works");
//                     return;
//                 }

//                 if (nav.contacts.hasClass("js_active")) {
//                     rotateToSection(2);
//                     nav.contacts.removeClass("js_active");
//                     nav.costs.addClass("js_active");
//                     pages.costs.addClass("js_animation-costs");
//                     return;
//                 }
//             }


//         }
//     });

//     $(() => {});
// })(window.jQuery, window, document);