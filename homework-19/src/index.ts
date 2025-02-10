// Задание 1


const sumEvenNumbers = (arr: number[]): number =>{
      
    return arr.filter(item => item % 2 === 0).reduce((sum, item) => sum + item, 0)
}

const items = [1, 2, 3, 4, 5, 6]

console.log(sumEvenNumbers(items));



// Задание 2


interface StringToBooleanFunction {
    (value: string): boolean
}

const getValue: StringToBooleanFunction = (value) => {
        return value === ''
}

console.log(getValue("Hello"));
console.log(getValue(""))




// Задание 3

let CompareStrings:(str1: string, str2: string) => boolean;

CompareStrings = (str1, str2) => {
    return str1 === str2
}

console.log(CompareStrings("hello", "hello"));
console.log(CompareStrings("Hello", "world"));


// Задание 4

function getLastElement<T>(arr2:T[]):T{
    return arr2[arr2.length -1]
}

let firstArr = getLastElement<string>(["apple", "banana", "kiwi"])
let secondArr = getLastElement<number>([1, 2, 4, 5])

console.log(firstArr);
console.log(secondArr);




// Задание 5

function makeTriple<T>(a:T, b:T, c:T): T[] {
        return [a, b, c]
    }


let stringTriple = makeTriple<string>('apple', 'banana', 'kiwi')
let numberTriple = makeTriple<number>(1, 2, 3)


console.log(stringTriple);
console.log(numberTriple);

