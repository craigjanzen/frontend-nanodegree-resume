$("#main").append(["Craig"]);
var name = "Craig Janzen";
var formattedName = HTMLheaderName.replace("%data%", name );
var role = "Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var skills = ["programming", "languages", "unix"];
var bio = { "name" : "Craig",
			"role" : "Developer",
			"picture" : "undefined",
			"skills" : skills,
			"contacts" : [ {
				"mobile" : "905-699-1765",
				"email" : "craig.janzen@gmail.com"
							}]
				 }



 $("#main").append(bio.skills);
var work = {
	"jobs": [
{ 
		"employer" : "FCT",
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
 //$("#main").append(work.position);
 //$("#main").append(education.name);