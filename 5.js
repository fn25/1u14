class Circle{
    constructor(radius){
        this.radius=radius
    }
    getArea(){
        let S=Math.PI*this.radius**2
        console.log("Yuzasi:    "+S.toFixed(3))
    }
    getPerimeter(){
        let P=Math.PI*2*this.radius
        console.log("Perimetri: "+P.toFixed(3))
    }

}
const c1=new Circle(5)
c1.getArea()
c1.getPerimeter()
const c2=new Circle(9)
c2.getArea()
c2.getPerimeter()