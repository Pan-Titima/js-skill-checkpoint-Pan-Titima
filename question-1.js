// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
const orangeValue = { price: 20, quantity: 300 };
inventory.orange = orangeValue;
console.log(inventory);
let totalAmount = 0;
for(let key in inventory){
  totalAmount += inventory[key].price * inventory[key].quantity;
}
console.log(`Total inventory value: ${totalAmount} baht`);

