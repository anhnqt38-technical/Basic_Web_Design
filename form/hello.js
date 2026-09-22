// function hello() {
//     let a = document.getElementById("xin chao").value;
//     document.getElementById("message").innerHTML = `Xin chao: ${a}!`;
//     // alert("hello, world!");
//     // alert("hello")
// }
// // hello();

function sum() {
    let a = document.getElementById("soa").value;
    let b = document.getElementById("sob").value;
    let result = parseInt(a) + parseInt(b);
    document.getElementById("kq").innerHTML = `kq Sum: ${result}`;
}