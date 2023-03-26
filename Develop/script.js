//Days.js DOM
var today = dayjs();
$('#time').text(today.format('dddd, MMMM D h:mm:ss'));

// places current time and day on page
const d = new Date();
document.getElementById("currentDay").innerHTML = today;

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
var currentTime = dayjs().hour();
var hourLong = new Date()

//setInterval function, date, and hour formula

//var interval = setInterval(function(){
  //var rightNow = dayjs();
  //$('#currentDay').html(rightNow.format('dddd, MMMM D ') + ' ' + rightNow.format('dddd') .substring(0,2));
 // $('#presentDay').html(currentTime + " " + rightNow.format('h:mm a'));
//}, 1000);

$('#9 #description').val(localStorage.getItem("9"))
$('#10 #description').val(localStorage.getItem("10"))
$('#11 #description').val(localStorage.getItem("11"))
$('#12 #description').val(localStorage.getItem("12"))
$('#13 #description').val(localStorage.getItem("13"))
$('#14 #description').val(localStorage.getItem("14"))
$('#15 #description').val(localStorage.getItem("15"))
$('#16 #description').val(localStorage.getItem("16"))
$('#17 #description').val(localStorage.getItem("17"))
$('#18 #description').val(localStorage.getItem("18"))

//time blocks need to change during the random hours of the day
function colorChange(){
  var currentTime = dayjs().hour()
  console.log(currentTime)

//Jquery target info
//created var called hourBlock
//used pasreInt method here
//the element now has a function
//used split to categorize order list of strings

      $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id").split(" ")[1]); 
    if (hourBlock < currentTime) {
      $(this).addClass("past");
     } else if (hourBlock === currentTime) {
      $(this).removeClass("past")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
})
  };
//time change with color changes
colorChange()
setInterval(colorChange, 1000);

     

    // save user input on page
   // $(".saveBtn").on("click", function(){
     // userInput = $(this).child(".textarea");
     // console.log(hourLong);
     // localStorage.setItem(hourLong, JSON.stringify(userInput));

    //})

    //reset day for user
    //$("#presentDay").on("click", function(){
      //localStorage.clear();
      //initPage()
   // })


