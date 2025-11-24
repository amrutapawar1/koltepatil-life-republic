
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).width() > 768 && $(this).scrollTop() > 300) {
      $("#Pricelistdiv121111").slideUp(500);
    }
    else {
      $("#Pricelistdiv121111").slideDown(500);
    }
  });

  $(".top_form h2").click(function () {
    console.log('here');
    $("#Pricelistdiv121111").slideToggle();
    $(".mybtn").toggleClass("fa-plus-circle");
    $(".mybtn").toggleClass("fa-minus-circle");
  });
});

!(function (n, i, e, a) {
  (n.navigation = function (t, s) {
    var o = {
      responsive: !0,
      mobileBreakpoint: 991,
      showDuration: 200,
      hideDuration: 200,
      showDelayDuration: 0,
      hideDelayDuration: 0,
      submenuTrigger: "hover",
      effect: "fade",
      submenuIndicator: !0,
      submenuIndicatorTrigger: !1,
      hideSubWhenGoOut: !0,
      visibleSubmenusOnMobile: !1,
      fixed: !1,
      overlay: !0,
      overlayColor: "rgba(0, 0, 0, 0.5)",
      hidden: !1,
      hiddenOnMobile: !1,
      offCanvasSide: "left",
      offCanvasCloseButton: !0,
      animationOnShow: "",
      animationOnHide: "",
      onInit: function () { },
      onLandscape: function () { },
      onPortrait: function () { },
      onShowOffCanvas: function () { },
      onHideOffCanvas: function () { }
    },
      r = this,
      u = Number.MAX_VALUE,
      d = 1,
      l = "click.nav touchstart.nav",
      f = "mouseenter focusin",
      c = "mouseleave focusout";
    r.settings = {};
    var t = (n(t), t);
    n(t).find(".nav-search").length > 0 &&
      n(t)
        .find(".nav-search")
        .find("form")
        .prepend(
          "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
        ),
      (r.init = function () {
        (r.settings = n.extend({}, o, s)),
          r.settings.offCanvasCloseButton &&
          n(t)
            .find(".nav-menus-wrapper")
            .prepend(
              "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
            ),
          "right" == r.settings.offCanvasSide &&
          n(t)
            .find(".nav-menus-wrapper")
            .addClass("nav-menus-wrapper-right"),
          r.settings.hidden &&
          (n(t).addClass("navigation-hidden"),
            (r.settings.mobileBreakpoint = 99999)),
          v(),
          r.settings.fixed && n(t).addClass("navigation-fixed"),
          n(t)
            .find(".nav-toggle")
            .on("click touchstart", function (n) {
              n.stopPropagation(),
                n.preventDefault(),
                r.showOffcanvas(),
                s !== a && r.callback("onShowOffCanvas");
            }),
          n(t)
            .find(".nav-menus-wrapper-close-button")
            .on("click touchstart", function () {
              r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas");
            }),
          n(t)
            .find(".nav-search-button, .nav-search-close-button")
            .on("click touchstart keydown", function (i) {
              i.stopPropagation(), i.preventDefault();
              var e = i.keyCode || i.which;
              "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                ? r.toggleSearch()
                : 9 == e && n(i.target).blur();
            }),
          n(t).find(".megamenu-tabs").length > 0 && y(),
          n(i).resize(function () {
            r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m();
          }),
          r.initNavigationMode(C()),
          r.settings.hiddenOnMobile && m(),
          s !== a && r.callback("onInit");
      });
    var h = function () {
      n(t)
        .find(".nav-submenu")
        .hide(0),
        n(t)
          .find("li")
          .removeClass("focus");
    },
      v = function () {
        n(t)
          .find("li")
          .each(function () {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
              (n(this)
                .children(".nav-dropdown,.megamenu-panel")
                .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                n(this)
                  .children("a")
                  .append(
                    "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                  ));
          });
      },
      m = function () {
        n(t).hasClass("navigation-portrait")
          ? n(t).addClass("navigation-hidden")
          : n(t).removeClass("navigation-hidden");
      };
    (r.showSubmenu = function (i, e) {
      C() > r.settings.mobileBreakpoint &&
        n(t)
          .find(".nav-search")
          .find("form")
          .fadeOut(),
        "fade" == e
          ? n(i)
            .children(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.showDelayDuration)
            .fadeIn(r.settings.showDuration)
            .removeClass(r.settings.animationOnHide)
            .addClass(r.settings.animationOnShow)
          : n(i)
            .children(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.showDelayDuration)
            .slideDown(r.settings.showDuration)
            .removeClass(r.settings.animationOnHide)
            .addClass(r.settings.animationOnShow),
        n(i).addClass("focus");
    }),
      (r.hideSubmenu = function (i, e) {
        "fade" == e
          ? n(i)
            .find(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.hideDelayDuration)
            .fadeOut(r.settings.hideDuration)
            .removeClass(r.settings.animationOnShow)
            .addClass(r.settings.animationOnHide)
          : n(i)
            .find(".nav-submenu")
            .stop(!0, !0)
            .delay(r.settings.hideDelayDuration)
            .slideUp(r.settings.hideDuration)
            .removeClass(r.settings.animationOnShow)
            .addClass(r.settings.animationOnHide),
          n(i)
            .removeClass("focus")
            .find(".focus")
            .removeClass("focus");
      });
    var p = function () {
      n("body").addClass("no-scroll"),
        r.settings.overlay &&
        (n(t).append("<div class='nav-overlay-panel'></div>"),
          n(t)
            .find(".nav-overlay-panel")
            .css("background-color", r.settings.overlayColor)
            .fadeIn(300)
            .on("click touchstart", function (n) {
              r.hideOffcanvas();
            }));
    },
      g = function () {
        n("body").removeClass("no-scroll"),
          r.settings.overlay &&
          n(t)
            .find(".nav-overlay-panel")
            .fadeOut(400, function () {
              n(this).remove();
            });
      };
    (r.showOffcanvas = function () {
      p(),
        "left" == r.settings.offCanvasSide
          ? n(t)
            .find(".nav-menus-wrapper")
            .css("transition-property", "left")
            .addClass("nav-menus-wrapper-open")
          : n(t)
            .find(".nav-menus-wrapper")
            .css("transition-property", "right")
            .addClass("nav-menus-wrapper-open");
    }),
      (r.hideOffcanvas = function () {
        n(t)
          .find(".nav-menus-wrapper")
          .removeClass("nav-menus-wrapper-open")
          .on(
            "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
            function () {
              n(t)
                .find(".nav-menus-wrapper")
                .css("transition-property", "none")
                .off();
            }
          ),
          g();
      }),
      (r.toggleOffcanvas = function () {
        C() <= r.settings.mobileBreakpoint &&
          (n(t)
            .find(".nav-menus-wrapper")
            .hasClass("nav-menus-wrapper-open")
            ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
            : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")));
      }),
      (r.toggleSearch = function () {
        "none" ==
          n(t)
            .find(".nav-search")
            .find("form")
            .css("display")
          ? (n(t)
            .find(".nav-search")
            .find("form")
            .fadeIn(200),
            n(t)
              .find(".nav-search")
              .find("input")
              .focus())
          : (n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(200),
            n(t)
              .find(".nav-search")
              .find("input")
              .blur());
      }),
      (r.initNavigationMode = function (i) {
        r.settings.responsive
          ? (i <= r.settings.mobileBreakpoint &&
            u > r.settings.mobileBreakpoint &&
            (n(t)
              .addClass("navigation-portrait")
              .removeClass("navigation-landscape"),
              S(),
              s !== a && r.callback("onPortrait")),
            i > r.settings.mobileBreakpoint &&
            d <= r.settings.mobileBreakpoint &&
            (n(t)
              .addClass("navigation-landscape")
              .removeClass("navigation-portrait"),
              k(),
              g(),
              r.hideOffcanvas(),
              s !== a && r.callback("onLandscape")),
            (u = i),
            (d = i))
          : (n(t).addClass("navigation-landscape"),
            k(),
            s !== a && r.callback("onLandscape"));
      });
    var b = function () {
      n("html").on("click.body touchstart.body", function (i) {
        0 === n(i.target).closest(".navigation").length &&
          (n(t)
            .find(".nav-submenu")
            .fadeOut(),
            n(t)
              .find(".focus")
              .removeClass("focus"),
            n(t)
              .find(".nav-search")
              .find("form")
              .fadeOut());
      });
    },
      C = function () {
        return (
          i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        );
      },
      w = function () {
        n(t)
          .find(".nav-menu")
          .find("li, a")
          .off(l)
          .off(f)
          .off(c);
      },
      O = function () {
        if (C() > r.settings.mobileBreakpoint) {
          var i = n(t).outerWidth(!0);
          n(t)
            .find(".nav-menu")
            .children("li")
            .children(".nav-submenu")
            .each(function () {
              n(this)
                .parent()
                .position().left +
                n(this).outerWidth() >
                i
                ? n(this).css("right", 0)
                : n(this).css("right", "auto");
            });
        }
      },
      y = function () {
        function i(i) {
          var e = n(i)
            .children(".megamenu-tabs-nav")
            .children("li"),
            a = n(i).children(".megamenu-tabs-pane");
          n(e).on("click.tabs touchstart.tabs", function (i) {
            i.stopPropagation(),
              i.preventDefault(),
              n(e).removeClass("active"),
              n(this).addClass("active"),
              n(a)
                .hide(0)
                .removeClass("active"),
              n(a[n(this).index()])
                .show(0)
                .addClass("active");
          });
        }
        if (n(t).find(".megamenu-tabs").length > 0)
          for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
            i(e[a]);
      },
      k = function () {
        w(),
          h(),
          navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
            ? n(t)
              .find(".nav-menu, .nav-dropdown")
              .children("li")
              .children("a")
              .on(l, function (e) {
                if (
                  (r.hideSubmenu(
                    n(this)
                      .parent("li")
                      .siblings("li"),
                    r.settings.effect
                  ),
                    n(this)
                      .closest(".nav-menu")
                      .siblings(".nav-menu")
                      .find(".nav-submenu")
                      .fadeOut(r.settings.hideDuration),
                    n(this).siblings(".nav-submenu").length > 0)
                ) {
                  if (
                    (e.stopPropagation(),
                      e.preventDefault(),
                      "none" ==
                      n(this)
                        .siblings(".nav-submenu")
                        .css("display"))
                  )
                    return (
                      r.showSubmenu(n(this).parent("li"), r.settings.effect),
                      O(),
                      !1
                    );
                  if (
                    (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                      "_blank" === n(this).attr("target") ||
                      "blank" === n(this).attr("target"))
                  )
                    i.open(n(this).attr("href"));
                  else {
                    if (
                      "#" === n(this).attr("href") ||
                      "" === n(this).attr("href") ||
                      "javascript:void(0)" === n(this).attr("href")
                    )
                      return !1;
                    i.location.href = n(this).attr("href");
                  }
                }
              })
            : n(t)
              .find(".nav-menu")
              .find("li")
              .on(f, function () {
                r.showSubmenu(this, r.settings.effect), O();
              })
              .on(c, function () {
                r.hideSubmenu(this, r.settings.effect);
              }),
          r.settings.hideSubWhenGoOut && b();
      },
      S = function () {
        w(),
          h(),
          r.settings.visibleSubmenusOnMobile
            ? n(t)
              .find(".nav-submenu")
              .show(0)
            : (n(t)
              .find(".submenu-indicator")
              .removeClass("submenu-indicator-up"),
              r.settings.submenuIndicator && r.settings.submenuIndicatorTrigger
                ? n(t)
                  .find(".submenu-indicator")
                  .on(l, function (i) {
                    return (
                      i.stopPropagation(),
                      i.preventDefault(),
                      r.hideSubmenu(
                        n(this)
                          .parent("a")
                          .parent("li")
                          .siblings("li"),
                        "slide"
                      ),
                      r.hideSubmenu(
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .children("li"),
                        "slide"
                      ),
                      "none" ==
                        n(this)
                          .parent("a")
                          .siblings(".nav-submenu")
                          .css("display")
                        ? (n(this).addClass("submenu-indicator-up"),
                          n(this)
                            .parent("a")
                            .parent("li")
                            .siblings("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.showSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li"),
                            "slide"
                          ),
                          !1)
                        : (n(this)
                          .parent("a")
                          .parent("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                          void r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li"),
                            "slide"
                          ))
                    );
                  })
                : n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function (e) {
                    if (
                      (e.stopPropagation(),
                        // e.preventDefault(),
                        r.hideSubmenu(
                          n(this)
                            .parent("li")
                            .siblings("li"),
                          r.settings.effect
                        ),
                        r.hideSubmenu(
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .children("li"),
                          "slide"
                        ),
                        "none" ==
                        n(this)
                          .siblings(".nav-submenu")
                          .css("display"))
                    )
                      return (
                        n(this)
                          .children(".submenu-indicator")
                          .addClass("submenu-indicator-up"),
                        n(this)
                          .parent("li")
                          .siblings("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        r.showSubmenu(n(this).parent("li"), "slide"),
                        !1
                      );
                    if (
                      (n(this)
                        .parent("li")
                        .find(".submenu-indicator")
                        .removeClass("submenu-indicator-up"),
                        r.hideSubmenu(n(this).parent("li"), "slide"),
                        "_blank" === n(this).attr("target") ||
                        "blank" === n(this).attr("target"))
                    )
                      i.open(n(this).attr("href"));
                    else {
                      if (
                        "#" === n(this).attr("href") ||
                        "" === n(this).attr("href") ||
                        "javascript:void(0)" === n(this).attr("href")
                      )
                        return !1;
                      i.location.href = n(this).attr("href");
                    }
                  }));
      };
    (r.callback = function (n) {
      s[n] !== a && s[n].call(t);
    }),
      r.init();
  }),
    (n.fn.navigation = function (i) {
      return this.each(function () {
        if (a === n(this).data("navigation")) {
          var e = new n.navigation(this, i);
          n(this).data("navigation", e);
        }
      });
    });
})(jQuery, window, document);



(function ($) {
  'use strict';

  var $window = $(window);

  if ($.fn.navigation) {
    $("#navigation1").navigation();
    $("#always-hidden-nav").navigation({
      hidden: true
    });
  }

  $window.on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

})(jQuery);

$(".moreless-button2").click(function () {
  $(".moretext2").slideToggle(10);
  if ($(".moreless-button2").text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});


$(".moreless-button3").click(function () {
  $(".moretext3").slideToggle(10);
  if ($(".moreless-button3").text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});


$(".moreless-button4").click(function () {
  $(".moretext4").slideToggle(10);
  if ($(".moreless-button4").text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});


$(".moreless-button5").click(function () {
  $(".moretext5").slideToggle(10);
  if ($(".moreless-button5").text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});



$(".moreless-button6").click(function () {
  $(".moretext6").slideToggle(10);
  if ($(".moreless-button6").text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});
$(".moreless-button").click(function () {
  $(".moretext").slideToggle(10);
  if ($(".moreless-button").text() == "Read More") {
    $(this).text("Read Less");
  } else {
    $(this).text("Read More");
  }
});

$(document).ready(function () {
  $('.toggle').click(function () {
    $('.sidebar-contact').toggleClass('active')
    $('.toggle').toggleClass('active')
  })
})

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $('body').addClass('fixed');
    } else {
      $('body').removeClass('fixed');
    }
  });
});





// var versionUpdate = (new Date()).getTime();
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "https://api2.gtftech.com/scripts/queryform.min.ssl.js?v=" + versionUpdate;
// document.body.appendChild(script);

var AgentInfo = {
  "vAgentID": "4783 ",
  "vProject": "Kolte Patil Projects Pune - Platter",
  "vURL": "https://koltepatil-life-republic.in/",
  // "thankspageurl": "https://koltepatil-life-republic.in/thanks.htm",
};
//Needs to be duplicate in the case of multiple forms on the same page
//--------------------------------------------------------------------------------------//
$('#preferedtime').hide();

$("#SubmitQuery").click(function () {
  var FormInfo = {
    "SenderControlID": "qSenderName",
    "SenderControlMobileID": "qMobileNo",
    "SenderControlEmailID": "qEmailID",
    "SenderControlMsgID": "qMessage"
  };

  let email = btoa($("#qEmailID").val())
  let phone = btoa($("#qMobileNo").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`


  SubmitQueryData(AgentInfo, FormInfo);
});

$("#SubmitQuerymodal").click(function () {
  var FormInfo = {
    "SenderControlID": "qSenderNamemodal",
    "SenderControlMobileID": "qMobileNomodal",
    "SenderControlEmailID": "qEmailIDmodal",
    "SenderControlMsgID": "qMessagemodal"
  };

  let email = btoa($("#qEmailIDmodal").val())
  let phone = btoa($("#qMobileNomodal").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});
$("#SubmitQuerymodal6").click(function () {
  var FormInfo = {
    "SenderControlID": "qSenderNamemodal6",
    "SenderControlMobileID": "qMobileNomodal6",
    "SenderControlEmailID": "qEmailIDmodal6",
    "SenderControlMsgID": "qMessagemodal6"
  };

  let email = btoa($("#qEmailIDmodal6").val())
  let phone = btoa($("#qMobileNomodal6").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});

$("#SubmitQuerymodalonload").click(function () {

  gtag('set', 'user_data', {
    "email": "qEmailIDmodalonload",
    "phone_number": "qMobileNomodalonload",
  }
  );

  var AgentInfo = {
    "vAgentID": "4783",
    "vProject": "Kolte Patil Projects Pune - Platter",
    "vURL": "https://koltepatil-life-republic.in/",
    // "thankspageurl": "https://koltepatil-life-republic.in/thanks.htm",
  };
  var FormInfo = {
    "SenderControlID": "qSenderNamemodalonload",
    "SenderControlMobileID": "qMobileNomodalonload",
    "SenderControlEmailID": "qEmailIDmodalonload",
    "SenderControlMsgID": "qMessagemodalonload"
  };

  let email = btoa($("#qEmailIDmodalonload").val())
  let phone = btoa($("#qMobileNomodalonload").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});

$("#SubmitQuerymodal7").click(function () {

  gtag('set', 'user_data', {
    "email": "qEmailIDmodal7",
    "phone_number": "qMobileNomodal7",
  }
  );

  var AgentInfo = {
    "vAgentID": "4783",
    "vProject": "Kolte Patil Canvas Pune - Platter",
    "vURL": "https://koltepatil-life-republic.in/",
    // "thankspageurl": "https://koltepatil-life-republic.in/thanks.htm",
  };
  var FormInfo = {
    "SenderControlID": "qSenderNamemodal7",
    "SenderControlMobileID": "qMobileNomodal7",
    "SenderControlEmailID": "qEmailIDmodal7",
    "SenderControlMsgID": "qMessagemodal7"
  };

   let email = btoa($("#qEmailIDmodal7").val())
  let phone = btoa($("#qMobileNomodal7").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});
$("#SubmitQuerymodal8").click(function () {

  gtag('set', 'user_data', {
    "email": "qEmailIDmodal8",
    "phone_number": "qMobileNomodal8",
  }
  );

  var AgentInfo = {
    "vAgentID": "4783",
    "vProject": "Kolte Patil Duet Pune - Platter",
    "vURL": "https://koltepatil-life-republic.in/",
    // "thankspageurl": "https://koltepatil-life-republic.in/thanks.htm",
  };
  var FormInfo = {
    "SenderControlID": "qSenderNamemodal8",
    "SenderControlMobileID": "qMobileNomodal8",
    "SenderControlEmailID": "qEmailIDmodal8",
    "SenderControlMsgID": "qMessagemodal8"
  };

   let email = btoa($("#qEmailIDmodal8").val())
  let phone = btoa($("#qMobileNomodal8").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});
$("#SubmitQuerymodal9").click(function () {

  gtag('set', 'user_data', {
    "email": "qEmailIDmodal9",
    "phone_number": "qMobileNomodal9",
  }
  );

  var AgentInfo = {
    "vAgentID": "4783",
    "vProject": "Kolte Patil Qrious Pune - Platter",
    "vURL": "https://koltepatil-life-republic.in/",
    // "thankspageurl": "https://koltepatil-life-republic.in/thanks.htm",
  };
  var FormInfo = {
    "SenderControlID": "qSenderNamemodal9",
    "SenderControlMobileID": "qMobileNomodal9",
    "SenderControlEmailID": "qEmailIDmodal9",
    "SenderControlMsgID": "qMessagemodal9"
  };

   let email = btoa($("#qEmailIDmodal9").val())
    let phone = btoa($("#qMobileNomodal9").val())
    AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});


$("#SubmitQueryFooter").click(function () {

  gtag('set', 'user_data', {
    "email": "qEmailIDFooter",
    "phone_number": "qMobileNoFooter",
  }
  );

  var FormInfo = {
    "SenderControlID": "qSenderNameFooter",
    "SenderControlMobileID": "qMobileNoFooter",
    "SenderControlEmailID": "qEmailIDFooter",
    "SenderControlMsgID": "qMessageFooter"
  };

   let email = btoa($("#qEmailIDFooter").val())
  let phone = btoa($("#qMobileNoFooter").val())
  AgentInfo.thankspageurl = `https://koltepatil-life-republic.in/thanks.htm?gtem=${email}&gtph=${phone}`

  SubmitQueryData(AgentInfo, FormInfo);
});

$('.without-caption').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});

$('.with-caption').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  mainClass: 'mfp-with-zoom mfp-img-mobile',
  image: {
    verticalFit: true,
    titleSrc: function (item) {
      return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank"></a>';
    }
  },
  zoom: {
    enabled: true
  }
});

$(".nav-link-custom").on("click", function (e) {
  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top - 50,
      },
      100,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});

$(document).ready(function () {
  $(".nav-item-2").click(function () {
    $(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open");
  });
});

$(window).ready(function () {
  setTimeout(function () {
    $('#form6').modal("show")
  }, 60000)
});

$('.gallery-container .gallay-img_tag').hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
})