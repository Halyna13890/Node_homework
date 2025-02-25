//Задание 1


function task1(): Promise<string>{
    return new Promise((resolve) =>{
     setTimeout(() =>{
        console.log("task1 ended");
        resolve("result - task1")  
     }, 1000)  
    })
   
}

function task2(): Promise<string>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            console.log("task2 ended");
            resolve("result- task2")
            
        }, 2000)
    })
}


function task3 (): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
        console.log("task3 ended");
        resolve("result -task3")
        }, 3000)
        
    })
}



async function totalTasks(){
 console.log("Start task1...");
 const t1 = await task1()

 console.log("Start task2...");
 const t2 = await task2()

 console.log("Start task3....");
 const t3 = await task3()

 console.log("result:", t1, t2, t3);
  
}






//Задание 2


async function upperString(str: string):Promise<string>{
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(str.toUpperCase())
        }, Math.random() * 1000)
    })
}


async function arrToUpperCase (string: string[]){
    const result = await Promise.all(string.map(upperString))
    console.log(result);
    
}

arrToUpperCase(["hello", "world", "async", "await"])



//Задание 3


function asyncTask1(): Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve("Task 1 done")
        }, 1000)
    })
}


function asyncTask2(): Promise<string>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> {
            reject(new Error ("Mistake in Task 2"))
        }, 2000)
    })
}

function asyncTask3(): Promise<string>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Task 3 done")
        }, 3000)
    })
}


async function runTasks(){
    try {
        const result = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
        console.log("All tasks is done", result);
        
    } catch (error: any) {
        console.error("Mistake", error.message)
    }
}

runTasks()





//Задание 4


function delay(num: number): Promise<number>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(num)
        }, num)
    })
}

async function runDelays(number: number[]): Promise<void>{
    const promises = number.map(delay);
    const result = await Promise.all(promises)
    console.log("All tasks is done", result);
    
}

runDelays([1000, 500, 2000, 1500]);