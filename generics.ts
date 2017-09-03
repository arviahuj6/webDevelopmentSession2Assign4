// Two different interfaces with differnt properties
interface Person {
    name: string;
    age: number;
}

interface Dummy{
    name: string;
    birthyear: number;
}

// Class takes Generics of <T> , and having Array to store the Data
class Parent<T> {
    children: T[];
    constructor(){
        this.children = [];
    }
}

// Calling of two different Interfaces
let personData: Person = {name: 'Arvind', age: 44};
let parents: Parent<Person> = new Parent<Person>();
// Store the Data into parents Objects
parents.children.push(personData);
console.log(parents.children);

let humanData: Dummy = {name: 'Vansh', birthyear: 2009};
let human: Parent<Dummy> = new Parent<Dummy>();
// Store the Data into human Objects
human.children.push(humanData);
console.log(human.children);

