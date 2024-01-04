class Key {

    constructor (private signature:number) {}

    getSignature(): number{
        return this.signature
    };

}

class Person extends Key {
    constructor(key: Key) {
        super();
    }
    getKey(): number {
        // return this.
    }
}

abstract class House {
    protected door: boolean;
    key: Key;

    comeIn() { }
    
    public abstract OpenDoor(key:Key){}

}

class MyHouse extends House {

    openDoor(inputKey:number) {
        if (inputKey === this.key)
        { console.log('Door OPEN!') } else {
            console.log('Sorry! Close')
            }
    }

}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};