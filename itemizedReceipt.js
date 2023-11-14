// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (...items) => {
  let total = 0
  let tax = 0

  items.forEach((item)=>{
    total += item.price
    console.log(`${item.descr} - ${item.price.toFixed(2)}`)
  })
  console.log(`Subtotal: ${total}`)
  tax = total * 0.065 //washington sales tax
  total += tax
  console.log(`Total: ${total.toFixed(2)} `)
}

const object1 = {descr: "Burger", price: 11.99}
const object2 = {descr: "Fries", price: 2.99}
const object3 = {descr: "Soda", price: 3.99}
const object4 = {descr: "Donut", price: 5.99}

logReceipt(object1, object4, object2)

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97

