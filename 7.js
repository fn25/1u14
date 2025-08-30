class Box{
    static box=[]
    static id=1
    constructor(length,width,height){
        this.id=Box.counter++
        this.l=length
        this.w=width
        this.h=height
        Box.box.push(this)
    }
    getVolume(){
        return this.h*this.l*this.w
    }
    static totalVolume(){
        let sum=0
        for(let x of Box.box){
            sum+=x.getVolume()
        }
       return sum
    }

}
let box1=new Box(3,4,5)
let box2=new Box(2,3,6)
let box3=new Box(1,2,5)
console.log("hajmi 1> "+box1.getVolume())
console.log("hajmi 2> "+box2.getVolume())
console.log("hajmi 3> "+box3.getVolume())
console.log("Jami:   ", Box.totalVolume())