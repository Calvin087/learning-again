class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio  
    }

    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${firstName} ${lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    // ***If you're an employee, use this bio, if you're just a person, use the one above
    getBio() { 
        return `${this.fullName} ${this.lastName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? `passing` : `failing`
        return `${this.firstName} is ${status} the class`
    }
}

const me = new Employee('Calvin', 'Turner', 32, 'Killer', [])
me.fullName = 'Calvin A Torra'
console.log(me.getBio())


// const me = new Employee('Calvin', 'Torra', 32, 'Teacher', ['teaching', 'biking'])
// console.log(me.getBio()) 

// const person2 = new Person('Clancy' , 'Turner', 51)
// console.log(person2.getBio())