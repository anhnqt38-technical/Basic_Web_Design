function Sum() {
    let sum = 0;
    let i = 0;

    while (i < 6) {
        sum += i;
        i++;
    }

    document.getElementById("kq").innerHTML = `${sum}`;
}