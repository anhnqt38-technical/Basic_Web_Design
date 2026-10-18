var arr = [];
function save() {
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        pname: document.getElementById('pname').value,
        qty: document.getElementById('qty').value,
        price: document.getElementById('price').value
    }

    console.log(a);
    arr.push(a);
}

function show() {
    var html = '';
    for(i in arr) {
        var n = i;
        n++;
        html +="<tr>";
        html += "<td>" + (n) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>" + arr[i].id + "</td>";
        html += "<td>" + arr[i].pname + "</td>";
        html += "<td>" + arr[i].qty + "</td>";
        html += "</tr>";
    }
    document.getElementById('tbl').innerHTML += html;
}

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('pname').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}