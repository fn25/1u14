class Magic{
    constructor(){}
    replace(str,a,b){
        if(typeof str==="string"){
            let res=""
            for(let i=0; i<str.length; i++){
                if(str[i]==a){
                    res +=b
                }else{
                    res +=str[i]
                }
            }
            console.log(res)
            return 
        }else if(Array.isArray(str)){
            let res=[]
            for(let x of str){
                if(x==a){
                    res.push(b)
                }else{
                    res.push(x)
                }
            }
            console.log(res)
            return
        }
        else if(typeof str==="object"){
            let res={}
            for(let [x,y] of Object.entries(str)){
                if(y==a){
                    res[x]=b
                }else{
                    res[x]=y
                }
            }
            console.log(res)
            return
        }
        }
    length(data){
        if(typeof data=="string" || Array.isArray(data)){
            console.log(data.length)
        }else if(typeof data ==="object"){
            console.log(Object.keys(data).length)

        }else{
            console.log(String(data).length)
        }
    }
    toUpperCase(str){
        const kicik = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                       "n","o","p","q","r","s","t","u","v","w","x","y","z"]
        const katta = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                       "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        if(Array.isArray(str)){
           return str.map(s => this.toUpperCase(s))
        }
        let res=""
        for(let ch of str){
            if(kicik.includes(ch)){
                let index=kicik.indexOf(ch)
                res +=katta[index]
            }else{
                res +=ch
            }
        }
        console.log(res)
        return
    }
    repeat(data,n){
        let res=""
        for(let i=1; i<=n; i++){
            res +=data
            res +=" "
        }
        console.log(res)
        return
    }
    count(str){
        let dict={}
        for(let harf of str){
            if(harf in dict){
                dict[harf] +=1
            }else{
                dict[harf] =1
            }
        }
        console.log(dict)
        return
    }
}
let m1=new Magic()
m1.replace("Salom","a","A")
m1.replace([2,3,6,5],3,90)
m1.replace({name:"Alisa",chef:"katta"},"Alisa","Jobr")
m1.length("Amakiakaligimizda")
m1.length({name:"Oryol",age:34})
m1.toUpperCase(["sfs,","sdew"])
m1.toUpperCase("fiBonanChi")
m1.repeat("Salom",4)
m1.repeat([34,54],4)
m1.count("fddsdfsfrefreferf")
m1.count(["sd",43,7,"sd"])
