//Задание 1

function greetUser(username: string): void{
    console.log(`Привет ${username}`);
    
}
greetUser("Daniel")


//Задание 2

interface Person  {
  name: string,
  age: number,
  city: string
}

const person = {
name: "Daniel",
  age: 30,
  city: "New York"
}

function printPersonInfo (person: Person):void{
    console.log(`${person.name}, ${person.age}, ${person.city}`);
    
}

printPersonInfo(person)


//Задание 3

function squareNumber (num: number): number{
    return num*num
}

console.log(squareNumber(5));


//Задание 4

function isEven (n: number): boolean{
    if(n%2 === 0){
        return true
    } else{
        return false
    }
}


//Задание 5

interface Student {
    name: string,
    grade: number
}

const student = {
    name: "Daniel",
    grade: 98
}

function printStudentIngo(student: Student):void{
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
    
}

printStudentIngo(student)



//Задание 6


function logMessage (name: string):void{
    console.log(name);
    
}

logMessage('Daniel')