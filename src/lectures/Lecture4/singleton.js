// Самым простым сингл тоном в js може выступать обычный литерал объекта - {}
// Пример посложнее

class Singleton {
    static instance = new Singleton();

    counter = 0;

    constructor() {
        if(Singleton.instance){
            return Singleton.instance
        }
    }

    incCounter(){
        this.counter++;
    }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

obj1.incCounter();
obj1.incCounter();
obj2.incCounter();
obj2.incCounter();

console.log(obj1.counter); // 4
console.log(obj2.counter); // 4

