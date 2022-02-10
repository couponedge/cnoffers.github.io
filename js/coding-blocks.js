// Copied
$(".clipboard-btn").click(function () {
  $(".clipboard-btn").text("Copied!");

  $(".clipboard-btn").addClass("clipboard-btn-copied");
  $(".tabs .tab p").addClass("text-copied");
  $(".tabs .tab").addClass("tabs-background-copied");
});

// Reset Copied Effects
$('.tabs input[type="radio"]').click(function () {
  $(".clipboard-btn").text("Copy To Clipboard");

  $(".clipboard-btn").removeClass("clipboard-btn-copied");
  $(".tabs .tab p").removeClass("text-copied");
  $(".tabs .tab").removeClass("tabs-background-copied");
});
