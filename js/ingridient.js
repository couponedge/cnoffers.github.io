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

function changeHashOnLoad() {
  window.location.href += "#";
  setTimeout("changeHashAgain()", "50");
}

function changeHashAgain() {
  window.location.href += "discount";
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
  // forceStop();

  // 1.5m
  setTimeout(redirect, 1000 * 90);
  // 3m
  setTimeout(redirect, 1000 * 180);
  // 5m
  setTimeout(redirect, 1000 * 300);
  // 10m
  setTimeout(redirect, 1000 * 600);
}
