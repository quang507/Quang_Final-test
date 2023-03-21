function tinhtong() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    let sum = 0;
    if (a > b) {
        document.getElementById("ketqua").innerHTML = `Số a phải nhỏ hơn b`;
        tinhtong();
    }
    for (let i = a; i <= b; i++) {
      if (kiemtrasonguyento(i)) {  
        sum += i;
      }
    }
    document.getElementById("ketqua").innerHTML = `Tổng tất cả các số nguyên tố trong khoảng từ ${a} đến ${b} là ${sum}`;
  }
  
  function kiemtrasonguyento(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
