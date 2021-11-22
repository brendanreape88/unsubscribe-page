// Selectors
const unsubscribeButton = document.querySelector(".unsubscribe_button");
const logoURL = getUrlVars()["inf_custom_LogoURL"];
const decodelogoURL = decodeURIComponent(logoURL);

// Event Listeners
unsubscribeButton.addEventListener("click", unsubscribe);

// Functions
window.onload = function () {
  getUrlVars();
};

function unsubscribe() {
  document.getElementById("pre_unsubscribe_container").style.display = "none";
  document.getElementById("post_unsubscribe_container").style.display = "flex";
  document.getElementById("unsubscribe_button").style.visibility = "hidden";
}

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
