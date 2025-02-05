// Задание 1


function calculateTotal(price: number, quantity: number, discount: number = 0): number{
        const total = price * quantity;
        const discountTotal = total -(total * (discount / 100))
        return discountTotal;

}
console.log(calculateTotal(5, 20, 30));
console.log(calculateTotal(10, 2));


// Задание 2


let id: string | number;

function displayId(id: string | number): string | number {
    if (typeof id === "string") {
        return id.toUpperCase();
    } else if (typeof id === "number") {
        return id * 10;
    }
}

console.log(displayId(10)); 
console.log(displayId("Hello")); 


// Задание 3


interface Order {
    orderId: string;   
    amount: number;    
    status: 'pending' | 'shipped' | 'delivered';  
  }
  
 
  const orders: Order[] = [
    { 
        orderId: "ORD001", 
        amount: 150.75, 
        status: "pending" 
    },
    { 
        orderId: "ORD002", 
        amount: 320.40, 
        status: "shipped" 
    },
    { 
        orderId: "ORD003", 
        amount: 250.00, 
        status: "delivered" 
    },
    { 
        orderId: "ORD004", 
        amount: 129.99, 
        status: "pending" 
    },
    { 
        orderId: "ORD005", 
        amount: 450.30, 
        status: "shipped" 
    }];
  

  function filterOrdersByStatus(orders: Order[], status: 'pending' | 'shipped' | 'delivered'): Order[] {
    return orders.filter(order => order.status === status);
  }
  

  const pendingOrders = filterOrdersByStatus(orders, "pending");
  console.log(pendingOrders);  
  

  // Задание 4

 
const productInfo: [string, number, number] = ["Laptop", 1000, 50];

interface Inventory {
  [productName: string]: number;
}


function updateStock(inventory: Inventory, productInfo: [string, number, number]): Inventory {
  const [productName, price, quantity] = productInfo;  
  
  return inventory; 
}


const inventory: Inventory = {
  "Laptop": 30,
  "Phone": 100
};

const updatedInventory = updateStock(inventory, productInfo);

console.log(updatedInventory);
