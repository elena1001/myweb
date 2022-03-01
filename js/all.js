
//------loading------
window.addEventListener("load",function(){
  document.getElementsByClassName("loading_block")[0].remove();
  });

//------------漢堡--------------
$(document).ready(function(){

    $("button.hamburger_icon").on("click", function(){
      $(this).toggleClass("-on");
      $('body').toggleClass('menu-show');
    });

});

//--------刪除商品-------

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

