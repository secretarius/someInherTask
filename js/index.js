class GeometricFigure {
	constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    // get point() {
    //     return '(' + this.x + ', ' + this.y + ')';
    // }
   
}

class Circle extends GeometricFigure {
  constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
        
        
}
 toString() {
        return super.toString() + ', ' + this.radius;
    }
//         getCircleArena() {
//           return 2 * Math.PI * this.radius;
// }
}

let c = new Circle(2, 4, 5);
alert(c);
alert(c.getCircleArena());