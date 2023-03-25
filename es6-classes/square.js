/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  print() {
    return `${super.print()}, width: ${this.width}`;
  }
}

const newSquare = new Square(3);
console.log(newSquare.print());
