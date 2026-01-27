class Human {
    constructor(name) {
        this.name = name
        console.log("creating new Object")
    }

    eats() {
        console.log("You are eating")
    }

    sleep() {
        console.log("You are sleeping")
    }
}

class Student extends Human {
    constructor(name) {
        super(name)
        console.log("Student Object is created")
    }

    eats() {
        console.log("Student is eating")
    }


}

let a = new Human("Ali")
console.log(a)

let b = new Student("Hamza")
console.log(b)