//Задание 1

export let capitalize = (str: string): string =>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export let reverseString = (str: string): string => {
    return str.split("").reverse().join("")
}