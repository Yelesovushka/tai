'use strict';

(fuction () {
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

  buttonRed.addEventListener('click', function() {
    if (totalRed.classList.contains('hidden')) {
      totalRed.classList.remove('hidden');
      totalBlue.classList.add('hidden');
      totalGold.classList.add('hidden');

      card.classList.remove('card--gold');
      card.classList.remove('card--blue');
      card.classList.add('card--red');
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
    }
  });


})();