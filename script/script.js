var currentDate = $("#currentDay");
var formattedDate = dayjs().format('dddd, D MMMM ');
currentDate.text(formattedDate)

var calendarElements = function() {
    for (var i = 9; i < 18; i++) {
        var hourBlock = $('<div>');
        var hourText = $('<div>');
        hourBlock.addClass('row time-block');
        hourBlock.attr("id", "hour" + i);
        hourText.addClass("col hour")
        if (i < 12) {
            hourText.text(i + 'AM');
          } else if (i === 12) {
            hourText.text(i + 'PM');
          } else {
            hourText.text(i - 12 + 'PM');
          }
          $(".container").append(hourBlock);
          hourBlock.append(hourText);
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

