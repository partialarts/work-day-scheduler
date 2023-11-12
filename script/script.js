var currentDate = $("#currentDay");
var currentHour = dayjs().format("H");
// var currentHour = '9';
var formattedDate = dayjs().format("dddd, D MMMM");
currentDate.text(formattedDate)
console.log(currentHour)

var calendarElements = function () {
    for (var i = 9; i < 18; i++) {
        var hourBlock = $('<div>');
        var hourText = $('<div>');
        var hourTextInput = $('<textarea>');
        hourBlock.addClass('row time-block');
        hourBlock.attr("id", "hour" + i);
        hourText.addClass("col hour")
        hourTextInput.addClass('col-8 col-md-10 description');
        hourTextInput.attr('rows', '3');
        if (i < 12) {
            hourText.text(i + 'AM');
        } else if (i === 12) {
            hourText.text(i + 'PM');
        } else {
            hourText.text(i - 12 + 'PM');
        }

        if (i == currentHour) {
            hourTextInput.attr("class", "present col-8 text");
        } else if (i < currentHour) {
            hourTextInput.attr("class", "past col-8 text");
        } else if (i > currentHour) {
            hourTextInput.attr("class", "future col-8 text");
        };

        $(".container").append(hourBlock);
        hourBlock.append(hourText);
        hourBlock.append(hourTextInput)

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

