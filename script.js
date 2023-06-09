$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings("#description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  function updateHour() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);
      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  updateHour();

  $("#hour-9 #description").val(localStorage.getItem("hour-9"));
  $("#hour-10 #description").val(localStorage.getItem("hour-10"));
  $("#hour-11 #description").val(localStorage.getItem("hour-11"));
  $("#hour-12 #description").val(localStorage.getItem("hour-12"));
  $("#hour-13 #description").val(localStorage.getItem("hour-13"));
  $("#hour-14 #description").val(localStorage.getItem("hour-14"));
  $("#hour-15 #description").val(localStorage.getItem("hour-15"));
  $("#hour-16 #description").val(localStorage.getItem("hour-16"));
  $("#hour-17 #description").val(localStorage.getItem("hour-17"));
});

//Days.js DOM
var today = dayjs();
$("#time").text(today.format("dddd, MMMM D, YYYY"));

// places current time and day on page
document.getElementById("currentDay").innerHTML = today;

var btn2;

//reset day for user
$(".btn2").on("click", function () {
  localStorage.clear();
  location.reload();
});


