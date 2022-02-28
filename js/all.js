
$(document).ready(function(){

    $("button.hamburger_icon").on("click", function(){
      $(this).toggleClass("-on");
      $('body').toggleClass('menu-show');
    });

});


document.addEventListener("DOMContentLoaded", function(){
  document.addEventListener("click",function(e){
      if(e.target.classList.contains("trash")){
        let is_delete = confirm("確認刪除？");
    
          if(is_delete){
    
            e.target.closest("ul").classList.add("fade_out");
            setTimeout(function(){
              e.target.closest("ul").remove();
            },1000);
            
          }
      }
  });




});

