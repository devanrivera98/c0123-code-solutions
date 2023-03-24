/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(area, circumference, width) {
    super(area, circumference);
    this.width = width;
  }

  print() {
    console.log(`The width of the Square is ${this.width}`);
  }
}

const newSquare = new Square(0, 0, 3);
newSquare.print();
