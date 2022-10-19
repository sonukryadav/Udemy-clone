function check() {
  //if nothing in all three
  if (cartTotal === 0 && saved === 0 && wished === 0) {
    let box = document.getElementsByClassName("container")[0];
    box.style.display = "none";
  }

  //if nothing or something in cart
  if (cartTotal == 0) {
    let box = document.getElementsByClassName("nonEmpty");
    for (let i = 0; i < box.length; i++) {
      box[i].style.display = "none";
    }
    let box2 = document.getElementById("emptyCart");
    box2.style.display = "block";
    let cartProp = document.getElementById("cartItems");
    cartProp.style.display = "flex";
  } else {
    let box = document.getElementById("emptyCart");
    box.style.display = "none";
  }

  //if nothing or something in saved for later
  if (saved == 0) {
    let box = document.getElementById("saved");
    box.style.display = "none";
  } else {
    let box = document.getElementById("saved0");
    box.style.display = "none";
  }

  //if nothing or something in wishlist
  if (wished == 0) {
    let box = document.getElementById("wished");
    box.style.display = "none";
  } else {
    let box = document.getElementById("wished0");
    box.style.display = "none";
  }

  //only shows wishlist when user is logged in
  if (loggedIn == false) {
    let box = document.getElementById("showOnLog");
    box.style.display = "none";
    let btn = document.getElementsByClassName("rBtn3");
    for (let r = 0; r < btn.length; r++) {
      btn[r].style.display = "none";
    }
  }
  let cartTotal2 = document.getElementById("cartTotal");
  cartTotal2.innerHTML = cartTotal;
}


function showOnPage(){
  if(cartTotal==0){
    check();
    showInCart();
    return;
  }
  showInCart();
  check();
}
//discount coupon
function checkCoupon() {
  let couponCode = document.getElementById("couponCode").value;
  let couponName = document.getElementById("couponName");
  let data = JSON.parse(localStorage.getItem("coupon"));
  data.forEach(function (x) {
    if (x === couponCode) {
      couponName.innerText = couponCode;
      return true;
    }
  });
}

localStorage.removeItem("discount");

let cartTotal = JSON.parse(localStorage.getItem("cart_lectures"));

if(cartTotal==null){
  cartTotal = 0;
}else{
  cartTotal = cartTotal.length;
}
let saved = 0;
let wished = 0;

const loggedIn = true;
let Bill;

function applyCouponCode() {
  let apply = checkCoupon();
  if (apply == false) {
    return;
  } else {
    let discount = 30;
    discount = (Bill * discount) / 100;
    let priceOff = document.getElementById("priceOff");
    newBill = Bill - discount;
    newBill = newBill.toLocaleString("en-US");
    priceOff.innerHTML = `<span>₹${Bill.toLocaleString("en-US")}</span>`;
    totalBill.innerHTML = newBill;
    localStorage.setItem("discount", JSON.stringify(discount));
    console.log(newBill);
    localStorage.setItem("newbill", JSON.stringify(newBill));
  }
}

//home button ->go to main page
const btnH = document.getElementsByClassName("btnH");
for (let i = 0; i < btnH.length; i++) {
  btnH[i].addEventListener("click", function () {
    window.location.href = "../index.html";
  });
}

let cart = document.getElementById("cart");
let data = JSON.parse(localStorage.getItem("courseData"));



let arr = [];
arr.push("MASAI30");
arr.push("TECHNOPHILE");

localStorage.setItem("coupon", JSON.stringify(arr));

function showInCart() {
  let coursesInCart = JSON.parse(localStorage.getItem("cart_lectures"));
  
  let dest = document.getElementById("cart");
  dest.innerHTML = "";
  let bill = 0;
  for (let i = 0; i < coursesInCart.length; i++) {
    let course = coursesInCart[i];
    let data = course;
    let courseName = data.title;
    let img = data.image;
    let tutor = data.visible_instructors[0].title;
    let price = data.price;
    bill += price;
    price = price.toLocaleString("en-US");
    let divC = document.createElement("div");
    divC.classList = "bdLight inCart";
    divC.innerHTML = `<img class="image" src="${img}">
        <div id="mainText">
        <p class="courseName text">${courseName}</p>
        <p class="tutor text">${tutor}</p>
        </div>
        <div class="cartButtons"><a class="rBtn1 rBtn">Remove</a><a class="rBtn2 rBtn">Save For Later</a><a class="rBtn3 rBtn">Move to Wishlist</a></div>
        <p class="price">₹${price}</p>`;
    dest.append(divC);
  }
  Bill = bill;
  bill = bill.toLocaleString("en-US");
  totalBill.innerText = bill;
}
showOnPage();
localStorage.setItem("cart_lectures", JSON.stringify(arr));
let removeBtn = document.getElementsByClassName("rBtn1");
let courseInCart = document.getElementsByClassName("courseName");
for (let i = 0; i < removeBtn.length; i++) {
  let btn = removeBtn[i];
  btn.addEventListener("click", function () {
    console.log("remove");
    let course = courseInCart[i].innerText;
    console.log(course);
    let arr = JSON.parse(localStorage.getItem("cart_lectures"));
    for (let j = 0; j < arr.length; j++) {
      let name = arr[j].title;
      if (name === course) {
        arr.splice(j, 1);
        break;
      }
    }
    cartTotal--;
    localStorage.setItem("cart_lectures", JSON.stringify(arr));
    showOnPage();
  });
}

let checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
  if (loggedIn) {
    window.location.href = "checkout.html";
  } else {
    window.confirm(
      "Please LogIn to proceed further",
      (window.location.href = "login.html")
    );
  }
});

let applyCoupon = document.getElementById("applyCoupon");
applyCoupon.addEventListener("click", function (x) {
  x.preventDefault();
  applyCouponCode();
});

// searchbar
document.getElementById("input_searched").addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        let searched_item = document.getElementById("input_searched").value;
        localStorage.setItem("Element", searched_item);
        localStorage.setItem("Category", "false");
        location.href = "products.html";
    }
})