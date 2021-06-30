$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $("#enviarCorreo").click(function(){
      alert("el correo fue enviado correctamente")
  })
  $("h4").on("dblclick",function(){
      $(this).css("color","red");
  })

$(".card-selector").click(function(){
    $(".card-text").toggle()
})