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

  for( var i = 0; i < list.length; i++){
    var html = template(list[i]);
    $(".todo-list").append(html);
  }



//_________________________________
//funzione elimina elemento dalla lista cliccando sulla "x"
$(".done").click(function(){
  $(this).parent().remove();
})
});
