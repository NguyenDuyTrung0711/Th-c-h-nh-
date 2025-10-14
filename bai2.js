function tinhTongUocSoThucSuToiUu(num) {
    // Nếu num <= 1 thì không có ước thực sự
    if (num <= 1) {
        return 0;
    }

    let sum = 1; // 1 luôn là ước
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;

            let divisorPair = num / i; // ước còn lại
            if (i !== divisorPair) {
                sum += divisorPair;
            }
        }
    }

    return sum;
}

function isAmicable(num1, num2) {
    // Kiểm tra input
    if (!Number.isInteger(num1) || num1 <= 0) {
        return false;
    }

    if (!Number.isInteger(num2) || num2 <= 0) {
        return false;
    }

    if (num1 === num2) {
        return false;
    }

    // Tính tổng ước
    let sum1 = tinhTongUocSoThucSuToiUu(num1);
    let sum2 = tinhTongUocSoThucSuToiUu(num2);

    // Kiểm tra điều kiện cặp số thân thiết
    if (sum1 === num2 && sum2 === num1) {
        return true;
    } else {
        return false;
    }
}

// Nhập từ người dùng
let a, b;
do {
    a = parseInt(prompt("Nhập số nguyên dương thứ nhất:"));
} while (isNaN(a) || a <= 0);

do {
    b = parseInt(prompt("Nhập số nguyên dương thứ hai:"));
} while (isNaN(b) || b <= 0);

let ketQua = isAmicable(a, b);

if (ketQua) {
    console.log(a + " và " + b + " là cặp số thân thiết.");
} else {
    console.log(a + " và " + b + " không phải là cặp số thân thiết.");
}
