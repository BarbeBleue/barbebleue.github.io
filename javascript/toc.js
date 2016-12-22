function tocFr(){

var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>Sur cette page :</h2>" +
    "<ul>";

var newLine, el, title, link;

$("article h2").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
    "<li id=\"back-top\"><a href=\"#\">Retour vers le haut</a></li>"
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

}

function tocEn(){

var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>On this page:</h2>" +
    "<ul>";

var newLine, el, title, link;

$("article h2").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
    "<li id=\"back-top\"><a href=\"#\">Back to top</a></li>"
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

}