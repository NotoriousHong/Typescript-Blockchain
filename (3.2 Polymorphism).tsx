//type SuperPrint = {
//    (array: number[]):void
//    (array: boolean[]):void
//    (array: string[]):void
//}
//call signiture를 만들었고

//const superPrint: SuperPrint = (array) => {
//    array.forEach(i => console.log(i))
//}
//첫번째 조건인 배열을 받아서, 그 배열의 요소를 각각 콘솔로 찍는 작업을 완료해다

//superPrint([1, 2, 3, 4])
//superPrint([true, false, true])
//superPrint(["1", "2", "3"])
//여기까지는 잘 작동하는데 만약 아래와 같은 줄이 나온다면 작동하지 않는다
//superPrint([1, 2, true, false])
//물론 SuperPrint type call signiture에 '(array: number|boolean[]):void' 이렇게 적어줌으로써 작동시킬 수 있지만
//이렇게 적어서 작동시킬려면 모든 배열 조합의 type들을 생각해야 하기 때문에 효율적인 방법이 아님
//이것 대신 generic을 사용할 것이다


type SuperPrint = {
    <TypePlaceholder>(array: TypePlaceholder[]):void  //<- 아무것도 return하지 않겠다
}
//이런 식으로 <>안에 무언가를 적어주면서(보통 T,V를 많이 보게 될거임) Generic(Placeholder)를 쓰게한다는 것을 알려주면 된다

const superPrint: SuperPrint = (array) => {
    array.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["1", "2", "3"])
superPrint([1, 2, true, false])



//만약 배열 중 첫번째 요소를 return하고 싶다면?
type SuperPrint2 = {
    <TypePlaceholder>(array2: TypePlaceholder[]): TypePlaceholder //<- Placeholder중 하나를 return하겠다
}

const superPrint2: SuperPrint2 = (array2) => array2[0]

const a = superPrint2([1, 2, 3, 4])
const b = superPrint2([true, false, true])
const c = superPrint2(["1", "2", "3"])
const d = superPrint2([1, 2, true, false])

//이렇게 TypePlaceholder라는 type이 여러개 type의 요소를 표현할 수 있음으로 우리는 이것을 Polymorphism이라고 함
