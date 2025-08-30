class TodoList{
    constructor(name){
        this.name=name
        this.ls=[]
    }
    addTask(nom){
        this.ls.push(nom)
        console.log(nom+"  Mufaqiyatlik qushildi")
    }
    displayTasks(){
        console.log("**********Elementlar************")
        for(let i of this.ls){
            console.log(i)
        }
    }
    removeTask(index){
        console.log("*********remove*************")
        this.ls.splice(index,1)
        console.log(index+"-foydalanuci ucirildi")
        
    }

}
const myTodoList=new TodoList()
myTodoList.addTask('Breakfast at 8:00 AM');
myTodoList.addTask('Meeting at 12:00 PM');
console.log(" ")
myTodoList.displayTasks();
myTodoList.removeTask(0);
myTodoList.displayTasks();
