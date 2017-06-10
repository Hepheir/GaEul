'use strict';

var a_items = document.querySelectorAll('.js-a-item'),
	a_targets = document.querySelectorAll('.js-a-target'),
	
	logTable = document.querySelector('.log-table tbody') || document.querySelector('.log-table'),
	
	userInput = document.querySelector('.js-g-input'),
	userSubmit = document.querySelector('.js-g-submit'),
	userResult = document.querySelector('.js-g-result'),
	
	settingNumbers = document.querySelector('.js-s-input1'),
	settingCards = document.querySelector('.js-s-input2'),
	settingApply = document.querySelector('.js-s-submit');


for (var i = 0; i < a_items.length; i++) {
	a_items[i].addEventListener('change', evt => {
		swapSection(evt.target.id);
	});
}

function swapSection(id) {
	let isHiddenLeft = true;
	
	id = id.match(/[0-9]+/) - 1;
	
	a_items[id].checked = true;
	
	for (let i = 0; i < a_targets.length; i++) {
		if (i == id) {
			a_targets[i].classList.remove('content--left');
			a_targets[i].classList.remove('content--right');
			isHiddenLeft = false;
			continue;
		}
		if (isHiddenLeft) {
			a_targets[i].classList.add('content--left');
			a_targets[i].classList.remove('content--right');
		} else {
			a_targets[i].classList.remove('content--left');
			a_targets[i].classList.add('content--right');
		}
		
		if (id == 1)
			userInput.focus();
	}
}

class bullsAndCows {
	constructor() {
		this.numbers = 10; // max : 36
		this.cards = 4;
		this.randomCards = [];
		
		this.tries = 0;
		
		this.useAlphabet = true;

		this.init = this.init.bind(this);
		this.guess = this.guess.bind(this);
		this.config = this.config.bind(this);
		this.createLog = this.createLog.bind(this);

		this.init();
	}

	init() {
		let n_container = [];
		
		this.randomCards = [];

		for (let i = 0; i < this.numbers; i++) {
			if (i >= 10 && this.useAlphabet) {
				// 97: a, 65: A
				n_container.push(String.fromCharCode(87 + i));

				continue;
			}
			n_container.push(i+'');
		}

		for (let r, i = 0; i < this.cards; i++) {
			r = Math.round(Math.random()*1000) % (this.numbers - i);
			this.randomCards.push(n_container[r]);
			n_container.splice(r,1);
		}

		return {
			'cards' : this.cards,
			'numbers' : this.numbers,
			'randomCards' : this.randomCards
		};
	}

	guess(a) {
		a = a.match(/[0-9a-zA-Z]+/g).join('');
		a = a.toLowerCase();

		if (a.length != this.cards)
			return false;
		
		this.tries++;
		
		let user_input = a.split(''),
			
			strikes = 0,
			balls = 0;

		for (let i = 0; i < this.cards; i++) {
			for (let j = 0; j < this.cards; j++) {
				if (user_input[i] == this.randomCards[j]) {
					if (i == j)
						strikes++;
					else
						balls++;
				}
			}
		}

		return {
			'input' : a,
			'strikes' : strikes,
			'balls' : balls,
			'allclear' : strikes == this.cards
		};
	}

	config(a, b, c) {
		a = parseInt(a);
		b = parseInt(b);
		c = typeof c == "boolean" ? c : true;
		let check = [
			a > 0 && a <= 36,
			b >  0 && b <= a
		]
		console.log(check, a ,b );
		for (let i = 0; i < check.length; i++){
			if (check[i] != true)
				return false;
		}
		
		this.numbers = a;
		this.cards = b;
		this.useAlphabet = c;

		this.init();

		return {
			'numbers' : this.numbers,
			'cards' : this.cards,
			'useAlphabet' : this.useAlphabet
		};
	}
	
	createLog(a, b, c) {
		let row = document.createElement('tr'),
			d = new Date();
		
		row.className = 'row';
	
		let classLists = [
				'data data-index',
				'data',
				'data sub-data',
				'data sub-data',
				'data sub-data'
			],
			cellData = [
				this.tries, //index
				a, //input
				b, //strikes
				c, //balls
				d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()
			];

		for (let i = 0; i < 5; i++) {
			let cell = document.createElement('td');
			
			cell.className = classLists[i];
			cell.innerHTML = cellData[i];
			
			row.appendChild(cell);
		};
		
		return row;
	}
}
var game = new bullsAndCows();

// 유저 입력시

userSubmit.addEventListener('click', onUserGuesses);
userInput.addEventListener('keypress', evt => {
	if (evt.keyCode == 13)
		onUserGuesses();
});

function onUserGuesses() {
	let result = game.guess(userInput.value),
		newData;
	
	if (result == false) {
		userResult.innerHTML = '>>> Error: Invalid input';
		return false;
	}
	
	newData = game.createLog(result.input, result.strikes, result.balls);
	
	userResult.innerHTML = `>>> Result for [${result.input}] : ${result.strikes} Strikes and, ${result.balls} Balls`;
	
	if (result.allclear) {
		userResult.innerHTML += '<br><br>>>>Congratulation.';
		logTable.appendChild(game.createLog('initialized'),'', '');
	}
	
	logTable.appendChild(newData);
	
	userInput.value = '';
}

// 유저 세팅시

settingApply.addEventListener('click', () => {
	if (!game.config(settingNumbers.value, settingCards.value)) {
		alert('초기화 실패했음');
		return false;
	}
	else {
		userInput.placeholder = `${settingNumbers.value}진수 ${settingCards.value}자리`;
		swapSection('a-2');
		logTable.appendChild(game.createLog('initialized',settingNumbers.value+'진수', settingCards.value+'자리'));
	}
});