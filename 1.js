// function qidir(ls,harf){
//     let res=[]
//     for(let i=0; i<ls.length; i++){
//         if(ls[i].includes(harf)){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(qidir(["abc","bcd","aaaa","cbc"],"a"))
class tekshir{
    static res=[]
    constructor(ls,harf){
        this.ls=ls
        this.harf=harf
    }
    natija(){
        
        for(let i=0; i<this.ls.length; i++){
            if(this.ls[i].includes(this.harf)){
                tekshir.res.push(i)
            }
        }
        console.log(tekshir.res)
    }

}
const res1=new tekshir(["abc","bcd","aaaa","cbc"],"a")
res1.natija()