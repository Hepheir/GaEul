var result = document.querySelector('.js--a-res'),
	submit = document.querySelector('.js--a-sub');

submit.addEventListener('click', () => {
	'use strict';
	
	result.innerHTML = '';
	
	let conditions = [
			document.querySelector('.js--a-1').checked,
			document.querySelector('.js--a-2').checked,
			document.querySelector('.js--a-3').value
		],
		spchr = [
			'!',
			'@',
			'#',
			'$',
			'%',
			'^',
			'&',
			'*',
			'(',
			')',
			'_',
			'+'
		],
		card = [];

	for (var i = 0; i < 10; i++) {
		card[i] = i+'';
	}
	for (i = 10; i < 36; i++) {
		card[i] = String.fromCharCode(i + 87);
	}
	if ( conditions[0] ) {
		for(i = 36; i < 62; i++) {
			card[i] = String.fromCharCode(i + 29);
		}
	}
	if ( conditions[1] ) {
		let cl = card.length;
		for(i = cl; i < cl + spchr.length; i++) {
			card[i] = spchr[i - cl];
		}
	}
	
	for (i = 0; i < conditions[2]; i++) {
		result.innerHTML += card[Math.floor( Math.random() * card.length) ];
	}
});
