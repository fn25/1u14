class BookList{
    
    constructor(){
        this.books=[]
        
        this.favoriteBook=""
    }
    addBook(title,author){
        let dict={title:title,author:author,favoriteBook:this.favoriteBook}
        this.books.push(dict)
        console.log(`${title} ruyxatga qushildi`)
}
    setFavoriteBook(title){
        for(let x of this.books){
            if(x.title==title){
                x.favoriteBook=true
                console.log(`"${x.title}" favorite 'true' ga uzgardi`)
                return 
            }
        }
        return "Topilmadi"
    }
    getBooksList(){
        if(this.books.length==0){
            console.log("Kitoblar yuq hozircha")
            return
        }
        console.log("****************Books*************************")
        for(let y of this.books){
            console.log(`Kitob nomi: ${y.title}, muallif: ${y.author}, favoriteBook: ${y.favoriteBook} `)
        }
    }
    getFavoriteBook(){
        console.log("*********Sevimli kitob***********")
        let sevimli=this.books.filter(x => x.favoriteBook==true)
        for(let i of sevimli){
            console.log(i)
        }
    }

}
const book1=new BookList()
book1.addBook("Yashamoq","Oy Xuya")
book1.addBook("Unreal Me","John Grey")
book1.getBooksList()
book1.setFavoriteBook("Unreal Me",true)
book1.getBooksList()

book1.getFavoriteBook()
