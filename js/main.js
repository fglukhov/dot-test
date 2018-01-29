$(window).scroll(function () {

  var scrollPos = $(window).scrollTop();

  if (scrollPos > 50) {
    $("header").addClass("header-fixed");
  } else {
    $("header").removeClass("header-fixed");
  }

});

$(document).ready(function () {

  $("#orderForm").submit(function() {
    if ($(this).valid()) {
      var form = $(this);
      $.ajax({
        type: "POST",
        url: "http://test.fglukhov.tmweb.ru/dot-test/order.php",
        data: {
          subject: "ДОТ-тест, заявка на тест",
          name: $("#order_form_name").val(),
          phone: $("#order_form_phone").val(),
          email: $("#order_form_email").val()
        }
      }).done(function() {

        formSuccess(form);

      });
      return false;
    }
  });

  $("#questionForm").submit(function() {
    if ($(this).valid()) {
      var form = $(this);
      $.ajax({
        type: "POST",
        url: "http://test.fglukhov.tmweb.ru/dot-test/order.php",
        data: {
          subject: "ДОТ-тест, заявка на вопрос",
          name: $("#question_form_name").val(),
          phone: $("#question_form_phone").val(),
          email: $("#question_form_email").val()
        }
      }).done(function() {

        formSuccess(form);

      });
      return false;
    }
  });

  $("#infoForm").submit(function() {
    if ($(this).valid()) {
      var form = $(this);
      $.ajax({
        type: "POST",
        url: "http://test.fglukhov.tmweb.ru/dot-test/order.php",
        data: {
          subject: "ДОТ-тест, заявка на получуние подробной информации",
          name: $("#info_form_name").val(),
          phone: $("#info_form_phone").val(),
          email: $("#info_form_email").val()
        }
      }).done(function() {

        formSuccess(form);

      });
      return false;
    }
  });

  $("#appointmentForm").submit(function() {
    if ($(this).valid()) {
      var form = $(this);
      $.ajax({
        type: "POST",
        url: "http://test.fglukhov.tmweb.ru/dot-test/order.php",
        data: {
          subject: "ДОТ-тест, заявка на забор материала",
          name: $("#appointment_form_name").val(),
          phone: $("#appointment_form_phone").val(),
          email: $("#appointment_form_email").val()
        }
      }).done(function() {

        formSuccess(form);

      });
      return false;
    }
  });

  $("#questionForm2").submit(function() {
    if ($(this).valid()) {
      var form = $(this);
      $.ajax({
        type: "POST",
        url: "http://test.fglukhov.tmweb.ru/dot-test/order.php",
        data: {
          subject: "ДОТ-тест, вопрос с сайта",
          name: $("#question_2_form_name").val(),
          phone: $("#question_2_form_phone").val(),
          email: $("#question_2_form_email").val(),
          message: $("#question_2_form_message").val()
        }
      }).done(function() {

        formSuccess(form);

      });
      return false;
    }
  });

  // Patents slider

  $(".patents-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 909,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Fancybox

  $("a.fancybox").fancybox();

  var scrollPos = $(window).scrollTop();

  if (scrollPos > 50) {
    $("header").addClass("header-fixed");
  } else {
    $("header").removeClass("header-fixed");
  }

  // Anchors

  $("a").click(function () {

    if ($("a[name='" + $(this).attr("href").replace("#","") + "']").length) {
      var aTarget = $("a[name='" + $(this).attr("href").replace("#","") + "']");
      $("html,body").animate({
        scrollTop: aTarget.offset().top - 70
      },1000)
    }
  });

  // Forms

  $('select').selectpicker();


  $('.input-numeric').bind('keyup paste', function(){
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  if ($("input:text").length) {
    $("input:text").each(function() {
      if ($(this).val()) {
        $(this).prev(".placeholder").hide();
      }
    });
  }

  if ($("textarea").length) {
    $("textarea").each(function() {
      if ($(this).val()) {
        $(this).prev(".placeholder").hide();
      }
    });
  }

  $("body").on("focus","input, textarea",function() {
    var el = $(this);

    if (el.parent().find(".placeholder").length) {
      var placeholder = el.parent().find(".placeholder");

      placeholder.hide();

    }

  });

  $("body").on("blur","input, textarea",function() {
    var el = $(this);

    if (el.parent().find(".placeholder").length) {
      var placeholder = el.parent().find(".placeholder");

      if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
        placeholder.show();
      }

    }

  });

  $("body").on("click",".placeholder",function(e) {
    if ($(this).parent().find("input").length) {
      $(this).parent().find("input").trigger("focus");
    }
    if ($(this).parent().find("textarea").length) {
      $(this).parent().find("textarea").trigger("focus");
    }
  })

  $("input.input-phone").mask("+7 (999) 999-99-99");

  validateForms();

});

// Contacts map

function initMap() {

  var myLatLng = {lat: 55.756902, lng: 37.558199};
  var myCenter = {lat: 55.757902, lng: 37.550199};

  var map = new google.maps.Map(document.getElementById('contacts-map'), {
    zoom: 15,
    center: myCenter,
    styles: [
      {
        "featureType": "all",
        "stylers": [
          { "saturation": -30 }
        ]
      }
    ]

  });

  google.maps.event.addDomListener(window, "load", function() {
    if ($("#mobile-indicator").css("display") == "block") {
      map.setCenter({lat: 55.756902, lng: 37.558199});
    } else {
      map.setCenter({lat: 55.757902, lng: 37.550199});
    }

    if ($("#mobile-indicator").css("display") == "block") {

      infowindow.setOptions({
        maxWidth: 280
      })

    }

  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
    icon: "images/map-pin.png"
  });
}

function validateForms() {

  jQuery.validator.addClassRules('phone-email-group', {
    require_from_group: [1, ".phone-email-group"]
  });

  $("form").each(function() {

    form = $(this);

    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        element.closest(".form-group").addClass("form-group-error");
        if (element[0].tagName == "SELECT") {
          element.parents(".btn-group").addClass("btn-group-error");
          error.insertAfter(element.parents(".btn-group"));
        } else {
          if (element.attr("type") == "checkbox") {
            element.siblings("label").addClass("checkbox-label-error")
          } else {
            error.insertAfter(element);
          }
        }

      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass);
        $(element).closest(".form-group").removeClass("form-group-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".btn-group").removeClass("btn-group-error");
          $(element).parents(".btn-group").next("label.error").remove();
        } else {
          $(element).next(".error").remove();
          if ($(element).attr("type") == "checkbox") {
            $(element).siblings("label").removeClass("checkbox-label-error")
          }
        }
      },
      invalidHandler: function(form, validatorcalc) {
        var errors = validatorcalc.numberOfInvalids();
        if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
          //validatorcalc.errorList[0].element.focus();
        }
      }
    });

    if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
      $(this).find("input.password-repeat").rules('add', {
        equalTo: "#"+form.find("input.password").attr("id")
      });
    }

  });

}

jQuery.extend(jQuery.validator.messages, {
  required: "Заполните поле.",
  remote: "Please fix this field.",
  email: "Введите правильный e-mail.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Пароли не совпадают.",

  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function formSuccess(form) {

  form.find(".form-group input, .form-group textarea").val("");
  form.find(".placeholder").show();
  $("#successModal").modal("show");
  form.closest(".modal").modal("hide");
}