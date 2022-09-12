//이번 영상에서는 type과 interface의 차이점에 대해 정리해본다

type PlayerA = {
    name:string
}

type PlayerAA = PlayerA & {
    lastName:string
}

const playerA: PlayerAA = {
    name:"nico",
    lastName:"xxx"
}

////////

interface PlayerB {
    name:string
}

interface PlayerB {
    lastName:string
}

interface PlayerB {
    health:number
}

const playerB: PlayerB = {
    name:"nico",
    lastName:"xxx",
    health:1
}
//-> interface는 오브젝트에 대한 형태를 계속해서 확장가능할 수 있게 한다