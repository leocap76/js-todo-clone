// console.log('prova');


$(document).ready(function() {

  var list = [
   {
    text:"colazione",
  },
   {
    text:"Lezione della mattina",
  },
   {
    text:"pranzare",
  },
   {
    text:"esercitazione pomeriggio",
  },
  ];

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  for( var = 0; i < list.length; i++){
    var html = template(list[i]);
    $(".todo-list").append(html);
  }

});
