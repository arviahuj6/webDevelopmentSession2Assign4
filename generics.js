// Class takes Generics of <T> , and having Array to store the Data
var Parent = (function () {
    function Parent() {
        this.children = [];
    }
    return Parent;
}());
// Calling of two different Interfaces
var personData = { name: 'Arvind', age: 44 };
var parents = new Parent();
// Store the Data into parents Objects
parents.children.push(personData);
console.log(parents.children);
var humanData = { name: 'Vansh', birthyear: 2009 };
var human = new Parent();
// Store the Data into human Objects
human.children.push(humanData);
console.log(human.children);
