'use strict';

class cowsAndBull {
  constructor() {
    this.numbers = 10; // max : 36
    this.cards = 4;

    this.useAlphabet = true;

    this.init = this.init.bind(this);
    this.guess = this.guess.bind(this);
    this.config = this.config.bind(this);

    this.init();
    console.log('use .guess(string) method to play!');
  }

  init() {
    this.n_container = [];
    this.card_container = [];

    for (var i = 0; i < this.numbers; i++) {
      if (i >= 10 && this.useAlphabet) {
        // 97: a, 65: A
        this.n_container.push(String.fromCharCode(87 + i));
        continue;
      }
      this.n_container.push(i+'');
    }

    for (var r, i = 0; i < this.cards; i++) {
      r = Math.round(Math.random()*1000) % (this.numbers - i);
      this.card_container.push(this.n_container[r]);
      this.n_container.splice(r,1);
    }
    console.log(`${this.cards} cards, from 0 to ${this.numbers - 1}.`);
  }

  guess(a) {
    if (a.length != this.cards)
      return 1;
    var user_input = a.split('');

    var strikes = 0;
    var balls = 0;

    for (var i = 0; i < this.cards; i++) {
      for (var j = 0; j < this.cards; j++) {
        if (user_input[i] == this.card_container[j]) {
          if (i == j)
            strikes++;
          else
            balls++;
        }
      }
    }
    if (strikes == this.cards) {
      console.log(`${this.cards} Strikes!!!\n...use .init() to restart the game!`);
      return 0;
    }

    console.log(`${strikes} Strikes and, ${balls} Balls`);
    return 0;
  }

  config(a, b, c) {
    // a: numbers, b: cards, (optional - c: useAlphabet)
    this.numbers = a;
    this.cards = b;
    this.useAlphabet = c || true;

    this.init();
    console.log('applied!\nnew card is ready!');
    return 0;
  }
}
