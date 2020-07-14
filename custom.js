
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

//Add to cart
function addToCart(item) {
  if (getCookie(item) == null) {
    setCookie(item, 1);
  } else {
    setCookie(item, parseInt(getCookie(item)) + 1);
  }
  updatedCartCount();
}

//Update cart badge count
function updatedCartCount() {
  var cartCount = 0;
  if (getCookie("berryfusion")){cartCount+=Number(getCookie("berryfusion"))}
  if (getCookie("lemon")){cartCount+=Number(getCookie("lemon"))}
  if (getCookie("mint")){cartCount+=Number(getCookie("mint"))}
  if (getCookie("orange")){cartCount+=Number(getCookie("orange"))}
  if (getCookie("raspberry")){cartCount+=Number(getCookie("raspberry"))}
  if (cartCount === 0){document.getElementById('badge').innerHTML = "";}
  else {document.getElementById('badge').innerHTML = cartCount;}
}

//Remove all items from cart
function clearCart() {
  deleteCookie("berryfusion");
  deleteCookie("lemon");
  deleteCookie("mint");
  deleteCookie("orange");
  deleteCookie("raspberry");
  document.getElementById('badge').innerHTML = "";
}

//Remove all of a single item
function removeItem(item) {
  deleteCookie(item);
  updatedCartCount();
}
