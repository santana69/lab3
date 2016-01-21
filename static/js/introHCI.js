'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Aww Yis! Javascript is connected");

		//Change text of this button
		$(this).text("I am the new text of this button and I like it.");

		//Add class to .jumbotron p
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("div.thumbnail").click(projectClick)

	//Add listener to form submitBtn
	$("#submitBtn").click(function(e) {
		e.preventDefault();

		var selectedProject = $("select#project").val();
		$(selectedProject).animate({
			width: $('#width').val()
		});

		var description = $(selectedProject).find(".image-description p");
	    if (description.length > 0) {
	       //only update if description exists
	       description.text($('#description').val());
	    }
	})
}

function projectClick(e) { 
	//logging
	var projectTitle = $(this).find("a").html();
	//log text to see if valid
	console.log("Project clicked: "+ projectTitle);

    // prevent the page from reloading      
    e.preventDefault();

    //We will toggle image and description for this project
    $(this).find(".image-description").slideToggle();

    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    //$(this).css("background-color", "#7fff00");
/*
    //var jumbotronHeader = $("#jumbotron h1"); //ERROR: jumbotron is class not id
    var jumbotronHeader = $(".jumbotron h1");
    //log length to see if we found proper object
    console.log("jumbotronHeader.length: "+jumbotronHeader.length);

    //length is 0 with $("#jumbotron h1"), means we're not accessing correct object
    //Problem is that jumbotron is a class, not an id. Fix by using $(".jumbotron h1") instead

    jumbotronHeader.text(projectTitle);
*/
/*
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.slideToggle();
    }
    */
}