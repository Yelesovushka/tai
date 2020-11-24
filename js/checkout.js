'use strict';

window.$ = window.jQuery;

$(document).ready(function () {
  (function() {
    var buttonSpa = document.querySelector('.info__place--spa');
    var buttonHome = document.querySelector('.info__place--home');

    var addressSpa = document.querySelector('.info__address-spa');
    var addressHome = document.querySelector('.info__address-home');

    buttonSpa.addEventListener('click', function() {
        if (addressSpa.classList.contains('hidden')) {
          addressSpa.classList.remove('hidden');
          addressHome.classList.add('hidden');
        }
    });

    buttonHome.addEventListener('click', function() {
      if (addressHome.classList.contains('hidden')) {
        addressHome.classList.remove('hidden');
        addressSpa.classList.add('hidden');
      }
    });

    var card = document.querySelector('.card');

    var buttonRed = document.querySelector('.card__button--red');
    var buttonBlue = document.querySelector('.card__button--blue');
    var buttonGold = document.querySelector('.card__button--gold');

    var totalRed = document.querySelector('.card__total--red');
    var totalBlue = document.querySelector('.card__total--blue');
    var totalGold = document.querySelector('.card__total--gold');

    var cards = document.querySelectorAll('.card__radio');

    buttonRed.addEventListener('click', function() {
      if (totalRed.classList.contains('hidden')) {
        totalRed.classList.remove('hidden');
        totalBlue.classList.add('hidden');
        totalGold.classList.add('hidden');

        card.classList.remove('card--gold');
        card.classList.remove('card--blue');
        card.classList.add('card--red');

        for (var i = 0; i < 3; i++) {
          cards[i].classList.add('js-red');
          cards[i].classList.remove('js-blue');
          cards[i].classList.remove('js-gold');
        }
      }
    });

    buttonBlue.addEventListener('click', function() {
      if (totalBlue.classList.contains('hidden')) {
        totalBlue.classList.remove('hidden');
        totalRed.classList.add('hidden');
        totalGold.classList.add('hidden');

        card.classList.remove('card--gold');
        card.classList.remove('card--red');
        card.classList.add('card--blue');

        for (var i = 0; i < 3; i++) {
          cards[i].classList.add('js-blue');
          cards[i].classList.remove('js-red');
          cards[i].classList.remove('js-gold');
        }
      }
    });

    buttonGold.addEventListener('click', function() {
      if (totalGold.classList.contains('hidden')) {
        totalGold.classList.remove('hidden');
        totalBlue.classList.add('hidden');
        totalRed.classList.add('hidden');

        card.classList.remove('card--red');
        card.classList.remove('card--blue');
        card.classList.add('card--gold');

        for (var i = 0; i < 3; i++) {
          cards[i].classList.add('js-gold');
          cards[i].classList.remove('js-red');
          cards[i].classList.remove('js-blue');
        }
      }
    });


  })();

  var popup = document.querySelector(".js-popup")

  var selector = document.querySelector(".js-phone");
  var im = new Inputmask("+7 (999) 999--9999");
  im.mask(selector);

  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };

  pickmeup('.js-date', {
    format: 'd-B-Y',
    min: new Date(),
    locale: 'ru'
  });

  // Дополнительный метод для валидации количества цифр в телефоне
	$.validator.addMethod('minlengthphone', function (value, elem, param) {
		return this.optional(elem) || value.replace(/\D+/g, '').length === param;
	});

	// // Переопределение метода валидации почты
	$.validator.methods.email = function (value, elem) {
	 	return this.optional(elem) || (/\w+@[a-zA-Z0-9-]+?\.[a-zA-Z]{2,6}$/).test(value);
	 };

  var form = document.querySelector('.js-form')

  $(form).validate({
    rules: {
      name: "required",
      phone: {
        required: true,
        minlengthphone: 11,
      },
      mail: {
        required: true,
        email: true,
      },
      address: "required",
      date: "required",
    },
    messages: {
      name: "Обязательное поле",
      phone: {
        required: "Обязательное поле",
        minlengthphone: "Некорректный номер"
      },
      mail: {
        required: "Обязательное поле",
        email: "Некорректный email",
      },
      address: "Обязательное поле",
      date: "Обязательное поле",
    },
    errorPlacement: function(error, element) {
      error.insertBefore(element);
    },
    errorClass: "error",
    validClass: "valid",
    highlight: function (element, errorClass, validClass) {
      $(element).closest('.info__input-wrap')
        .removeClass(validClass)
        .addClass(errorClass);
    },
    unhighlight: function (element, errorClass, validClass) {
      var $curWrap = $(element).closest('.info__input-wrap');
      $curWrap.removeClass(errorClass);
      if ($.trim($(element).val()) !== '') {
        $curWrap.addClass(validClass)
      }
    },
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if ($(this).valid()) {
      var data = new FormData(this)
      console.log(data)

      $.ajax({
          type: 'post',
          url: '#',
          data: data,
          success: function(response){
            // показать попап
            console.log("success")
          },
          error: function() {
            console.log("error")
          }
      });
    }
  })
});
