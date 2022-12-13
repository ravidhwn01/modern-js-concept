//  object and classes
//  1. object
//  2. class
//  3. inheritance
//  4. static
//  5. getter and setter
//  6. private and public
//  7. abstract
//  8. interface
//  9. polymorphism
//  10. encapsulation
//  11. method overriding
//  12. method overloading
//  13. constructor
//  14. destructor
//  15. this
//  16. super
//  17. instanceof
//  18. new
//  19. delete
//  20. typeof
//  21. in
//  22. instanceof
//  23. with
//  24. try catch finally
//  25. throw
//  26. eval
//  27. import
//  28. export
//  29. extends
//  30. implements
//  31. package 
//  32. private
//  33. protected
//  34. public
//  35. static
//  36. yield
//  37. async
//  38. await
//  39. let
//  40. const
//  41. var
//  42. function
//  43. class

class Students{
    Biodata(){
        console.log(`hi i am a class method`)
    }
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
        getAge(){
            return this.age;    
        }
        getName(){
            return this.name;
    }
    setAge(age){
       return this.age = age;
    }
    setName(name){
       return this.name = name;
    }
    toString(){
        return `Name: ${this.name} Age: ${this.age}`;
    }
}

let obj = new Students("ravi dhawan",23);
obj.Biodata();

console.log(obj.setAge(55));

class data{
    constructor(name,age){
        this.name = name;
        this.age = age;
    } 
    toString(){
        return `Name: ${this.name} Age: ${this.age}`;
    }
}
class mydata extends data{
    constructor(name,age,game){
        super(name,age); // data class k method and  parameter use kr sakte hai
        this.name = name;
        this.age = age;
        this.game = game;
    }
    toData(){
        return `Name: ${this.name} Age: ${this.age} Game: ${this.game}`;
    }
}
let obj1 = new mydata("ravi dhawan",23,"cricket");
console.log(obj1.toData());