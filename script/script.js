var currentDate = $("#currentDay");
var currentHour = dayjs().format("H");
var formattedDate = dayjs().format("dddd, D MMMM");
currentDate.text(formattedDate)
console.log(currentHour)

var calendarElements = function () {
    for (var i = 9; i < 20; i++) {
        var hourBlock = $("<div>");
        var hourText = $("<div>");
        var hourTextInput = $("<textarea>");
        var saveBtn = $("<button>")
        var saveIcn = $("<i>")
        hourBlock.addClass("row time-block");
        hourBlock.attr("id", "hour" + i);
        hourText.addClass("col-md-1 hour py-2")
        hourTextInput.addClass("col-8 col-md-10")
        saveBtn.addClass("btn saveBtn col-md-1")
        saveBtn.removeClass("btn:hover")
        saveIcn.addClass('fas fa-save');
        if (i < 12) {
            hourText.text(i + "AM");
        } else if (i === 12) {
            hourText.text(i + "PM");
        } else {
            hourText.text(i - 12 + "PM");
        }

        if (i == currentHour) {
            hourTextInput.addClass("present");
        } else if (i < currentHour) {
            hourTextInput.addClass("past");
        } else if (i > currentHour) {
            hourTextInput.addClass("future");
        };

        $(".container").append(hourBlock);
        hourBlock.append(hourText);
        hourBlock.append(hourTextInput);
        hourBlock.append(saveBtn);
        saveBtn.append(saveIcn);

    }
}
    calendarElements();

    saveBtn.on("click", function () {
        localStorage.setItem(timeblockRow.id, timeblockText.value);
      });

//Potentially get calendar elements from bootstrap

// calendar elements are all form elemnents (use previous days activities and pilfer code)
// If statement for conditional CSS in calendar linked to dayjs current date/time
// if in the past turn grey
// in in the future turn green
// else red

// Event listener for save buttom
// use JSON to store events in local storage when save button is clicked

