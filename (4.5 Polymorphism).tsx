//Polymorphism은 다른 모양의 코드를 가질 수 있게 해주는 것이다
//Polymorphism을 이루는 방법은 generic을 사용하는 것이다
//그리고 generic은 placeholder type을 쓸 수 있게 한다




interface SStorage<T> {
    [key:string]:T

}
//SStorage라고 써준 이유는 Storage라고 쓰면 이미 'Storage'라는 이름으로 저장되어 있던
//API에 접근하게 되어 추가하는 방식으로 코드가 작성되기 때문이다
//그냥 이름만 다르게 해서 새로운 Storage를 만든거임


class LocalStorage<T> {
    private storage:SStorage<T> = {}
    set(key:string, value:T){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}
//localStorage API를 구현해봤다


const stringStorage = new LocalStorage<string>()

stringStorage.get("cat")
stringStorage.set("hello", "how are you")

const booleanStorage = new LocalStorage<boolean>()

booleanStorage.get("xxx")
//우리는 위에 LocalStorage class에서 get함수를 통해 string을 넣으면 T(generic)를 받는다고 적어놨는데
//하지만 위의 booleanStorage코드에서 concrete타입을 따로 입력시켜줬기 때문에 "xxx"를 boolean으로 받을 수 있다
//(모든 도출값을 boolean으로 받을 수 있음)
booleanStorage.set("hello", true)