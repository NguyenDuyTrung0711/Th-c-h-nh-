let n1 = 0, n2 = 1;
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += n1;
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
}
document.write("Tổng của 20 số Fibonacci đầu tiên là: " + sum);