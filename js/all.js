
$(document).ready(function(){

    $("button.hamburger_icon").on("click", function(){
      $(this).toggleClass("-on");
      $('body').toggleClass('menu-show');
    });

});

