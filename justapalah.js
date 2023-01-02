function popupku() {
  var body = document.querySelector("body");      
  var pWm = document.createElement("a");
  pWm.setAttribute("href", "https://www.facebook.com/jeky.jaylana.3");
  pWm.setAttribute("style", "text-decoration: none; color: white; opacity: .5; position: fixed; bottom : 10px; right: 10px");
  pWm.innerHTML = "Jeky Jaylana";
  body.appendChild(pWm);

  pWm.setAttribute("href", "https://instagram.com/whooopsiie_");
  pWm.setAttribute("style", "text-decoration: none; color: white; opacity: .5; position: fixed; bottom : 10px; left: 10px");
  pWm.innerHTML = "Ratih Meilani Yuliadi";
  body.appendChild(pWm);
}