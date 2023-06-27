(function ($) {
  "use strict";

  var $document = $(document),
    $window = $(window),
    forms = {
      contactForm: $("#contactForm"),
      questionForm: $("#questionForm"),
      bookingForm: $("#bookingForm"),
      requestForm: $("#requestForm"),
    };

  $document.ready(function () {
    // datepicker
    if ($(".datetimepicker").length) {
      $(".datetimepicker").datetimepicker({
        format: "DD/MM/YYYY",
        ignoreReadonly: true,
        icons: {
          time: "icon icon-clock",
          date: "icon icon-calendar2",
          up: "icon icon-top",
          down: "icon icon-bottom",
          previous: "icon icon-left",
          next: "icon icon-right",
          today: "icon icon-tick",
          clear: "icon icon-close",
          close: "icon icon-close",
        },
      });
    }
    if ($(".timepicker").length) {
      $(".timepicker").datetimepicker({
        format: "LT",
        ignoreReadonly: true,
        icons: {
          time: "icon icon-clock",
          up: "icon icon-top",
          down: "icon icon-bottom",
          previous: "icon icon-left",
          next: "icon icon-right",
        },
      });
    }

    // contact page form
    if (forms.contactForm.length) {
      var $contactform = forms.contactForm;
      $contactform.validate({
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          phone: {
            required: true,
            number: true,
            minlength: 10,
          },
        },
        messages: {
          name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters",
          },
          phone: {
            required: "Please enter your phone no.",
            minlength: "Please enter 10 digit no. only",
          },
        },
        submitHandler: function submitHandler(form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),

            success: function success() {
              $(".successform", $contactform).fadeIn();
              $contactform.get(0).reset();
            },
            error: function error() {
              $(".errorform", $contactform).fadeIn();
            },
          });
        },
      });
    }

    // question form
    if (forms.questionForm.length) {
      var $questionForm = forms.questionForm;
      $questionForm.validate({
        rules: {
          name: {
            required: true,
            minlength: 2,
          },
          messages: {
            required: true,
            minlength: 20,
          },
          phone: {
            required: true,
            number: true,
            minlength: 10,
          },
        },
        messages: {
          name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters",
          },
          message: {
            required: "Please enter message",
            minlength: "Your message must consist of at least 20 characters",
          },
          phone: {
            required: "Please enter your phone no.",
            minlength: "Please enter 10 digit no. only",
          },
        },
        submitHandler: function submitHandler(form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),

            success: function success() {
              $(".successform", $questionForm).fadeIn();
              $questionForm.get(0).reset();
            },
            error: function error() {
              $(".errorform", $questionForm).fadeIn();
            },
          });
        },
      });
    }

    // booking form
    if (forms.bookingForm.length) {
      var $bookingForm = forms.bookingForm;
      $bookingForm.validate({
        rules: {
          bookingname: {
            required: true,
            minlength: 2,
          },
          bookingmessages: {
            required: true,
            minlength: 20,
          },
          bookingphone: {
            required: true,
            number: true,
            minlength: 10,
          },
        },
        messages: {
          bookingname: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters",
          },
          bookingmessage: {
            required: "Please enter message",
            minlength: "Your message must consist of at least 20 characters",
          },
          bookingphone: {
            required: "Please enter your phone no.",
            minlength: "Please enter 10 digit no. only",
          },
        },
        submitHandler: function submitHandler(form) {
          $(form).ajaxSubmit({
            type: "POST",
            url: "",
            data: $(form).serialize(),
            success: function success() {
              $(".successform", $bookingForm).fadeIn();
              $bookingForm.get(0).reset();
            },
            error: function error() {
              $(".errorform", $bookingForm).fadeIn();
            },
          });
        },
      });
    }

    // request form
    if (forms.requestForm.length) {
      var $requestForm = forms.requestForm;
      $requestForm.validate({
        rules: {
          requestname: {
            required: true,
            minlength: 2,
          },
          requestmessages: {
            required: true,
            minlength: 20,
          },
          requestphone: {
            required: true,
            number: true,
            minlength: 10,
          },
        },
        messages: {
          requestname: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters",
          },
          requestmessage: {
            required: "Please enter message",
            minlength: "Your message must consist of at least 20 characters",
          },
          requestphone: {
            required: "Please enter your email",
            minlength: "Please enter 10 digit no. only",
          },
        },
        submitHandler: function submitHandler(form) {
          $(form).ajaxSubmit({
            type: "POST",
            data: $(form).serialize(),
            url: "http://localhost:5500/HospitalServices.html",
            success: function success() {
              $(".successform", $requestForm).fadeIn();
              $requestForm.get(0).reset();
            },
            error: function error() {
              $(".errorform", $requestForm).fadeIn();
            },
          });
        },
      });
    }
  });
})(jQuery);
