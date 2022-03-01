
AOS.init();

var button_product_add = document.getElementsByClassName("product_add");
for (let i =0; i < button_product_add.length; i++) {
  button_product_add[i].addEventListener("click",function(){
  alert("已加入購物車");
  });
}

var button_cart_add = document.getElementsByClassName("products_card__topin");
for(let i = 0 ; i < button_cart_add.length; i++){
  button_cart_add[i].addEventListener("click",function(){

    let list_item =`
    <div>
        <ul class="float_cartmain">
            <li>
                <img src="./product/products1.png" alt="">
            </li>
            <li>
                <h5>草莓乳酪塔</h5>
            </li>
            <li>
                <h5> 1x NT$750</h5>
            </li>
            <li>
                <a href="#"><i class="fas fa-trash-alt trash"></i></a>
            </li>
        </ul> 
      </div> `;
  
  let cart_list = document.getElementsByClassName("float_cart")[0];
  cart_list.insertAdjacentHTML("afterbegin",list_item);

  let float_cart_text = document.getElementsByClassName("float_cart_text")[0];
  float_cart_text.classList.add("none");

  // // 儲存資料到 localStorage
  // let task = {
  //   "item_id": item_id,
  //   "name": task_text, // 新增的待辦事項文字
  //   "star": 0 // 預設 0
  // };

  // let tasks = JSON.parse(localStorage.getItem("tasks"));
  // if(tasks){ // 若存在
  // tasks.unshift(task);  // [{},{}]
  // }else{ // 若不存在
  // tasks = [task];  // [{}]
  // }
  // localStorage.setItem("tasks", JSON.stringify(tasks));
  // }
  

  });
}
