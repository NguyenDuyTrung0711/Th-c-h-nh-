const numbers = [3, 5, 7];
const moreNumbers = [1, 2, ...numbers,8,9];
console.log("Mảng sau khi sử dụng toán tử spread:", moreNumbers);
const [first, second, ...rest] = moreNumbers;
console.log("Phần tử đầu tiên:", first);
console.log("Phần tử thứ hai:", second);
console.log("Các phần tử còn lại:", rest);
function sum(...args) {
   console.log("Các tham số được gom lại (rest parameter):", args);
  return args.reduce((total, num) => total + num, 0);
}
console.log("Gọi hàm sum(...moreNumbers):");
const totalSum = sum(...moreNumbers);
console.log("Tổng các phần tử trong mảng moreNumbers:", totalSum);