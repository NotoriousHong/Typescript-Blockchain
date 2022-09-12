//const add = (a:number, b:number) => a+b
//이 상황에서 a,b뒤에 type을 지정안하고 싶다면 우리는 어떻게 해야할까?

type Addversion30 = (a:number, b:number) => number;
//이 라인이 'Call signitures'다 argument type을 지정하고 있고 return type역시 지정하고 있다

const addversion30:Addversion30 = (a,b) => a + b
