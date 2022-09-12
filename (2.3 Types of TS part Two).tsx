//readonly가 뜻하는 바는 Player의 name을 우리가 수정할려고 시도한다면
//Typescript가 우리의 동작을 멈출 것이다.

//예를 들어보자

const numbers: readonly number[] = [1, 2, 3, 4]
//numbers.push(1)
//이렇게 push를 할 수 없도록 오류가 생긴다




//Tuple에 대해 알아보자. Tuple은 array를 생성할 수 있게 해준다.
//하지만 최소한의 길이를 가져야 하고 특정 위치에 특정 타입이 있어야 한다.

//만약 array를 만들고 싶은데 첫번째는 이름, 두번째는 나이, 세번째는 챔피언 유무를 넣고 싶다면 어떻게 해야 하는가?
const player: [string, number, boolean] = ["nico", 1, true]





//any라는 type에 대해 알아보자 any는 Typescript로부터 빠져나오고 싶을 때 쓰는 type이다.
//Typescript로부터 바보같은 짓을 하도록 허락받고 싶다면 any를 쓰면 된다.(any를 쓰면 JavaScript로 들어가게 된다)
//any는 어느 타입이건 될 수 있도록 해준다.

const a : any[] = [1, 2, 3, 4]
const b : any = true

a + b