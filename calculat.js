// ตัวแปรที่ใช้แสดงผล
let display = document.getElementById('display');

// ฟังก์ชันเพิ่มตัวเลขในหน้าจอ
function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number; // แทนค่า 0 ด้วยตัวเลขใหม่
    } else {
        display.innerText += number; // เพิ่มตัวเลขต่อท้าย
    }
}

// ฟังก์ชันเพิ่มเครื่องหมายคำนวณ
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if ('+-*/%'.includes(lastChar)) {
        return; // หยุดการทำงานถ้าตัวสุดท้ายเป็นเครื่องหมาย
    }
    display.innerText += operator;
}

// ฟังก์ชันเคลียร์หน้าจอ
function clearDisplay() {
    display.innerText = '0';
}

// ฟังก์ชันลบตัวสุดท้าย
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

// ฟังก์ชันคำนวณผลลัพธ์
function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch {
        display.innerText = 'Error'; // แสดง Error ถ้าคำนวณไม่ได้
    }
}
