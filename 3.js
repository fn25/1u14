class Pascal{
    constructor(n){
        this.n=n}
    show(){
        let result=[]
        let oxir=[1]
        result.push(oxir)
        for(let i=0; i<this.n; i++){
            let arr=[1]
            for(let j=0; j<oxir.length-1; j++){
                arr.push(oxir[j]+oxir[j+1])

            }
            arr.push(1)
            oxir=arr
            result.push(oxir)
        }
        let oxirgi=result[this.n-1].join(" ").length;
        
        for(let x of result){
            const current=x.join(" ")
            let count=Math.floor((oxirgi-current.length)/2+1)
            if(count<0) count=0
            let space=" ".repeat(count)
            console.log(space+current)
        }
}}
const pascal1=new Pascal(5)
pascal1.show()
// const pascal2=new Pascal(20)
// pascal2.show()