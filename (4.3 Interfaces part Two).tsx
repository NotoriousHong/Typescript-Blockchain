//abstract class User {
//    constructor(
//        protected firstName:string,
//        protected lastName:string
//    ) {}
//    abstract sayHi(name:string):string
//    abstract fullName():string
//}

//class Player extends User {
//    fullName(){
//        return `${this.firstName} ${this.lastName}`
//    }
//    sayHi(name:string){
//        return `Hello ${name}. My name is ${this.fullName()}`
//    }
//}

//이제 abstract과 class를 이용해 만든 이 작업을 interface를 이용해서 구현해보자




interface User {
    firstName:string,
    lastName:string
    sayHi(name:string):string
    fullName():string
}

interface Human {
    health:number
}

class Player43 implements User, Human {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}
//기억해야 할 것은, 인터페이스를 상속할 때에는 property를 public으로 만들지 못한다
//그래서 property type을 public으로 바꿔준다
//이러한 방식의 장점은 abstract를 사용해서 객체지향을 구현한 것보다 자바스크립트로 컴파일 했을 때
//코드양을 줄여준다는 것이다 그래서 파일 양을 줄이고 싶을 때 이 방법을 사용한다
