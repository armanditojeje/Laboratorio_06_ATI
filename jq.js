$(document).ready(function() {
	$("#butt").click(loadDoc);
});

$(document).ajaxError(function(e, jqXHR, settings, exception) {
	switch (jqXHR.status) {
	    case 200:
	        alert("200 OK!");
	        break;
	    default:
	            alert("Un error ha ocurrido: " + jqXHR.status);
	    }
});

var loadDoc = function() {
	$.ajax({
		type: "GET",
		dataType: "xml",
		url: "http://localhost/ATI/data.xml",
	})
	.done(function( result ) {
		myFunction(result);
	})
	.fail(function( result){ //errores
			alert("Error");
	})
	.always(function(){
	});
}

function myFunction( xml ) {
	var i;
	var xmlDoc = $.parseXML(xml);
	var table="<tr><th>Artista</th><th>Titulo</th></tr>";
	$("#demo").empty();

	$xml = $( xmlDoc );
	$(xml).find("CD").each(function() {
		table += "<tr><td>" + $(this).find("ARTIST").text() + "</td><td>" + 
		$(this).find("TITLE").text() + "</td></tr>";
	});
	$("#demo").html(table);
}