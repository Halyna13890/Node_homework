// Задание 1


abstract class Animal{
    makeSound(): void{
        console.log('Animal make sound');
        
    }
}

class Cat extends Animal{
    makeSound(): void{
        console.log('Cat make sounds meou-meou');
        
    }     
    
}

class Dog extends Animal{
    makeSound():void{
        console.log('Dog make sounds gav-gav');
        
    }
}

const animals: Animal[] = [new Cat(), new Dog()]


animals.forEach((animal) =>{
    animal.makeSound()
})




// Задание 2



abstract class Shape {
    abstract name: string;
    abstract calculateArea(): number;
    }

    abstract class ColoredShape extends Shape {
        abstract color: string;
        
    }


    class ColoredCircle extends ColoredShape {
        name: string;
        color: string;
        radius: number;
    
        constructor(name: string, color: string, radius: number) {
            super();
            this.name = name;
            this.color = color;
            this.radius = radius;
        }
    
        calculateArea(): number {
            return Math.PI * Math.pow(this.radius, 2);
        }
    }
    
    class ColoredRectangle extends ColoredShape {
        name: string;
        color: string;
        width: number;
        height: number;
    
        constructor(name: string, color: string, width: number, height: number) {
            super();
            this.name = name;
            this.color = color;
            this.width = width;
            this.height = height;
        }
    
        calculateArea(): number {
            return this.width * this.height;
        }
    }

    const circle = new ColoredCircle ('Circle','Green', 5)
    console.log(`name: ${circle.name}, color: ${circle.color}, square ${circle.calculateArea()}`);
    
    const rectangle = new ColoredRectangle ('Rectangle', 'Blue', 2, 5)
    console.log(`name: ${rectangle.name}, color: ${rectangle.color}, square ${rectangle.calculateArea()}`);




    // Задание 3

    abstract class Appliance {
        abstract turnOn(): void;
        abstract turnOff(): void;
    }

   class  WashingMachine extends Appliance{
         turnOn(): void{
        console.log('Washmasine is working ');
        
    }
         turnOff(): void{
            console.log('Washmashine is stoped');
            
         }
   } 
    
    
    
    class  Refrigerator extends Appliance{
        turnOn(): void{
            console.log('Refrigerator is working ');
            
        }
             turnOff(): void{
                console.log('Refrigerator is stoped');
                
             }
    }

    const appliance :Appliance[] = [new WashingMachine(), new Refrigerator()]
    
    appliance.forEach((item) =>{
        item.turnOn()
        item.turnOff()
    })
   




    // Задание 4

    abstract class Account{
       abstract deposit(amount: number): void;
       abstract withdraw(amount: number): void;

    }


    class SavingsAccount extends Account{
       private balance: number = 0;
        private interestRate: number

        constructor(interestRate: number){
            super()
            this.interestRate = interestRate
        }

        deposit(amount: number): void {
            if(amount > 0){
                this.balance += amount
                console.log(`Внесено на счет: ${amount}, Ваш баланс: ${this.balance}`);
                
            } else {
                console.log('Внесите деньги на счет');
                
            }
        }

        withdraw(amount: number): void {
            if(amount > 0 && this.balance >= amount){
                this.balance -=amount
                console.log(`Снято: ${amount}, остаток на счете ${this.balance}`);
                
            } else {
                console.log('Недостаточно средств на счете');
                
            }
        }

        applyInterest(){
            if(this.balance > 0){
                const interest = this.balance * this.interestRate
                this.balance += interest
                console.log(`Начислено ${interest}, новый баланс ${this.balance}`);
                
            }
        }
    }


    class CheckingAccount extends Account{
        private balance: number = 0
        private fee: number;

        constructor(fee: number){
            super()
            this.fee = fee
        }

        deposit(amount: number): void {
            if(amount > 0){
                this.balance += amount
                console.log(`Внесено на счет: ${amount}, Ваш баланс: ${this.balance}`);
                
            } else {
                console.log('Внесите деньги на счет');
                
            }
        }

        withdraw(amount: number): void {
            const totalAmount = amount + this.fee

            if(totalAmount > 0 && this.balance >= totalAmount){
                this.balance =-totalAmount
                console.log(`Снято: ${totalAmount}, комиссия ${this.fee}`);
                
            } else {
                console.log('Недостаточно средств на счете');
                
            }
        }

    }

   const  saving = new SavingsAccount(0.5)

    saving.deposit(1000)
    saving.withdraw(200)
    saving.applyInterest()

    const checking = new CheckingAccount(2)

    checking.deposit(1000)
    checking.withdraw(200)





    // Задание 5


    abstract class Media{
        abstract play(): void
    }

    class Audios extends Media{
        play(): void {
            console.log('Audio playing melody');
            
        }
    }

    class Video extends Media{
        play(): void {
            console.log('Video playing film');
            
        }
    }


    const media: Media[] = [new Audios(), new Video()]


media.forEach((item) => {
    item.play()
})