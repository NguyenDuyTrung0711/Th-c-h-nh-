
let temperature = parseFloat(prompt("Nhập nhiệt độ hiện tại:"));

if (temperature > 100) {
    alert("Nhiệt độ quá cao, hãy giảm nhiệt độ!");
} else if (temperature < 20) {
    alert("Nhiệt độ quá thấp, hãy tăng nhiệt độ!");
} else {
    alert("Nhiệt độ bình thường.");
}

