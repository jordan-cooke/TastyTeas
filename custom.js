//Update cart badge count
function updatedCartCount() {
  var cartCount = 0;
  var cartItems = ""
  if (getCookie("berryfusion")){cartCount+=Number(getCookie("berryfusion")); cartItems += getCookie("berryfusion") + " Berry Fusion tea(s) in cart. <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"berryfusion\")'>Remove Item</a><br> "}
  if (getCookie("lemon")){cartCount+=Number(getCookie("lemon")); cartItems += getCookie("lemon") + " Lemon tea(s) in cart. <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"lemon\")'>Remove Item</a><br>"}
  if (getCookie("mint")){cartCount+=Number(getCookie("mint")); cartItems += getCookie("mint") + " Mint tea(s) in cart. <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"mint\")'>Remove Item</a><br>"}
  if (getCookie("orange")){cartCount+=Number(getCookie("orange")); cartItems += getCookie("orange") + " Orange tea(s) in cart. <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"orange\")'>Remove Item</a><br>"}
  if (getCookie("raspberry")){cartCount+=Number(getCookie("raspberry")); cartItems += getCookie("raspberry") + " Raspberry tea(s) in cart. <a href='#' class='btn btn-primary btn-xs' onclick='removeItem(\"raspberry\")'>Remove Item</a><br>"}
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

//Remove all of a single item
function removeItem(item) {
  deleteCookie(item);
  updatedCartCount();
}

//Complete purchase of items
function purchaseComplete(fullname, email, address, address2, city, state, zip) {
  clearCart();
  document.getElementById('cartinfo').innerHTML = "Thank you for your purchase " + fullname + "!<br> We will promptly ship your order to: <br><b>" + address + " "+ address2 + "<br>" + city + ", " + state + " " + zip + "</b>";
}