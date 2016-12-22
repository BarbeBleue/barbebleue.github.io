function addHeaderFr()
{
	var header = document.getElementById("container");
	header.innerHTML =
		"<style> img { width: 25%; height: 25%; display: block; margin-left: auto; margin-right: auto } </style>"
		    + "<p><a href=\"#\"><img src=\"images/SimonCoteDuchesne.png\" alt=\"Simon Côté-Duchesne\"/></a></p>"
		    + "<ul id=\"nav\">"
		    	+ "<a href=\"index.html\"><li>Accueil</li></a>"
		    	+ "<a href=\"experiences.html\"><li>Expérience</li></a>"
		    	+ "<a href=\"curriculumvitae.html\"><li>C.V.</li></a>"
		    	+ "<a href=\"contact.html\"><li>Contact</li></a>"
		    + "</ul>"
}

function addHeaderEn()
{
	var headerEn = document.getElementById("container");
	headerEn.innerHTML =
		"<style> img { width: 25%; height: 25%; display: block; margin-left: auto; margin-right: auto } </style>"
		    + "<p><a href=\"#\"><img src=\"images/SimonCoteDuchesne.png\" alt=\"Simon Côté-Duchesne\"/></a></p>"
		    + "<ul id=\"nav\">"
		    	+ "<a href=\"index_En.html\"><li>Home</li></a>"
		    	+ "<a href=\"experiences_En.html\"><li>Experience</li></a>"
		    	+ "<a href=\"curriculumvitae_En.html\"><li>C.V.</li></a>"
		    	+ "<a href=\"contact_En.html\"><li>Contact</li></a>"
		    + "</ul>"
}

function addFooterFr()
{
	var footer = document.getElementById("footer");
	footer.innerHTML =
		"<p id=\"copyright\">&copy; Simon Côté-Duchesne</p>"
		+ "<p id=\"back-top\"><a href=\"#\" class=\"back-to-top\">Retour vers le haut</a></p>"
		+ "<a id=\"social\" href=\"https://www.facebook.com/simon.cote.7374\" target=\"_blank\"><img src=\"images/facebook.png\" alt=\"facebook\"></a>"
		+ "<a id=\"social\" href=\"https://ca.linkedin.com/in/simon-côté-duchesne-8228a537\" target=\"_blank\"><img src=\"images/linkedin.png\" alt=\"linkedin\"></a>"
		+ "<a id=\"twitter\" href=\"https://twitter.com/Simon_CoteDuch\" target=\"_blank\"><img src=\"images/twitter.png\" alt=\"twitter\"></a>"
		+ "<a id=\"social\" href=\"https://github.com/SimonCoteDuchesne\" target=\"_blank\"><img src=\"images/github.png\" alt=\"github\"></a>"
		+ "<p id=\"menu\"><br><a href=\"index.html\">Accueil</a> | <a href=\"experiences.html\">Expérience</a> | <a href=\"curriculumvitae.html\">CV</a> | <a href=\"contact.html\">Contact</a></p>"
}

function addFooterEn()
{
	var footerEn = document.getElementById("footer");
	footerEn.innerHTML =
		"<p id=\"copyright\">&copy; Simon Côté-Duchesne</p>"
		+ "<p id=\"back-top\"><a href=\"#\" class=\"back-to-top\">Back to top</a></p>"
		+ "<a id=\"social\" href=\"https://www.facebook.com/simon.cote.7374\" target=\"_blank\"><img src=\"images/facebook.png\" alt=\"facebook\"></a>"
		+ "<a id=\"social\" href=\"https://ca.linkedin.com/in/simon-côté-duchesne-8228a537\" target=\"_blank\"><img src=\"images/linkedin.png\" alt=\"linkedin\"></a>"
		+ "<a id=\"twitter\" href=\"https://twitter.com/Simon_CoteDuch\" target=\"_blank\"><img src=\"images/twitter.png\" alt=\"twitter\"></a>"
		+ "<a id=\"social\" href=\"https://github.com/SimonCoteDuchesne\" target=\"_blank\"><img src=\"images/github.png\" alt=\"github\"></a>"
		+ "<p id=\"menu\"><br><a href=\"index_En.html\">Home</a> | <a href=\"experiences_En.html\">Experience</a> | <a href=\"curriculumvitae_En.html\">CV</a> | <a href=\"contact_En.html\">Contact</a></p>"
}

function addAccordion()
{
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].onclick = function(){
	        this.classList.toggle("active");
	        this.nextElementSibling.classList.toggle("show");
	  	}
	}
}