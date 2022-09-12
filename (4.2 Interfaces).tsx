type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface Player {
    nickname:string,
    team:Team
    health:Health
}
//type은 내가 원하는 모든 것들이 될 수 있다
//type은 string의 배열이 될 수도 있고 Player처럼 object의 모양을 특정하는데 쓸 수도 있다
//하지만 interface는 오직 한 가지 용도로만 쓸 수 있다
//단지 오브젝트의 모양을 특정해주기 위해서만 사용한다
//React.js와 함께 사용할 때 자주 사용한다
//interface는 type의 부분집합이라고 할 수 있다

//interface는 class처럼 상속(extends)을 진행할 수도 있다
//그래서 object의 모양을 정할 때 interface를 쓰면 더욱 객체지향처럼 코드가 보이기 때문에 선호한다


const nico : Player = {
    nickname:"nico",
    team:"yellow",
    health:10
}