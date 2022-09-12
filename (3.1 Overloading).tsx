//overloading에 대해 배워보자 
//overloading은 함수가 여러개의 call signitures를 가지고 있을 때 발생시킨다 call signiture를 두개 이상 적용시켜주는 기술인듯

//type Add = {
//    (a:number, b:number) : number
//    (a:number, b:string) : number
//}
//a,b의 type조합이 둘 윗줄과 아랫줄 두개중 하나가 될 수 있다는 뜻임

//const add: Add = (a,b) => {
//    if(typeof b === "string") return a
//    return a + b
//}





type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config:Config):void;
}
//어쩔 때는 윗줄을 보내줄 수 있고 어쩔 때는 아랫줄을 보내줄 수도 있다는 뜻의 코드다

const push:Push = (config) => {
    if(typeof config === "string"){console.log(config)}
    else{
        console.log(config.path)
    }
}



//만약 어떤 type이 여러개의 다른 parameter 갯수를 가지고 있다면 오버로딩은 어떻게 효과를 발휘하는가?
type Addversion31 = {
    (a:number, b:number): number,
    (a:number, b:number, c:number): number
}
//이 경우에 c는 option이라고 생각할 수 있기 때문에 아래에 c?를 넣어줬다

const addversion31:Addversion31 = (a, b, c?:number) => {
    if(c) return a + b +c
    return a + b
}
//이렇게 되면 다른 개수의 type parameter를 가지고 있어도 함수나 변수를 잘 설정해줄 수 있다


addversion31(1, 2)
addversion31(1, 2, 3) 