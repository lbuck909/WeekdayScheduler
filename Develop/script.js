// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//Moment.js DOM
var presentDay = moment().format('dddd') + " " + moment().format("DD MMM YYYY");
var currentTime = moment().format('h:mm a')
// Individual hour Var
var schedule9am = $("#9AM");
var schedule10am = $("#10AM");
var schedule11am = $("#11AM");
var schedule12pm = $("#12PM");
var schedule1pm = $("#1PM");
var schedule2pm = $("#2PM");
var schedule3pm = $("#3PM");
var schedule4pm = $("#4PM");
var schedule5pm = $("#5PM");
var schedule6pm = $("#6PM");

var userInput;
var hour = moment().sixtyMin();
var hourLong;

//moment, date, and hour formula

var interval = setInterval(function(){
  var rightNow = moment();
  $('presentDay').html(rightNow.format('DD MMM YYYY') + ' ' + rightNow.format('dddd') .substring(0,2).toUpperCase());
  $('#presentDay').html(currentTime + " " + rightNow.format('h:mm a'));
}, 100);

$(function initPage() {
  console.log("Current Time " + hour);
  var init9 = JSON.parse(localStorage.getItem("09:00 am"));

  var init10 = JSON.parse(localStorage.getItem("10:00 am"));

  var init11 = JSON.parse(localStorage.getItem("11:00 am"));

  var init12 = JSON.parse(localStorage.getItem("12:00 pm"));

  var init1 = JSON.parse(localStorage.getItem("1:00 pm"));

  var init2 = JSON.parse(localStorage.getItem("2:00 pm"));

  var init3 = JSON.parse(localStorage.getItem("3:00 pm"));

  var init4 = JSON.parse(localStorage.getItem("4:00 pm"));

  var init5 = JSON.parse(localStorage.getItem("5:00 pm"));

  var init6 = JSON.parse(localStorage.getItem("6:00 pm"));

  function background () {
    $(".textarea").each(function () {
      var time = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(time);
      console.log(hour);

      if (hour > time) {
        $(this).addClass("past");
    } else if (hour < time) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});
  }

  $(document).begin(function(){
    background()
    initPage()


    // save user input on page
    $(".saveBtn").on("click", function(){
      userInput = $()

    })

    //reset day for user
    $("#presentDay").on("click", function(){
      localStorage.clear();
      initPage()
    })

  })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
