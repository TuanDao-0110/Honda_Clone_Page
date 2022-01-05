new WOW().init();
// var swiper = new Swiper(".swiper-container", {
//   centeredSlides: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// 1.1 SCROll Bar for VEHICLE's Menu  theme
$("#vehicle-list").mCustomScrollbar({
  theme: "dark",
});

// 1.2 USE Jquert mCustomScrollbar
function move(value) {
  $("#vehicle-list").mCustomScrollbar("scrollTo", value, {
    scrollEasing: "easeOut",
  });
}

// 1.3 Create click function for VEHICLE MENU BAR
$(".vehicle-nav ul li a").click(function () {
  if ($(this).attr("id") === "cars-nav") {
    move("#cars");
  }
});

//2.1 Createa animation when click VEHICLE/ SHOPPING TOOLS button --> IT's own menu bar will show up
var count = "";
$("#navbar > a").click(function () {
  if (count == "") {
    count = $(this).attr("id");
    console.log(count);
    if (count == "vehicles-link") {
      $("#vehicles-link").addClass("active");

      $("#vehicles").toggle("hide-vehicle");
      $(".vehicle-nav").addClass("fadeInDown");
      $("#vehicle-list").addClass("fadeInUp");
    } else if (count == "tools-link") {
      $("#shopTools").toggle("hide-tools");
      $("#tools-link").addClass("active");
    }
  } else {
    if (count == "vehicles-link") {
      $("#vehicles-link").removeClass("active");
      $(".vehicle-nav").addClass("fadeOutUp");
      $("#vehicle-list").addClass("fadeOutDown");
      setTimeout(function () {
        $("#vehicles").toggle("hide-vehicle");
        $(".vehicle-nav").removeClass("fadeOutUp");
        $("#vehicle-list").removeClass("fadeOutDown");
      }, 300);
    }
    if (count == "tools-link") {
      $("#shopTools").toggle("hide-tools");
      $("#tools-link").removeClass("active");
    }
    count = "";
  }
});

// 2.1.1 animation.css library for each item of vehicles's product list
$(".vehicle-product").addClass("animated fadeInUp");

//2.2 for vehicle close button
// both nav bar control vs close button all need to use animated.css
$("#vehicle-close").click(function () {
  $(".vehicle-nav").addClass("fadeOutUp");
  $("#vehicle-list").addClass("fadeOutDown");
  setTimeout(function () {
    $("#vehicles").toggle("hide-vehicle");
    $(".vehicle-nav").removeClass("fadeOutUp");
    $("#vehicle-list").removeClass("fadeOutDown");
  }, 100);
  $("#navbar a").removeClass("active");
  console.log("remove done");
  count = "";
});

// 2.3 for tool close button
$("#tools-close").click(function () {
  $("#shopTools").toggle("hide-tools");
  $("#navbar a").removeClass("active");
  count = "";
});
// 3. Swiper Carousel
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// 4. MyVehilce --> remove and add '.active' for indicators
$(".carousel-indicators-config li").click(function () {
  $(".carousel-indicators-config li").removeClass("active");
  $(this).addClass("active");
});
// 4.1 Click function --> launch indicator
$(".indicators-xs-header").click(function () {
  $(".carousel-indicator-xs ol").slideToggle();
  if ($(".indicators-xs-header i").hasClass("transform-rotate")) {
    $(".indicators-xs-header i").removeClass("transform-rotate");
  } else {
    $(".indicators-xs-header i").addClass("transform-rotate");
  }
});
// 4.2 Click for each li in indicator
$(".carousel-indicator-xs ol li").click(function () {
  console.log("something");
  $(".indicators-tittle span").html($(this).html());
  $(".carousel-indicator-xs ol").slideUp();
  $(".indicators-xs-header i").addClass("transform-rotate");
});

var count = 0;
$(".carousel-control-prev").click(function () {
  $(".carousel-indicators-config li").removeClass("active");
  if (count == 0) {
    count = 4;
  } else {
    count--;
  }
  $(".carousel-indicators-config li").each(function (i) {
    if (i == count) {
      $(this).addClass("active");
      $(".indicators-title span").html($(this).html());
    }
  });
});
$(".carousel-control-next").click(function () {
  $(".carousel-indicators-config li").removeClass("active");
  if (count == 4) {
    count = 0;
  } else {
    count++;
  }
  $(".carousel-indicators-config li").each(function (i) {
    if (i == count) {
      $(this).addClass("active");
      $(".indicators-title span").html($(this).html());
    }
  });
});
$(".back-to-top").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 1000);
});
function collapse() {
  var width = $(window).width();
  console.log(width);
  if (width >= 750) {
    $(".collapse-ul").removeClass("collapse");
  }
  if (width < 750) {
    $(".collapse-ul").addClass("collapse");
  }
}
$(window).resize(function () {
  collapse();
});
$(document).ready(function () {
  collapse();
});
