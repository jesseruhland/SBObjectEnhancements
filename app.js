//Same keys and values ES2015
const createInstructor = (firstName, lastName) => ({firstName, lastName})

//Computed Property Names ES2015
let favoriteNumber = 42;
let instructor = {
    firstName : 'Colt',
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods ES2015
//renamed 'instructor' to prevent conflict with above
let instructor2 = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
}

const createAnimal = (species, verb, noise) =>
({
    species,
    [verb]() {
        return noise;
    }
})
