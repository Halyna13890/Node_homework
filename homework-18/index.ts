// Задание 1

type Admin = {
    name: string,
    permissions: string[]
}

type User = {
    name: string,
    email: string
}

type AdminUser = Admin & User

const adminUser: AdminUser = {
    name: "Alise",
    permissions: ["delete", "put", "post"],
    email: "alise@gmail.com"
}

console.log(adminUser)





// Задание 2

type Engine = {
    type: string,
    horsepower: number,
    year?:number
}

type Car = {
    make: string,
    model: string,
    engine: Engine
}

const car = {
    make: "BMW", 
      model: "X5G",
    
    engine: {
        type: "sport",
        horsepower: 80000
    }
  };

function carType(car: Car): void{
    console.log(`Car type: ${car.engine.type}, horsepover: ${car.engine.horsepower}, make: ${car.make}, model: ${car.model}`)
}

carType(car)




// Задание 3



interface Product {
    name: string,
    price: number
}



interface CalculateDiscount{
    (product:Product, discount: number):number;
}


const calculateDiscount: CalculateDiscount = (product, discount) => {
  
    return product.price - (product.price * discount)
}

const product: Product = {
    name: "Apple",
    price: 2.5
}

const discount = 0.1


console.log(calculateDiscount(product, discount))




// Задание 4



interface Employee {
    name: string,
    salary: number
}

const employees: Employee[] = [
    {name: "Eva", salary: 55000 },
    {name: "Elza", salary: 100000 }
]

function getSalary (employees: Employee[]): number[] {
    return employees.map(employee => employee.salary )
}

console.log(getSalary(employees));



// Задание 5

interface Person {
    firstName: string,
    lastName: string
}

interface Student extends Person {
    grade: number
}

const student: Student = {
    firstName: "Alice",
    lastName: "Cooper",
    grade: 100
}

function studentData (student: Student):void{
    console.log(`${student.firstName}, ${student.lastName}, grade: ${student.grade}`);
    
}

studentData(student)


// Задание 6


interface concatStrings {
    (str1: string, str2: string): string;
  }
  
 
  const concatS: concatStrings = (str1, str2) => {
    return str1 + " " + str2;  
  };
  
  let str1 = "Hello";
  let str2 = "world";
  
  console.log(concatS(str1, str2));  