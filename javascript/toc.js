function tocXpFr(){

var ToC =
  "<nav role='navigation' class='table-of-contents' id='xp'>" +
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
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

}

function tocCurriFr(){

var ToC =
  "<nav role='navigation' class='table-of-contents' id='curri'>" +
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
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

}

function tocXpEn(){

var ToC =
  "<nav role='navigation' class='table-of-contents' id='xp'>" +
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
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

}

function tocCurriEn(){

var ToC =
  "<nav role='navigation' class='table-of-contents' id='curri'>" +
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
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);

}