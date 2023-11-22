var currentDate = $("#currentDay"); // Create ID to store the current date
var formattedDate = dayjs().format("dddd, D MMMM"); // Format the date using dayjs
var currentHour = dayjs().format("H"); // Get current hour of the day using dayjs
currentDate.text(formattedDate) // Display the date as text in the #currentDay ID

// Function to create calendar elements, conditionally format them and append them to the document
var generateCalendar = function () {
    for (var i = 9; i < 18; i++) { // Loops from an index of 9 (starting hour), stopping at 18 (finish hour) to generate 9 hour blocks
        var hourBlock = $("<div>"); // Variable for the container row
        var hourText = $("<div>"); // Variable for the hour column
        var hourTextInput = $("<textarea>"); // Variable for the text input
        var saveBtn = $("<button>") // Variable for the save button elements
        var saveIcn = $("<i>") // Variable for the icon node
        hourBlock.addClass("row time-block"); // Set classes to main row container
        hourBlock.attr("id", "hour" + i); // Set ID of hour+i so each container has unique attribute
        hourText.addClass("col-md-1 hour py-2") // Set bootstrap class for first column with padding
        hourTextInput.addClass("col-8 col-md-10") // Set bootstrap class for second column
        saveBtn.addClass("btn saveBtn col-md-1") // Set bootstrap class for third column
        saveBtn.attr("id", "save" + i); // Set ID of save+i so each saveBtn has unique attribute
        saveIcn.addClass('fas fa-save'); // FontAwesome classes for save icon

        if (i < 12) { // Conditional to set text for each hour and validate for AM and PM
            hourText.text(i + "AM"); // Apply AM to hours less than 23
        } else if (i === 12) { 
            hourText.text(i + "PM"); // Apply PM to 12
        } else {
            hourText.text(i - 12 + "PM"); // Converts 24 hour time to 12 hour and applies PM label
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
    }
}

generateCalendar(); // Call function to generate calendar elements

// Waits for all HTML content before running the code within
$(function() {

    // Function to loop over all hour blocks and get data from the local storage
    $(".hour").each(function () { 
        var thisHour = JSON.parse(localStorage.getItem($(this).text())); // Variable to return key/value pairs from localStorage and store as object
        if (thisHour !== null) { // Checks if key/value pair exists on each iteration
            $(this).siblings("textarea").val(thisHour); // Adds the the value from the object to the sibling textarea field
        }
    });

    $(".saveBtn").on("click", function (event) { // Listens for click on any element with .saveBtn class
        event.preventDefault(); // Prevents default behaviour
        localStorage.setItem($(this).siblings(".hour").text(), JSON.stringify($(this).siblings("textarea").val())); // Sets Hour text and siblings text input to local storage as string
      });
}); 