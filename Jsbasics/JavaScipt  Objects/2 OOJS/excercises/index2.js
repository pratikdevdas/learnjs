 /* Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK.

Try updating the live code below to recreate the finished example: */
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
   
 