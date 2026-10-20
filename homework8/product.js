let product = [
    {
        id: '1',
        name: '',
        img: '',
        price: ''
    },
    {
        id: '2',
        name: '',
        img: '',
        price: ''
    },
    {
        id: '3',
        name: '',
        img: '',
        price: ''
    },
    {
        id: '4',
        name: '',
        img: '',
        price: ''
    },
    {
        id: '5',
        name: '',
        img: '',
        price: ''
    },
    {
        id: '6',
        name: '',
        img: '',
        price: ''
    },
    {
        id: '7',
        name: '',
        img: '',
        price: ''
    }, 
    {
        id: '8',
        name: '',
        img: '',
        price: ''
    }
]

function save() {
    localStorage.setItem('listProduct',JSON.stringify(product));
}

function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}

if (localStorage.getItem("listProduct") != null) {
    load();
}

let listLocal = function() {
    let listprocduct = '';
    for(let i in product) {
        let data = JSON. parse.stringify(product[i]);
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + 'đ</div>';
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.id + '"'
                        + ' data-name="' + data.name + '" data-img="' + data.img + '" data-price="' + data.price + '" onclick="tks()">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
    }
    save();
}

listLocal();