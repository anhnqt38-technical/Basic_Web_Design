function Summation() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);

    document.getElementById("result").value = a + b;
}

function Subtraction() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    
    document.getElementById("result").value = a - b;
}

function Multiplication() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    
    document.getElementById("result").value = a * b;
}

function Division() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    
    if (b === 0) {
        document.getElementById("result").value = "Không thể chia cho 0";
    } else {
        document.getElementById("result").value = a / b;
    }
}