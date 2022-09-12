type Player4<E> = {
    name:string
    extraInfo:E
}

const nico4: Player4<{favFood:string}> = {
    name:"nico",
    extraInfo: {
        favFood: "Pizza"
    }
}


//
type NicoPlayer = Player4<{favFood:string}>

const NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "Pizza"
    }
}
//위의 코드와 같은 일을 함


const lynn: Player4<null> = {
    name: "lynn",
    extraInfo: null
}
