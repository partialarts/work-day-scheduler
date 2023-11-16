var currentDate = $("#currentDay"); // Create ID to store the current date
var formattedDate = dayjs().format("dddd, D MMMM"); // Format the date using dayjs
var currentHour = dayjs().format("H"); // Get current hour of the day using dayjs
currentDate.text(formattedDate) // Display the date as text in the #currentDay ID

// Function to create calendar elements, conditionally format them and append them to the document
var calendarElements = function () {
    for (var i = 9; i < 18; i++) { // Loops from an index of 9, stopping at 18 to generate 9 hour blocks starting from 9
        var hourBlock = $("<div>"); // Variable for the container row
        var hourText = $("<div>"); // Variable for the hour column
        var hourTextInput = $("<textarea>"); // Variable for the text input
        var saveBtn = $("<button>") // Variable for the save button elements
        var saveIcn = $("<i>") // Variable for the icon node
        hourBlock.addClass("row time-block"); // Apply classes to main row container
        hourBlock.attr("id", "hour" + i); // Apply ID of hour+i so each container has unique attribute
        hourText.addClass("col-md-1 hour py-2") // Apply bootstrap class for first column with padding
        hourTextInput.addClass("col-8 col-md-10") // Apply bootstrap class for second column
        saveBtn.addClass("btn saveBtn col-md-1") // Apply bootstrap class for third column
        saveBtn.attr("id", "save" + i); // Apply ID of save+i so each saveBtn has unique attribute
        saveIcn.addClass('fas fa-save'); // FontAwesome classes for save icon

        if (i < 12) { // Conditional to set text for each hour and correctly apply AM and PM
            hourText.text(i + "AM");
        } else if (i === 12) {
            hourText.text(i + "PM");
        } else {
            hourText.text(i - 12 + "PM"); // Converts 24 hour time to 12 hour
        }

        if (i == currentHour) { // Apply correct formatting bases on currentHour variable
            hourTextInput.addClass("present");
        } else if (i < currentHour) {
            hourTextInput.addClass("past");
        } else if (i > currentHour) {
            hourTextInput.addClass("future");
        };

        // Appends all elements to the correct part of the document
        $(".container").append(hourBlock);
        hourBlock.append(hourText, hourTextInput, saveBtn);
        saveBtn.append(saveIcn);

        // Why won't this work?
        console.log(localStorage.getItem(localStorage.key(i)))

    }
}
// localStorage.clear();
calendarElements();

// var storePlanner = function (key, value) {
//     localStorage.setItem(key, value);
// }

$(document).ready(function () { // Function will only start once HTML is fully loaded

    $(".saveBtn").on("click", function (event) { // Listens for click on any element with .saveBtn class
        event.preventDefault(); // Prevents default behaviour
        var eventTime = $(this).siblings(".hour").text(); // Gets hour text from sibling element of the button that was clicked
        var textInput = $(this).siblings("textarea").val(); // Gets value from sibling text input field of the button that was clicked
        localStorage.setItem(eventTime, textInput); // Sets Hour text and related text input to local storage
      });

    
});




//Potentially get calendar elements from bootstrap

// calendar elements are all form elemnents (use previous days activities and pilfer code)
// If statement for conditional CSS in calendar linked to dayjs current date/time
// if in the past turn grey
// in in the future turn green
// else red

// Event listener for save buttom
// use JSON to store events in local storage when save button is clicked

