function baiTap1() {
    let n;
    let arr = [];

   // Nhập và kiểm tra n có phải số nguyên dương hay không 
    do {
    n = Number(prompt("Nhập số lượng phần tử n (0 < n <= 50):"));
    if (!Number.isInteger(n) || n <= 0 || n > 50) {
        alert("Giá trị n không hợp lệ. Vui lòng nhập lại.");
    }
    } while (!Number.isInteger(n) || n <= 0 || n > 50);


    // Nhập mảng
    for (let i = 0; i < n; i++) {
        let element = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(element);
    }

    console.log("Mảng đã nhập:", arr);

    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
    let laViTriChan = i % 2 === 0;       // kiểm tra vị trí chẵn
    let laSoLe = arr[i] % 2 !== 0;       // kiểm tra phần tử lẻ

    if (laViTriChan) {
        if (laSoLe) {
            sum += arr[i];
            count++;
        }
    }
    }

    // Tính trung bình cộng
    let average = 0;
    if (count > 0) {
        average = sum / count;
    }

    console.log(`Tổng các số lẻ ở vị trí chẵn: ${sum}`);
    console.log(`Số lượng các số lẻ ở vị trí chẵn: ${count}`);
    console.log(`Trung bình cộng: ${average}`);
}

baiTap1();
