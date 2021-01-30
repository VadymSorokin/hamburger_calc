const SIZE_BIG = 'SIZE_BIG';
const SIZE_MEDIUM = 'SIZE_MEDIUM';
const SIZE_SMALL = 'SIZE_SMALL';

const TOPPING_CHEESE = 'TOPPING_CHEESE';
const TOPPING_CONDIMENT = 'TOPPING_CONDIMENT';
const TOPPING_MAYO = 'TOPPING_MAYO';
const TOPPING_POTATO = 'TOPPING_POTATO';
const TOPPING_SALAD = 'TOPPING_SALAD';

const hamburgerSize = {
	SIZE_BIG: {
		price: 100,
		calories: 40,
	},
	SIZE_MEDIUM: {
		price: 70,
		calories: 30,
	},
	SIZE_SMALL: {
		price: 50,
		calories: 20,
	},
};

const topping = {

	TOPPING_CHEESE: {
		price: 10,
		calories: 20,
	},
	TOPPING_CONDIMENT: {
		price: 15,
		calories: 0,
	},
	TOPPING_MAYO: {
		price: 20,
		calories: 5,
	},
	TOPPING_POTATO: {
		price: 15,
		calories: 10,
	},
	TOPPING_SALAD: {
		price: 20,
		calories: 50,
	},
};

Object.setPrototypeOf(hamburgerSize, topping);

function Hamburger(size) {
	if (size === SIZE_SMALL) {
		this.price = hamburgerSize.SIZE_SMALL.price;
		this.calories = hamburgerSize.SIZE_SMALL.calories;
	} else if (size === SIZE_MEDIUM) {
		this.price = hamburgerSize.SIZE_MEDIUM.price;
		this.calories = hamburgerSize.SIZE_MEDIUM.calories;
	} else if (size === SIZE_BIG) {
		this.price = hamburgerSize.SIZE_BIG.price;
		this.calories = hamburgerSize.SIZE_BIG.calories;
	}
	this.addTopping = function (topping) {
		if (topping === TOPPING_CHEESE) {
			this.price += hamburgerSize.TOPPING_CHEESE.price;
			this.calories += hamburgerSize.TOPPING_CHEESE.calories;
		} else if (topping === TOPPING_CONDIMENT) {
			this.price += hamburgerSize.TOPPING_CONDIMENT.price;
			this.calories += hamburgerSize.TOPPING_CONDIMENT.calories;
		} else if (topping === TOPPING_MAYO) {
			this.price += hamburgerSize.TOPPING_MAYO.price;
			this.calories += hamburgerSize.TOPPING_MAYO.calories;
		} else if (topping === TOPPING_POTATO) {
			this.price += hamburgerSize.TOPPING_POTATO.price;
			this.calories += hamburgerSize.TOPPING_POTATO.calories;
		} else if (topping === TOPPING_SALAD) {
			this.price += hamburgerSize.TOPPING_SALAD.price;
			this.calories += hamburgerSize.TOPPING_SALAD.calories;
		}
	};

	this.getPrice = function () {
		console.log('Total price is: ' + this.price + ' toogricks');
	};

	this.getCallories = function () {
		console.log('Total callories are: ' + this.calories + ' kCal');
	};
}

const hamburger = new Hamburger(SIZE_SMALL);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

hamburger.getPrice();
hamburger.getCallories();
