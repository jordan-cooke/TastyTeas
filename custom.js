//Update cart badge count
function updatedCartCount() {
  var cartCount = 0;
  var cartItems = ""
  if (getCookie("berryfusion")){cartCount+=Number(getCookie("berryfusion")); cartItems += getCookie("berryfusion") + " Berry Fusion tea(s) in cart. <a href='#' class='btn btn-success btn-xs' onclick='increaseItem(\"berryfusion\")'>+</a> <a href='#' class='btn btn-danger btn-xs' onclick='decreaseItem(\"berryfusion\")'>-</a> <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"berryfusion\")'>Remove Item</a><br>"}
  if (getCookie("lemon")){cartCount+=Number(getCookie("lemon")); cartItems += getCookie("lemon") + " Lemon tea(s) in cart. <a href='#' class='btn btn-success btn-xs' onclick='increaseItem(\"lemon\")'>+</a> <a href='#' class='btn btn-danger btn-xs' onclick='decreaseItem(\"lemon\")'>-</a> <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"lemon\")'>Remove Item</a><br>"}
  if (getCookie("mint")){cartCount+=Number(getCookie("mint")); cartItems += getCookie("mint") + " Mint tea(s) in cart. <a href='#' class='btn btn-success btn-xs' onclick='increaseItem(\"mint\")'>+</a> <a href='#' class='btn btn-danger btn-xs' onclick='decreaseItem(\"mint\")'>-</a> <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"mint\")'>Remove Item</a><br>"}
  if (getCookie("orange")){cartCount+=Number(getCookie("orange")); cartItems += getCookie("orange") + " Orange tea(s) in cart. <a href='#' class='btn btn-success btn-xs' onclick='increaseItem(\"orange\")'>+</a> <a href='#' class='btn btn-danger btn-xs' onclick='decreaseItem(\"orange\")'>-</a> <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"orange\")'>Remove Item</a><br>"}
  if (getCookie("raspberry")){cartCount+=Number(getCookie("raspberry")); cartItems += getCookie("raspberry") + " Raspberry tea(s) in cart. <a href='#' class='btn btn-success btn-xs' onclick='increaseItem(\"raspberry\")'>+</a> <a href='#' class='btn btn-danger btn-xs' onclick='decreaseItem(\"raspberry\")'>-</a> <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"raspberry\")'>Remove Item</a><br>"}
  if (cartCount === 0){document.getElementById('badge').innerHTML = ""; document.getElementById('cartinfo').innerHTML = "It looks like your cart is empty. Why not add some of our Tasty Teas?"; hideCheckout();}
  else {document.getElementById('badge').innerHTML = cartCount; document.getElementById('cartinfo').innerHTML = cartItems; showCheckout();}
}

function getCookie(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}
function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function deleteCookie(name) {
  setCookie(name, "", -1);
}

//Hide or show checkout
function showCheckout(){
  document.getElementById('emptycart').style.display = "inline"; 
  document.getElementById('userinfo').style.display = "inline"
}
function hideCheckout(){
  document.getElementById('badge').innerHTML = "";
  document.getElementById('emptycart').style.display = "none";
  document.getElementById('userinfo').style.display = "none";
}

//Add to cart
function addToCart(item) {
  if (getCookie(item) == null) {
    setCookie(item, 1);
  } else {
    setCookie(item, parseInt(getCookie(item)) + 1);
  }
  updatedCartCount();
}

function itemValue(item) {
  return getCookie(item)
}

//Remove all items from cart
function clearCart() {
  deleteCookie("berryfusion");
  deleteCookie("lemon");
  deleteCookie("mint");
  deleteCookie("orange");
  deleteCookie("raspberry");
  hideCheckout();
  updatedCartCount();
}


//Add or remove just one of item
function increaseItem(item){
  var current = getCookie(item);
  setCookie(item, parseInt(current) + 1);
  updatedCartCount();
}
function decreaseItem(item){
  var current = getCookie(item);
  if (parseInt(current) <= 1){
    removeItem(item);
  }
  else {
      setCookie(item, parseInt(current) - 1);
      updatedCartCount();
    }
}

//Remove all of a single item
function removeItem(item) {
  deleteCookie(item);
  updatedCartCount();
}

//Complete purchase of items
function purchaseComplete(fullname, email, address, address2, city, state, zip) {
  if (fullname === "" || email === "" || address === "" || city === "" || state  === "" || zip === "") {
    if (fullname === ""){
      document.getElementById('inputFullName').style.borderColor = "red";
    } else {document.getElementById('inputFullName').style.borderColor = "#ddd";}
    if (email === ""){
      document.getElementById('inputEmail').style.borderColor = "red";
    } else {document.getElementById('inputEmail').style.borderColor = "#ddd";}
    if (address === ""){
      document.getElementById('inputAddress').style.borderColor = "red";
    } else {document.getElementById('inputAddress').style.borderColor = "#ddd";}
    if (city === ""){
      document.getElementById('inputCity').style.borderColor = "red";
    } else {document.getElementById('inputCity').style.borderColor = "#ddd";}
    if (state === ""){
      document.getElementById('inputState').style.borderColor = "red";
    } else {document.getElementById('inputState').style.borderColor = "#ddd";}
    if (zip === ""){
      document.getElementById('inputZip').style.borderColor = "red";
    } else {document.getElementById('inputZip').style.borderColor = "#ddd";}
  }
  else {
  clearCart();
  document.getElementById('cartinfo').innerHTML = "Thank you for your purchase " + fullname.split(" ")[0] + "!<br> We will promptly ship the order to: <br><b>" + fullname + "<br>" + address + " "+ address2 + "<br>" + city + ", " + state + " " + zip + "</b>";
    }
}