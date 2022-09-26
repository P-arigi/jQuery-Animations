//Just explanation of chaining in jQuery.

$("div").first().parent().find(".project").css("color","red").fadeOut(200);

//This can also be written as

$("div")
   .first()
   .parent()
   .find(".projects")
   .css("color","red")
   .fadeOut(200);