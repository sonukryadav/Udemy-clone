var user_data = JSON.parse(localStorage.getItem("user_details"))

function checkuser(e){
    e.preventDefault()

    var user_email = document.getElementById("email").value

    var user_password = document.getElementById("pass").value

    user_data.forEach(function(product){

           var user_e = product.email
           var user_p = product.password


       if(user_e == user_email && user_p == user_password){
        localStorage.setItem("logs","true");
           window.location.href = "index.html"
       }


       else{

          
           alert("There was a problem logging in. Check your email and password or create an account.")


           // var div = document.getElementsByClassName("paragraph")
           // var para1 = document.createElement("p")
           // para1.textContent = "There was a problem logging in. Check your"
           // var para2 = document.createElement("p")
           // para2.textContent =  "email and password or create an account."


           // var parent = document.getElementById("sign_up_page")
           // div.append(para1,para2)
             // parent.append(div)
       }

    })
}
           
var sign_btn = document.getElementById("sign-btn")

function changeBackground(){
sign_btn.style.background = "#7B1FA2"
}
sign_btn.addEventListener("mouseover",changeBackground)

function changeBackground1(){
sign_btn.style.background = "purple"
}
sign_btn.addEventListener("mouseout",changeBackground1)


