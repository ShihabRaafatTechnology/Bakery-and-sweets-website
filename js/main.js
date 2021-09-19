// Search Modal
var modal = document.getElementById("search-modal"),
    exit_modal = document.getElementById("exit-modal"),
    icon_search = document.getElementById("search-icon");

// When Click On Search Icon
icon_search.onclick =  function () {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

// When Click On Exit Modal
exit_modal.onclick = function () {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}