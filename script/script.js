var currentDate = $("#currentDay");
var formattedDate = dayjs().format('dddd, D MMMM ');
currentDate.text(formattedDate)

var calendarElements = function() {
    for (var i = 0; i < 9; i++) {
        var hourBlock = $('<div>');
        hourBlock.addClass('row time-block');
        hourBlock.attr("id", "hour-" + i);
        $(".container").append(hourBlock);
      }
}

calendarElements();

//Potentially get calendar elements from bootstrap

// calendar elements are all form elemnents (use previous days activities and pilfer code)
// If statement for conditional CSS in calendar linked to dayjs current date/time
// if in the past turn grey
// in in the future turn green
// else red

// Event listener for save buttom
// use JSON to store events in local storage when save button is clicked

