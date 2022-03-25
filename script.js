class Usuario {
    constructor(firstName, lastName, bookName, pet){
        this.firstName = firstName;
        this.lastName = lastName;
        this.book = [{name: bookName, author: bookAuthor}];
        this.pet = [pet];
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    adddPet(newPet){
        this.pet.push(newPet);
        console.log(`$(newPet) agregaste una nueva mascota.`);
    }
    getPet(){
        return this.pet;
    }
    countPet(){
        let petCount = this.pet.length;
        return petCount;
    }
    addBook(bookName, bookAuthor){
        this.book.push({name: bookName, author: bookAuthor});
        console.log("Agregaste el libro", `{name: ${bookName}, autor:${bookAuthor}}`);
    }
    getBook(){
        return this.book;
    }
    getBookNames(){
        for(let obj of this.book){
            let bookArray = [];
            bookArray.push(obj.name);
            console.log(bookArray);
        }
    }
}