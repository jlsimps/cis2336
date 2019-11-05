const books_price = 100.00
const meal_plan_price = 15.00
const instrument_price = 200.00
const plants_price = 65.00
const decoration_price = 300.00
const web_dev_price = 500.00
const mexican_food_price = 45.00
const sports_acc_price = 499.99

var shopping_cart = [ ];

function addToCart(el) {
  var btnClass = el.className;
  shopping_cart.push(btnClass);
  console.log(shopping_cart);
  }

function showCart() {
  var x = document.getElementById("shopping-cart");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    var cartItems = {
      'totalbooks': 0,
      'totalmeals': 0,
      'totalinstruments': 0,
      'totalplants': 0,
      'totaldecorations': 0,
      'totalwebdev': 0,
      'totalmexicanfood': 0,
      'totalsports': 0
    }

    for (var i = 0; i < shopping_cart.length; i++) {
      if (shopping_cart[i] == "books") {
        cartItems['totalbooks']++
      }else if (shopping_cart[i] == "meal") {
        cartItems['totalmeals']++
      }else if (shopping_cart[i] == "instruments") {
        cartItems['totalinstruments']++
      }else if (shopping_cart[i] == "plants") {
        cartItems['totalplants']++
      }else if (shopping_cart[i] == "decorations") {
        cartItems['totaldecorations']++
      }else if (shopping_cart[i] == "webdev") {
        cartItems['totalwebdev']++
      }else if (shopping_cart[i] == "mexicanfood") {
        cartItems['totalmexicanfood']++
      }else {
        cartItems['totalbooks']++
      }
    }



    var html = "<table>";
    html += "<tr>";
    html += "<th>Item</th><th>Quantity</th><th>Price</th><th>Remove</th>";
    html += "</tr>";

    if (cartItems['totalbooks'] > 0) {
      html += "<tr>";
      html += "<td>Books, Stationery, and Accessories</td>";
      html += "<td>" + cartItems['totalbooks'] + "</td>";
      html += "<td>" + (books_price * cartItems['totalbooks']) + "</td>";
      html += "</tr>";
    }

    html+= "</table>"

    document.getElementById("cartcontents").innerHTML = html;
  }

}
