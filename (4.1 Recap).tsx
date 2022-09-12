type Words = {
    [key:string]: string
}
//Words 타입이 string만을 property로 가지는 오브젝트라는 것을 말해준 것이다
//key자리에는 어떤 단어든 들어갈 수 있음(보통은 key라고 씀)
//제한된 양의 property혹은 key를 가지는 타입을 정의해 주는 방법이다
//만약 위에서 key가 :numebr의 타입으로 정해진다면 아래의 dict은 에러가 날 것이다
//number가 타입이라면 '1: "food"'와 같은 형식으로 이루어져야 마땅할 것이다 

//let dict :Words = {
//    "potato": "food"
//}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
}
//위 줄의 코드는 사전이 될 것이다
//words를 initializer없이 선언해주고
//Constructor에서 수동으로 초기화 해줬다
//add는 사전에 단어를 추가하기 위해 만들어진 매소드 이다
//그 아래의 매소드는 term을 이용해서 단어를 불러오는 기능을 만든 거이다

class Word {
    constructor(
        public term:string,
        public def:string
    ) {}
}
//클래스를 type처럼 쓸 수도 있음
//위에 class Dict의 add부분을 보면 'word: Word'로 쓰임

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()
//새로운 사전을 만들어보자

dict.add(kimchi);
//"kimchi"가 추가된 새 사전이 만들어 졌다

dict.def("kimchi")
//"kimchi"라는 단어를 이용해서 "kimchi"의 definition을 들고왔다

//이것이 잘 작동되는지 확인하기 위해서는 JavaScript에서 실행을 해봐야 한다

