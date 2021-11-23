// Selectors
const form = document.getElementById("form");
const logoURL = getUrlVars()["inf_custom_LogoURL"];
const decodelogoURL = decodeURIComponent(logoURL);
const inputValue = getUrlVars()["inf_field_Email"];
const shopNameContainer = document.getElementById("shop_name_container");
const shopNameContainer2 = document.getElementById("shop_name_container_2");
const shopName = getUrlVars()["shop_name"];
const shopNameModified = shopName.replaceAll("+", " ") + ".";

// Functions
window.onload = function () {
  getUrlVars();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("pre_unsubscribe_container").style.display = "none";
  document.getElementById("post_unsubscribe_container").style.display = "flex";
  document.getElementById("unsubscribe_button").style.visibility = "hidden";
});

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}

document.getElementById("banner").src = decodelogoURL;
document.getElementById("input").value = inputValue;
shopNameContainer.innerHTML = shopNameModified;
shopNameContainer2.innerHTML = shopNameModified;
