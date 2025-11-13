const cards = [
  { name: "Laptop 1", price: 1500000, quantity: 1 },
  { name: "Laptop 2", price: 3000000, quantity: 2 },
  {name: "Bàn phím", price: 800000, quantity: 1}
];
const totalPrice = cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
// cards.map(card => {
//     console.log(`Sản phẩm: ${card.name} - Giá: ${card.price} VND - Số lượng: ${card.quantity}<br>`);
// });
cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
console.log(`Tổng giá trị giỏ hàng: ${totalPrice} VND`);