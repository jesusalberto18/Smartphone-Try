class Cellphone {
	constructor(model, year, size, screen, cam, ram, storage) {
		this.model = model;
		this.year = year;
		this.size = size;
		this.screen = screen;
		this.cam = cam;
		this.ram = ram;
		this.storage = storage;
		this.turnOn = false;
		this.turnOff = false;
		this.takePicture = true;
		this.record = true;
	}

	// turn on
	turnItOnFunction() {
		if (this.turnOn === false) {
			let on = document.write(`You turned on your ${this.model}.`);
			this.turnOn === true;
			return on;
		}
	}

	// turn off
	turnItOffFunction() {
		if (this.turnOff === false) {
			let off = document.write(`You turned off your ${this.model}.`);
			this.turnOff === true;
			return off;
		}	
	}

	// reset
	resetFunction() {
		if (this.turnOn === true) {
			let resetting = document.write(`Your ${this.model} is now resetting.`);
			return resetting;
		} else {
			let off = document.write(`Your ${this.model} is currently turned off.`);
			return off;
		}
	}

	// take pictures
	takePictureFunction() {
		if (this.takePicture === true) {
			let picture = document.write(`You took a picture with a ${this.cam}.`);
			return picture;
		}
	}