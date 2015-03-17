//$("#main").append(["Ron Guha"])

var name = "Ron Guha";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Analyst";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



