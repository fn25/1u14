class Kvadrat{
    constructor(son){
        this.son=son
        let res=""
        while(son>0){
            let n=son%10
            res +=n**2
            son=Math.floor(son/10)
        }
        let teskar=res.split("").reverse().join("")
        console.log(teskar)
    }
    
}
let kv1=new Kvadrat(3221)