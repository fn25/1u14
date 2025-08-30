const TodoList={
    task:[],
    
    addTask(nom){
        this.task.push(nom)
        console.log(nom+"  Mufaqiyatlik qushildi")
    },
    displayTasks(){
        for(let i of this.task){
            console.log(i)
        }
        
    },
    removeTask(index){
        this.task.splice(index,1)
        console.log(index+"-foydalanuci ucirildi")
    }

}
TodoList.addTask('Breakfast at 8:00 AM');
TodoList.addTask('Meeting at 12:00 PM');
TodoList.displayTasks();
TodoList.removeTask(0);
TodoList.displayTasks();
