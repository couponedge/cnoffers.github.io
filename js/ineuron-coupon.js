$(".deal-copy-icon").click(function () {
  $(this).attr("src", "../assets/approved-accept-icon.svg");
  setTimeout(() => {
    $(this).attr("src", "../assets/copy-icon.svg");
  }, 2000);
});
