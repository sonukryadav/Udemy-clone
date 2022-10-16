var user_array =  []
function signupform(e){
    e.preventDefault()

    const user  = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password:  document.getElementById("pass").value,


    }
    user_array.push(user)

    var json_user = JSON.stringify(user_array)
    localStorage.setItem("user_details", json_user)


    window.location.href = "login.html"

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
