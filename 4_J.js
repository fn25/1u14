

class BankAccount{
    
    constructor(ownerName,accountNumber){
        this.ow=ownerName
        this.bl=0
        this.ac=accountNumber
        let dict={ownername:this.ow,balance:this.bl,accountname:this.ac}
        this.arr=[dict]
    }
    deposit(ownerName,hisob){
        
        let index=this.arr.findIndex(acc => acc.ownername ===ownerName)
        if(index !=-1){
            this.arr[index].balance +=hisob
            console.log(`${ownerName} hisobiga ${hisob} ga ortdi joriy: ${this.arr[index].balance}`)
        }else{
            "Bunaqa foydalanuci topilmadi"
        }
    }
    withdraw(ownerName,kam){
        kam =-kam
        this.deposit(ownerName,kam)
    }
    showBalance(){
        for(let x of this.arr){
            console.log(`${x.ownername} hisobi>>>>>>>>>>>>>> ${x.balance}`)
        }
    }

}
const user1=new BankAccount("Ziyodulla",342453)
user1.deposit("Ziyodulla",500)
user1.showBalance()
user1.withdraw("Ziyodulla",300)
let user2=new BankAccount("Diyor",7845)
user2.withdraw("Diyor",400)
user2.showBalance()
user2.deposit("Diyor",900)
user2.showBalance()
