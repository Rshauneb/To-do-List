//click on li turns marks it as done ... line trough and gray
$("ul").on("click", "li", function(){
  $(this).toggleClass("complete");
})


// clicking on x removes the li
$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  } )
  event.stopPropagation();
})


//on enter gets input from input box
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash'></i></span><p>"+ todoText +"</p></li>")
  }
})


//click + button add or hide hidden input
$(".fa-plus").on("click", function(){
  // $("input").toggleClass("hide");
  $("input").fadeToggle();
  // $(this).css("color",  "red");
})
