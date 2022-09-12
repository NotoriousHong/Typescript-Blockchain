//class Player {
//    constructor(
//        private firstName:string,
//        private lastName:string,
//        public nickName:string
//    ) {}
//}
//constructor는 객체지향에서 쿠키들을 말한다

//const nico = new Player("nico", "las", "니꼬");
//여기서는 쿠키들을 통해 쿠키를 만들어 낸것에 비유할 수 있다
//이런식으로 데이터를 보존하면 많은 양의 코드를 작성하지 않아도 되고 새로운 데이터의 특성을 추가하고
//변경하는 것이 유용해진다.

//클래스 데이터 필드에 완전히 접속 차단을 원한다면 'private', 상속받은 클래스만 접속을 할 수 있게 하고싶다면 'protected', 완전 허용이라면 'public'

abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickName:string
    ) {}
    abstract getNickName():void
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
//abstract는 상속을 줄 수 있는 클래스를 말하는 듯 하다
//메소드는 클래스 안에 존재하는 함수를 말한다 위에서는 getFullName이 메소드라고 할 수 있다
//Player는 User로부터 모든 메소드를 상속받음으로 nico.getFullName()과 같은 함수를 자유룝게 쓸 수 있다
//만약 getFullName메소드를 private getFullName으로 변경한다면 nico.getFullName()함수는 작동하지 않을 것이다
//이렇게 abstract애 private public기능도 추가할 수 있다

//우리는 추상 클래스 안에서 추상 메소드를 만들 수 있다
//추상 메소드란 무엇일까? 추상 메소는 네가 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드를 의미한다
//쉽게 말하면 추상 메소드는 추상 클래스의 하위 클래스가 모두 가져야 하는 값을 말한다
//근데 만약 너가 추상 클래스 안에서 추상 메소드를 만들고자 한다면
//너는 일반적으로 메소드를 구상해서는 안되고 call signiture를 적어줘야 한다


class Player extends User {
    getNickName() {
        console.log(this.getNickName)
    }
}


const nico = new Player("nico", "las", "니꼬");

