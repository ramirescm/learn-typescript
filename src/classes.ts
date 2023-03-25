interface IPerson {
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    name: string;

    constructor(id : number, name:string) {
        this.id = id;
        this.name = name;
    }
    sayMyName(): string {
        return `My name is ${this.name}`;
    }
}


// You can declare properties directly on constructor, always set de visibility to encapsulate like as oo
class PersonRefact implements IPerson {
    constructor(
        protected id : number, 
        protected name: string) {
    }
    sayMyName(): string {
        return `My name is ${this.name}`;
    }
}