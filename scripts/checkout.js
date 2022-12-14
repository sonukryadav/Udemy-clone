


function showOnPage(name,img,price){
    let Course = document.getElementById("buyThis");
    let divCh = document.createElement("div");
    divCh.innerHTML = `<img class="img" src="${img}" alt="U">
    <h3 class="name">${name}</h3>
    <p class="price">₹${price}</p>`;
    Course.appendChild(divCh);
}

//for input checking
function checkInput(){
    let filled = document.getElementsByName("userInput");
    for(let i=0;i<filled.length;i++){
        let x = filled[i].value;
        console.log(x);
        if(x===""){
            return false;
        }
    }
    return true;
}

var payMethod = "card";

function paymentMethod(){
    let card = document.getElementById("card");
    let netBanking = document.getElementById("netBanking");
    let upi = document.getElementById("upi");
    let paytm = document.getElementById("paytm");
    let byCard = document.getElementById("forCard");
    byCard.style.display = "none";
    let byNet = document.getElementById("forNet");
    byNet.style.display = "none";
    let byUpi = document.getElementById("forUpi");
    byUpi.style.display = "none";
    let byPaytm = document.getElementById("forPaytm");
    byPaytm.style.display = "none";
    if(card.checked==false){
        byCard.style.display = "none";
        if(netBanking.checked==true){
            byNet.style.display = "block";
            payMethod = "netBanking"
        }
        else if(upi.checked==true){
            byUpi.style.display = "block";
            payMethod = "upi"
        }
        else if(paytm.checked==true){
            byPaytm.style.display = "block";
            payMethod = "paytm"
        }
    }
    else{
        byCard.style.display = "block";
        payMethod = "card"
    }
}


let check = document.getElementsByClassName("check");
paymentMethod();
for(let i=0;i<check.length;i++){
    check[i].addEventListener("click", function(){
        paymentMethod();
    })
}

let courses = JSON.parse(localStorage.getItem("cart_lectures"));
let totalBill = 0;
for(let i=0;i<courses.length;i++){
    let course = courses[i];
    let data = course;
    let name = data.title;
    let img = data.image;
    let price = data.price;
    totalBill+=price;
    price = price.toLocaleString("en-US");
    showOnPage(name,img,price);
}

let oBill = document.getElementById("origionalPrice");
let bill = totalBill.toLocaleString("en-US");
oBill.append(bill);

let discount = JSON.parse(localStorage.getItem("discount"));
// discount = 440;
if(discount!=null){
    totalBill = totalBill - discount;
}
let tBill = document.getElementById("totalPrice");
bill = totalBill.toLocaleString("en-US");
tBill.append(bill);

let Pay = document.getElementById("Payment");
Pay.addEventListener("click", function(){
        window.location.href = "paysuccess.html";
    // window.location.href = "paySuccess.html";
});

const btn = document.getElementsByClassName("blueBtn");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("mouseover", function(){
        btn[i].style.backgroundColor = "#581C7E";
    });
    btn[i].addEventListener("mouseout", function(){
        btn[i].style.backgroundColor = "#a435f0";
    });
}

  //home button ->go to main page
  const btnH = document.getElementsByClassName("btnH");
  for(let i=0;i<btnH.length;i++){
      btnH[i].addEventListener("click", function(){
          window.location.href = "index.html";
      });
  }

  // searchbar
document.getElementById("input_searched").addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        let searched_item = document.getElementById("input_searched").value;
        localStorage.setItem("Element", searched_item);
        localStorage.setItem("Category", "false");
        location.href = "products.html";
    }
})