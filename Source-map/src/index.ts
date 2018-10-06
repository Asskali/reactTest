class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    middleInitial?: string;
    lastName: string;
}

function greeter(person: Person) {
    const middleInitial = person.middleInitial !== null ? ` ${person.middleInitial}. ` : '';
    return `Hello, ${person.firstName}${middleInitial} ${person.lastName}`;
}

const user = new Student('Adam', 'M', 'Asskali');
document.body.innerHTML = (greeter(user));