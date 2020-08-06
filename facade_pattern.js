class Rectangle {
	contructor() {
		
	}
	
	draw() {
		console.log('Rectangle::draw()');
	}
}

class Square {
	contructor() {
		
	}
	
	draw() {
		console.log('Square::draw()');
	}
}

class Circle {
	contructor() {
		
	}
	
	draw() {
		console.log('Circle::draw()');
	}
}

class ShapeMaker {
	constructor() {
		this.circle = new Circle();
		this.square = new Square();
		this.rectangle = new Rectangle();
	}
	
	drawCircle() {
		this.circle.draw();
	}
	
	drawSquare() {
		this.square.draw();
	}
	
	drawRectangle() {
		this.rectangle.draw();
	}
}

const shapeMaker = new ShapeMaker();
shapeMaker.drawCircle();
shapeMaker.drawSquare();
shapeMaker.drawRectangle();