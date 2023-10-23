var currentHour = moment().hour()
console.log(currentHour)

//get the current day and time id=current day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
//create a past, present and future timeblock. Each timeblock should be color coded
// for past present or future
function trackHour() {
    $('.timeBlock').each(function () {
        var timeScheduled = $(this).attr('id').split('hour')[1]
        console.log('currerntHour', currentHour)
        console.log('hour', timeScheduled)

        if(timeScheduled < currentHour) {
            $(this).addClass('past')
        }else if (timeScheduled == currentHour) {
            $(this).addClass('present')
        }else {
            $(this).addClass('future')
        }
    })
}
trackHour()

//save button function 

$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
})

$("#hour09 .description").val(localStorage.getItem("hour09"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));