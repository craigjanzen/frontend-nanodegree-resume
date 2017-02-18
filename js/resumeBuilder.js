var name = "Craig Janzen";
var formattedName = HTMLheaderName.replace("%data%", name );
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);












var formattedName = HTMLheaderName.replace("%data%", name );
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skillset = ["programming", "languages", "unix", "Network"];
var bio = { "name" : "Craig",
			"role" : "Developer",
			"picture" : "undefined",
			"skills" : skillset,
			"contacts" : [ {
				"mobile" : "905-699-1765",
				"email" : "craig.janzen@gmail.com"
							}]
				 }




var work = {
	"jobs": [
{ 
		"employer" : "FCT",
		"title" : "System Analyst",
		"location" : "Oakville",
		"dates" : "February 28 2014",
		"description" : "test" 
	},
	{ 
		"employer" : "FCT2",
		"title" : "System Analyst",
		"location" : "Oakville",
		"dates" : "February 28 2014",
		"description" : "test" 
	}

	]

}

var projects = {
	"projects": [
{ 
		"title" : "network refresh",
		"dates" : "February 28 2014",
		"description" : "test",
		"images" : "not defined"
	}

	]

}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		//var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		//$(".project-entry:last").append(formattedDates);
		//var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		//$(".project-entry:last").append(formattedDescription);
		//var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		//$(".project-entry:last").append(formattedImage);
}
}

var education = {
	"schools": [ 
	{
		"name": "sheridan",
		"location": "Oakville",
		"degree" : "Diploma",
		"majors" : "Accounting"
	},
	{
		"name": "ECDRURY",
		"location": "Milton",
		"degree" : "Diploma",
		"majors" : "NA"
		}
		],
	
		"onlineCourses": [
		{
			"title": "Java Script",
			"school": "Udacity",
			"dates": 2014
		}
		]
		}

if ( bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);


}
function displayWork() {
for ( job in work.jobs ) {
	$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer  );
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title );
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

}		

}
displayWork()