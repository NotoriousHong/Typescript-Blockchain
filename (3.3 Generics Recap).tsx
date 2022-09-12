type SuperPrint3 = {
    <T, M>(a: T[], b:M):T
}

const superPrint3: SuperPrint3 = (a) => a[0]

const a3 = superPrint3([1, 2, 3, 4], "x")
const b3 = superPrint3([true, false, true], 1)
const c3 = superPrint3(["1", "2", "3"], false)
const d3 = superPrint3([1, 2, true, false], "hello")



