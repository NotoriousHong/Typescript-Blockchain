//어떤 type인지 모르는 변수에 대해 우리는 Typescript에게 어떻게 설명해야 할까?
//우리는 a가 어떤 type인지 모른다고 생각해보자 그러면 아래와 같이 적어주면 된다

//let a: unknown;
//이렇게 해주면 우리는 Typescript로부터 보호를 받을 수 있게 된다.

//변수의 타입을 미리 알지 못할 때 우리는 unknown을 사용한다.

//if(typeof a === 'number'){
//    let b = a + 1
//}
//if(typeof a === 'string'){
//    let b = a.toUpperCase();
//}



//void에 대해 배워보자
//void는 아무것도 return하지 않는 함수를 대상으로 사용한다

function hello(){
    console.log('x')
}
//이런 경우, hello에 마우스를 올리면 void를 볼 수 있다.
//아무것도 return하지 않았기 때문임




//never에 대해 배워보자
//never는 함수가 절대 return하지 않을 때 발생한다.

//function hi():never {
//    return "x"
//}
//여기 함수에 never를 씌워주면 오류가 발생하게 된다 그게 never의 역할임

//또한 never는 type이 두가지 일 수도 있는 상황에 대해 발생할 수 있다
function hihi(name:string|number){
    if(typeof name === "string"){
        name
    } else if (typeof name === "number"){
        name
    } else {
        name
    }
}

//우리는 hi의 함수가 string or number라고 지정했다
//if와 typeof를 사용한 줄에서는 각각 name이 sting과 number가 된다
//하지만 else이후의 name은 전부 never로 표기될 것이다.
