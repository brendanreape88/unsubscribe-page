// Selectors
const unsubscribeButton = document.querySelector(".unsubscribe_button");

// Event Listeners
unsubscribeButton.addEventListener("click", unsubscribe);

// Functions
function unsubscribe() {
  document.getElementById("pre_unsubscribe_container").style.display = "none";
  document.getElementById("post_unsubscribe_container").style.display = "flex";
  document.getElementById("unsubscribe_button").style.visibility = "hidden";
}
