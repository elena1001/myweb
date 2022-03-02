
AOS.init();

var button_product_add = document.getElementsByClassName("product_add");
for (let i =0; i < button_product_add.length; i++) {
  button_product_add[i].addEventListener("click",function(){
  alert("已加入購物車");
  });
}

var button_cart_add = document.getElementsByClassName("products_card");
let products_pic = document.getElementsByClassName("products_pic");
let products_name = document.getElementsByClassName("products_name");
let products_price = document.getElementsByClassName("products_price");
for(let i = 0 ; i < button_cart_add.length; i++){
  button_cart_add[i].addEventListener("click",function(){
    let products_pic1 =products_pic[i].src;
    let products_name1 = products_name[i].innerHTML;
    let products_price1 = products_price[i].innerHTML;
    let list_item =`
    <div>
        <ul class="float_cartmain">
            <li>
                <img src="${products_pic1}" alt="">
            </li>
            <li>
                <h5>${products_name1}</h5>
            </li>
            <li>
                <h5> NT ${products_price1}</h5>
            </li>
            <li>
                <a href="#"><i class="fas fa-trash-alt trash"></i></a>
            </li>
        </ul> 
      </div> `;
  
  let cart_list = document.getElementsByClassName("float_cart1")[0];
  cart_list.insertAdjacentHTML("afterend",list_item);

  // let float_cart_text = document.getElementsByClassName("float_cart_text")[0];
  // float_cart_text.classList.add("none");

  // // 儲存資料到 localStorage
  // let task = {
  //   "pic":products_pic,
  //   "name": products_name, 
  //   "price": products_price,
  //   "trash":
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
