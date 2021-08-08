link = "https://rebrand.ly/coding-ninjas-42-off";

function openInNewTab() {
  window.open(link, "_blank");
}

function openInSameTab() {
  window.open(link, "_self");
}

function redirect() {
  openInSameTab(link);
}

function forceStop(params) {
  var storedHash = window.location.hash;
  window.setInterval(function () {
    if (window.location.hash != storedHash) {
      window.location.hash = storedHash;
    }
  }, 50);

  changeHashOnLoad();
}

function ingridient() {
  forceStop();

  // 1.5m
  setTimeout(redirect, 1000 * 90);
  // 3m
  setTimeout(redirect, 1000 * 180);
  // 5m
  setTimeout(redirect, 1000 * 300);
  // 10m
  setTimeout(redirect, 1000 * 600);
}

// Using JQuery
var storedHash = window.location.hash;
function changeHashOnLoad() {
  window.location.href += "#";
  setTimeout("changeHashAgain()", "50");
}

function changeHashAgain() {
  window.location.href += "1";
}

function restoreHash() {
  if (window.location.hash != storedHash) {
    window.location.hash = storedHash;
  }
}

if (window.addEventListener) {
  window.addEventListener(
    "hashchange",
    function () {
      restoreHash();
    },
    false
  );
} else if (window.attachEvent) {
  window.attachEvent("onhashchange", function () {
    restoreHash();
  });
}
$(window).load(function () {
  changeHashOnLoad();
});
