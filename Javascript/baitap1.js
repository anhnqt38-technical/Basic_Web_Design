function chuvi(cr, cd) {
    return (cr + cd) * 2;
}

function dientich(cr, cd) {
    return cr * cd;
}

var cr = parseInt(prompt("Nhập chiều dài: "));
var cd = parseInt(prompt("Nhập chiều rộng: "));

console.log("Chu vi: " + chuvi(cr, cd));
console.log("Diện tích: " + dientich(cr, cd));

// document.getElementById("chuvi").innerHTML = "Chu vi: " + chuvi(cr, cd);
// document.getElementById("dientich").innerHTML = "Diện tích: " + dientich(cr, cd);

alert("Chu vi: " + chuvi(cr, cd));
alert("Diện tích: " + dientich(cr, cd));