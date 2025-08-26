let n1 = 0, n2 = 1;
let result = "";

for (let i = 1; i <= 20; i++) {
    result += n1 + " ";
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
}
document.write("20 số Fibonacci đầu tiên:<br>" + result);