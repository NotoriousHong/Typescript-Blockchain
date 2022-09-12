//만약 player들이 모두 name을 가지고 있지만 몇몇만 age를 가지고 있다면 이를 어떻게 표현해야 할까?

//const playerNico : {
//    name:string,
//    age?:number
//} = {
//    name:"nico"
//}

//const playerLynn : {
//   name:string,
//    age?:number
//} = {
//    name:"Lynn"
//    age:12
//}

//그러나 이렇게 계속 반복되는 코드를 적어가며 모든 player를 적어줄 수 없다.
//좀 더 섹시한 방법이 없을까?

type Player = {
    name:string,
    age?:number
}

//const nico : Player = {
//    name:"nico"
//}

//const lynn : Player = {
//    name:"lynn",
//    age:12
//}

//이제까지 변수에 어떻게 type을 지정하는지 알아봤고
//이제는 함수의 return값에 어떻게 type을 지정하는지 알아보자

function playerMaker(name:string) : Player{
    return {
        name:name
    }
}

const nico = playerMaker("nico")
nico.age = 12