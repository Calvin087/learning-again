const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes

}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
}

const me = new Person('Calvin', 'Torra', 32, ['teaching', 'biking'])
console.log(me.getBio()) 

const person2 = new Person('Clancy' , 'Turner', 51)

me.getBio = function () {
    return 'This is fake'
}

Person.prototype.getBio = function () {
    return 'Testing Testing'
}

console.log(person2.getBio()) 