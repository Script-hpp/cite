$(document).ready(function () {
  $(".hover-element").mouseenter(function () {
    var totalElements = $(this).siblings().addBack().length;
    var individualWidth = 100 / totalElements;

    $(this).stop(true, true).css("width", "30%");
    $(this).siblings().css("width", (100 - 30) / (totalElements - 1) + "%");
    $(this).children(".arrow").addClass("show");
  })
  .mouseleave(function () {
    var totalElements = $(this).siblings().addBack().length;
    var individualWidth = 100 / totalElements;

    $(".hover-element").stop(true, true).css("width", individualWidth + "%");
    $(".hover-element").children(".arrow").removeClass("show");
  });
});
