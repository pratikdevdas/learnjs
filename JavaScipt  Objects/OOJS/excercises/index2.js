
class Shape {
    name;
    sides;
    sideLength;
  
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      const perimeter = this.sides * this.sideLength;
      console.log(
        `Its a ${this.name} with ${this.sides} sides and the perimeter is ${perimeter}`
      );
    }
  }
  
  class Square extends Shape{

    sideLength;

    constructor(name,sides,sideLength){
        super(name,sides)
        this.sideLength = sideLength
    }
    calcArea(){
        const area = this.sideLength * this.sideLength
        console.log(`the area of square is ${area}`)
    }
  }
   const square = new Square("Square", 4, 5);
  square.calcPerimeter();
  square.calcArea(5)
  
  const triangle = new Shape("Triangle", 3, 3);
  triangle.calcPerimeter();
   
 