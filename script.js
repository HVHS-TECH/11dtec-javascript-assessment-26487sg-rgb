let names = ["Creamy Iced Coffee","Creamy Iced Latte","Creamy Iced Mocha","Milk Tea","Green Tea","Lemon Tea"
];

let prices = [11,10,12,8,7,9
];



let cart = localStorage.getItem("cart");

if(cart == null){
    cart = "";
}

let total = Number(localStorage.getItem("total"));

if(isNaN(total)){
    total = 0;
}



function addToCart(number){

    let quantity =
    Number(document.getElementById("qty" + number).value);

    if(quantity < 1){
        alert("Please enter a quantity.");
        return;
    }

    if(quantity > 10){
        alert("TOO much items. No more than 10");
        return;
    }

    let cost = prices[number-1] * quantity;

    total = total + cost;

    cart = cart +

    "<tr>" +

    "<td>" + names[number-1] + "</td>" +

    "<td>" + quantity + "</td>" +

    "<td>$" + cost + "</td>" +

    "</tr>";

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);

    alert("Item added to cart!");
}



function displayCart(){

    let table = document.getElementById("cartTable");

    if(table == null){
        return;
    }

    table.innerHTML = cart;

    document.getElementById("total").innerHTML =
    "Grand Total: $" + total;

}

function resetCart(){

    cart = "";
    total = 0;

    localStorage.removeItem("cart");
    localStorage.removeItem("total");

    displayCart();

    document.getElementById("receipt").innerHTML = "";

}



function placeOrder(){

    let customer =
    document.getElementById("customerName").value;

    let money =
    Number(document.getElementById("money").value);

    if(customer == ""){
        alert("Please enter your name.");
        return;
    }

    if(total == 0){
        alert("Your cart is empty.");
        return;
    }

    if(money < total){
        alert("Not enough money.");
        return;
    }

    let change = money - total;

    document.getElementById("receipt").innerHTML =

    "<h3>Receipt</h3>" +

    "Customer: " + customer +

    "<br><br>" +

    "<table border='1' width='100%'>" +

    "<tr> <th>Drink</th> <th>Qty</th> <th>Price</th> </tr>" +

    cart +

    "</table><br>" +

    "<b>Total:</b> $" + total +

    "<br><b>Money:</b> $" + money +

    "<br><b>Change:</b> $" + change;

}