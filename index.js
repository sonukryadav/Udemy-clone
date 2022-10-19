
window.locate1 = locate1;
window.hover5 = hover5;
window.hover6 = hover6;
window.hover5si= hover5si;
window.hover6si = hover6si;
window.locate2 = locate2;
window.home1 = home1;
window.webx1 = webx1;

let array2 = ["Development", "Business", "Finance & Accounting", "IT & Software", "Office Productivity", "Personal Development", "Design", "Marketing", "Lifestyle", "Photography & Video", "Health & Fitness", "Music", "Teaching & Academics"];

let a0 = ["Web Development", "Data Science", "Mobile Development", "Programming Languages", "Game Development", "Database Design & Development", "Software Testing", "Software Engineering", "Software Development Tools", "No-Code Development"];

let  a1= ["Entrepreneurship", "Communication","Management","Sales","Operations","Project Management", "Business Law", "Business Analytics & Intelligence","Human Resources", "Industry", "E-Commerce", "Media", "Real Estate"];

let a2 = ["Accounting & BookKeeping","Compliance", "Economics", "Finance Cert & Exam Prep", "Finance Modelling & Analysis", "Investing & Trading","Money Management Tools", "Taxes", "Other Finance and Accounting"];

let a3= ["IT Certicications", "Network & Security", "Hardware", "Operating System and Servers", "Other IT & Software"];

let a4= ["Microsoft","Apple", "Google", "Oracle", "Other Office Productivity"];

let a5 = ["Personal Transformation", "Personal Productivity", "Leadership", "Career Development", "Parenting & Relationships", "Happiness", "Esoteric Practices", "Religion & Sprituality", "Personal Brand Building", "Creativity", "Influence", "Self Esteem & Confidence", "Stress Management", "Moral & Study Skills"];


// for the third card

let g0 = ["JavaScript", "React JS", "CSS", "Angular", "Node Js", "Tpyescript", "HTML5", "Django"];

let g1 = ["Python", "Machine Learning", "Data Analysis", "Deep Learning", "Artificaial Intelligence", "R(programming language)", "Statistics", "Natural Language Processing"];

let g2 = ["Google Flutter", "iOS Development", "Swift", "React Native", "Dart(programming language)", "Kotlin", "SwiftUI", "Mobile App Development"];

let g3 = ["Python", "Java", "C#", "React JS", "C++", "JavaScript", "C(programming language)", "Go(programming language)", "Spring Framework"];

let g4 = ["Unity" , "Unreal Engine", "Game Development Fundamentals", "C#","3D Game Development Fundamentals", "C#", "C++", "Unreal Engine Blueprints", "2D Game Development Fundamentals", "2D Game Development", "Blender"];

let g5 = ["SQL", "MySQL", "Oracle SQL", "Database Management", "MongoDB", "Apache Kafka","SQL Server", "PostgreSQL", "Database Programming"];

let g6 = ["Selenium WebDriver", "Java", "Automation Testing", "Postman", "API Testing", "Selenium Testing Framework", "Cypress.io", "Quality Assurance"];

let g7 = ["Data Structures", "Coding Interview", "Algorithms", "CKAD", "Microservices", "Software Architecture", "Software Practices", "Apache Airflow", "Elasticsearch"];

let g8 = ["Git", "Docker", "JIRA", "Kubernetes", "Confluence", "DevOps", "Jenkins", "Terraform", "CI/CD"];

let g9 = ["Pega", "Microsoft Power Platform", "Bubble Visual Programming", "Elementor", "WordPress", "Wix", "Web Design", "Web Development", "Microsoft Power Automate"];




// category
document.querySelector(".jshv1").addEventListener("mouseover", function () { hover1(array2,"sxhover1","sxhv1")});
document.querySelector(".jshv1").addEventListener("mouseout", hover2);

document.querySelector(".jshv1q").addEventListener("mouseover", function () { hover1(array2, "sxhover1", "sxhv1") });
document.querySelector(".jshv1q").addEventListener("mouseout", hover2);



// first card
document.querySelector(".sxhover1").addEventListener("mouseover", hover3);
document.querySelector(".sxhover1").addEventListener("mouseout", hover4);

// second card
document.querySelector(".sxhover1i").addEventListener("mouseover", hover7);
document.querySelector(".sxhover1i").addEventListener("mouseout", hover8);

// third card
document.querySelector(".sxhover1ii").addEventListener("mouseover", hover7sii);
document.querySelector(".sxhover1ii").addEventListener("mouseout", hover8sii);


// box1
function hover1(array1, box, pos) {
    document.querySelector(`.${box}`).style.display = "block";

    if (document.querySelector(`.${pos}`)) {
        document.querySelector(`.${pos}`).innerHTML = "";
    }
    for (let x in array1) {
        let div1 = document.createElement("div");
        div1.setAttribute("class", "sxhv2");
        div1.setAttribute("onclick", `locate1("${array1[x]}")`);
        div1.setAttribute("onmouseover", `hover5("${x}")`);
        div1.setAttribute("onmouseout", `hover6("${x}")`);

        let span1 = document.createElement("span");
        span1.innerText = `${array1[x]}`;

        let span2 = document.createElement("span");
        span2.className = "material-symbols-outlined";
        span2.innerText = "keyboard_arrow_right";

        div1.append(span1, span2);
        document.querySelector(`.${pos}`).append(div1);
    }
}



// box2
function hover1si(array1, box, pos , inJd) {
    document.querySelector(`.${box}`).style.display = "block";

    if (document.querySelector(`.${pos}`)) {
        document.querySelector(`.${pos}`).innerHTML = "";
    }
    for (let x in array1) {
        let div1 = document.createElement("div");
        div1.setAttribute("class", `${inJd}`);
        div1.setAttribute("onclick", `locate2("${array1[x]}")`);
        div1.setAttribute("onmouseover", `hover5si("${x}")`);
        div1.setAttribute("onmouseout", `hover6si("${x}")`);

        let span1 = document.createElement("span");
        span1.innerText = `${array1[x]}`;

        let span2 = document.createElement("span");
        span2.className = "material-symbols-outlined";
        span2.innerText = "keyboard_arrow_right";

        div1.append(span1, span2);
        document.querySelector(`.${pos}`).append(div1);
    }
}


function hover2() {
    document.querySelector(".sxhover1").style.display = "none";
}

// first box
function hover3() {
    document.querySelector(".sxhover1").style.display = "block";
    // document.querySelector(".sxhover1i").style.display = "block";
    
}
function hover4() {
    document.querySelector(".sxhover1").style.display = "none";
    document.querySelector(".sxhover1i").style.display = "none";
}

// second box
function hover7() {
    document.querySelector(".sxhover1i").style.display = "block";
    // first box
    document.querySelector(".sxhover1").style.display = "block";

    document.querySelector(".sxhover1ii").style.display = "block";

}
function hover8() {
    document.querySelector(".sxhover1i").style.display = "none";
    // first box
    document.querySelector(".sxhover1").style.display = "none";

    document.querySelector(".sxhover1ii").style.display = "none";
}


function hover7sii() {
    document.querySelector(".sxhover1i").style.display = "block";
    // first box
    document.querySelector(".sxhover1").style.display = "block";
    document.querySelector(".sxhover1ii").style.display = "block";
}

function hover8sii() {
    document.querySelector(".sxhover1i").style.display = "none";
    // first box
    document.querySelector(".sxhover1").style.display = "none";
    document.querySelector(".sxhover1ii").style.display = "none";
}







function hover5(x1) {
    for (let x in array2) {
        if (x == x1) {
            document.getElementsByClassName("sxhv2")[x].style.color = "RGB(86, 36, 208)";
            document.querySelector(".sxhover1i").style.display = "block";
            switch (x) {
                case "0":
                    hover1si(a0, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                case "1": {
                    hover1si(a1, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                }
                case "2":
                    hover1si(a2, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                
                case "3":
                    hover1si(a3, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                
                case "4":
                    hover1si(a4, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                
                case "5":
                    hover1si(a5, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                
                case "6":
                    hover1si(a0, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                case "7": {
                    hover1si(a1, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                }
                case "8":
                    hover1si(a2, "sxhover1i", "sxhv1i", "sxhv2");
                    break;

                case "9":
                    hover1si(a3, "sxhover1i", "sxhv1i", "sxhv2");
                    break;

                case "10":
                    hover1si(a4, "sxhover1i", "sxhv1i", "sxhv2");
                    break;

                case "11":
                    hover1si(a5, "sxhover1i", "sxhv1i", "sxhv2");
                    break;
                
                default:
                    hover1si(a3, "sxhover1i", "sxhv1i", "sxhv2");
            }
        }
    }
}

function hover6(x1) {
    for (let x in array2) {
        if (x == x1) {
            document.getElementsByClassName("sxhv2")[x].style.color = "rgb(85, 85, 85)";
        }
        
    }
    
}

let xax = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];



// -------------------------------------------------------------------------------------------

function hover1ssi(array1, box, pos, inJd) {
    document.querySelector(`.${box}`).style.display = "block";

    if (document.querySelector(`.${pos}`)) {
        document.querySelector(`.${pos}`).innerHTML = "";
    }
    for (let x in array1) {
        let div1 = document.createElement("div");
        div1.setAttribute("class", `${inJd}`);
        div1.setAttribute("onclick", `locate2("${array1[x]}")`);
        // div1.setAttribute("onmouseover", `hover5si("${x}")`);
        // div1.setAttribute("onmouseout", `hover6si("${x}")`);

        let span1 = document.createElement("span");
        span1.innerText = `${array1[x]}`;

        let span2 = document.createElement("span");
        span2.className = "material-symbols-outlined";
        span2.innerText = "keyboard_arrow_right";

        div1.append(span1, span2);
        document.querySelector(`.${pos}`).append(div1);
    }
}


function hover5si(x1) {
    for (let x in xax) {
        if (x == x1) {
            document.querySelector(".sxhover1ii").style.display = "block";
            switch (x) {
                case "0":
                    hover1ssi(g0, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                case "1": {
                    hover1ssi(g1, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                }
                case "2":
                    hover1ssi(g2, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "3":
                    hover1ssi(g3, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "4":
                    hover1ssi(g4, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "5":
                    hover1ssi(g5, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "6":
                    hover1ssi(g6, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                case "7": {
                    hover1ssi(g7, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                }
                case "8":
                    hover1ssi(g8, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "9":
                    hover1ssi(g9, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "10":
                    hover1ssi(g0, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "11":
                    hover1ssi(g1, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                default:
                    hover1ssi(g2, "sxhover1ii", "sxhv1ii", "sxhv2i");
            }
        }
    }
}


// -------------------------------------------------------------------------------------------


function hover6si(x1) {
    for (let x in xax) {
        if (x == x1) {
            // document.getElementsByClassName("sxhv2i")[x].style.color = "rgb(85, 85, 85)";
        }

    }

}
// location on click--------------------------------------

function locate1(x) {
    location.href = `products.html`;
    // location.href = `${x}.html`;
    localStorage.setItem("Category", "true");
    localStorage.setItem("Element", x);


}

function locate2(x) {
    location.href = `products.html`;
    // location.href = `${x}.html`;
    localStorage.setItem("Category", "true");
    localStorage.setItem("Element", x);
}



// right side hovers of navbar--- before login-----------------------------



// udemy business
// mouseover
document.querySelector("#sz-7").addEventListener("mouseover", () => {
    document.querySelector(".missh1").style.display = "block";
});

document.querySelector(".missh1").addEventListener("mouseover", () => {
    document.querySelector(".missh1").style.display = "block";
});

// mouseout
document.querySelector("#sz-7").addEventListener("mouseout", () => {
    document.querySelector(".missh1").style.display = "none";
});
document.querySelector(".missh1").addEventListener("mouseout", () => {
    document.querySelector(".missh1").style.display = "none";
});


// udemy tech
// mouseover
document.querySelector("#sz-8").addEventListener("mouseover", () => {
    document.querySelector(".missh2").style.display = "block";
});

document.querySelector(".missh2").addEventListener("mouseover", () => {
    document.querySelector(".missh2").style.display = "block";
});

// mouseout
document.querySelector("#sz-8").addEventListener("mouseout", () => {
    document.querySelector(".missh2").style.display = "none";
});
document.querySelector(".missh2").addEventListener("mouseout", () => {
    document.querySelector(".missh2").style.display = "none";
});



// cart hover effect

// mouseover
document.querySelector("#ssz1p").addEventListener("mouseover", carthv1);

document.querySelector(".carthq1").addEventListener("mouseover", () => {
    document.querySelector(".carthq1").style.display = "block";
});

function carthv1() {
    document.querySelector(".carthq1").style.display = "block"; 
}

// mouseout
document.querySelector("#ssz1p").addEventListener("mouseout", carthv2);

document.querySelector(".carthq1").addEventListener("mouseout", () => {
    document.querySelector(".carthq1").style.display = "none";
});

function carthv2() {
    document.querySelector(".carthq1").style.display = "none";
}




// right side hovers of navbar--- after login-----------------------------
// udemy business
// mouseover
document.querySelector("#jjj1").addEventListener("mouseover", () => {
    document.querySelector(".jii1").style.display = "block";
});

document.querySelector(".jii1").addEventListener("mouseover", () => {
    document.querySelector(".jii1").style.display = "block";
});

// mouseout
document.querySelector("#jjj1").addEventListener("mouseout", () => {
    document.querySelector(".jii1").style.display = "none";
});
document.querySelector(".jii1").addEventListener("mouseout", () => {
    document.querySelector(".jii1").style.display = "none";
});


// my learning

// mouseover
document.querySelector("#jjj2").addEventListener("mouseover", () => {
    document.querySelector(".jii2").style.display = "block";
});

document.querySelector(".jii2").addEventListener("mouseover", () => {
    document.querySelector(".jii2").style.display = "block";
});

// mouseout
document.querySelector("#jjj2").addEventListener("mouseout", () => {
    document.querySelector(".jii2").style.display = "none";
});
document.querySelector(".jii2").addEventListener("mouseout", () => {
    document.querySelector(".jii2").style.display = "none";
});

// my wishlist

// mouseover
document.querySelector("#jjj3").addEventListener("mouseover", () => {
    document.querySelector(".jii3").style.display = "block";
});

document.querySelector(".jii3").addEventListener("mouseover", () => {
    document.querySelector(".jii3").style.display = "block";
});

// mouseout
document.querySelector("#jjj3").addEventListener("mouseout", () => {
    document.querySelector(".jii3").style.display = "none";
});
document.querySelector(".jii3").addEventListener("mouseout", () => {
    document.querySelector(".jii3").style.display = "none";
});


// my cart

// mouseover
document.querySelector("#jjj5").addEventListener("mouseover", () => {
    document.querySelector(".jii5").style.display = "block";
});

document.querySelector(".jii5").addEventListener("mouseover", () => {
    document.querySelector(".jii5").style.display = "block";
});

// mouseout
document.querySelector("#jjj5").addEventListener("mouseout", () => {
    document.querySelector(".jii5").style.display = "none";
});
document.querySelector(".jii5").addEventListener("mouseout", () => {
    document.querySelector(".jii5").style.display = "none";
});

// my profile

// mouseover
document.querySelector("#jjj6").addEventListener("mouseover", () => {
    document.querySelector(".jii6").style.display = "block";
});

document.querySelector(".jii6").addEventListener("mouseover", () => {
    document.querySelector(".jii6").style.display = "block";
});

// mouseout
document.querySelector("#jjj6").addEventListener("mouseout", () => {
    document.querySelector(".jii6").style.display = "none";
});
document.querySelector(".jii6").addEventListener("mouseout", () => {
    document.querySelector(".jii6").style.display = "none";
});




// carousel scripts

let vacl = 1;

(function () {
    setInterval(function () {
        if (vacl % 2 == 0) {
            document.querySelector(".crl2").src = "./images/carousel-single-women-top.jpg";
            document.querySelector("#crltx1").innerText = "Unlock the power of your people";
            document.querySelector("#crltx2").innerHTML = `Udemy Business is trusted by 12.5K+ companies around the world. <a href="#" style="color: blue; text - decoration: underline;">Find out what we can do for yours.</a>`;
            vacl++;
        }
        else {
            document.querySelector(".crl2").src = "./images/carousel-men-women-top.jpg";
            document.querySelector("#crltx1").innerText = "Learning that gets you";
            document.querySelector("#crltx2").innerText = "Skills for your present(and your future).Get started with us.";
            vacl++;
        }
    }, 3000)
})();

document.querySelector("#ppal1").addEventListener("click", () => {
    // let x1 = "g1";
    if (vacl % 2 == 0) {
        document.querySelector(".crl2").src = "./images/carousel-single-women-top.jpg";
        document.querySelector("#crltx1").innerText = "Unlock the power of your people";
        document.querySelector("#crltx2").innerHTML = `Udemy Business is trusted by 12.5K+ companies around the world. <a href="#" style="color: blue; text - decoration: underline;">Find out what we can do for yours.</a>`;
        vacl++;
    }
    else {
        document.querySelector(".crl2").src = "./images/carousel-men-women-top.jpg";
        document.querySelector("#crltx1").innerText = "Learning that gets you";
        document.querySelector("#crltx2").innerText = "Skills for your present(and your future).Get started with us.";
        vacl++;
    }

})
    
document.querySelector("#ppar1").addEventListener("click", () => {
    if (vacl % 2 == 0) {
        document.querySelector(".crl2").src = "./images/carousel-single-women-top.jpg";
        document.querySelector("#crltx1").innerText = "Unlock the power of your people";
        document.querySelector("#crltx2").innerHTML = `Udemy Business is trusted by 12.5K+ companies around the world. <a href="#" style="color: blue; text - decoration: underline;">Find out what we can do for yours.</a>`;
        vacl++;
    }
    else {
        document.querySelector(".crl2").src = "./images/carousel-men-women-top.jpg";
        document.querySelector("#crltx1").innerText = "Learning that gets you";
        document.querySelector("#crltx2").innerText = "Skills for your present(and your future).Get started with us.";
        vacl++;
    }
});






//------------------------Search results js---------------

// before login
document.querySelector(".myin1").addEventListener("keypress", (e) => {
    
    if (e.key === "Enter") {
        event.preventDefault();

        let vals1 = document.querySelector(".myin1").value;
        localStorage.setItem("Element", vals1);
        // location.href = "./products.html";
        document.querySelector(".searchr1").style.display = "none";
        document.querySelector(".searchr3").style.display = "block";
        document.querySelector(".searchr1").style.display = "block";
        document.querySelector(".nano1").style.display = "none";
        

        document.querySelector(".inpval1").innerText = `"${vals1}"`;

        setTimeout(function () {
            location.href = "./products.html";
            document.querySelector(".nano1").style.display = "block";
            document.querySelector(".searchr3").style.display = "none";
            document.querySelector(".searchr4").style.display = "block";
            
        }, 2000);
        
    }
});




// after login

document.querySelector(".myin2").addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        event.preventDefault();

        let vals1 = document.querySelector(".myin2").value;
        localStorage.setItem("Element", vals1);
        // location.href = "./products.html";

        document.querySelector(".searchr1").style.display = "none";
        document.querySelector(".searchr3").style.display = "block";
        document.querySelector(".searchr1").style.display = "block";
        document.querySelector(".nano1").style.display = "none";

        
        document.querySelector(".inpval1").innerText = `"${vals1}"`;

        setTimeout(function () {
            location.href = "./products.html";
            document.querySelector(".nano1").style.display = "block";
            document.querySelector(".searchr3").style.display = "none";
            document.querySelector(".searchr4").style.display = "block";

        }, 2000);

    }
});


function home1() {
    document.querySelector(".searchr1").style.display = "none";
    document.querySelector(".myin1").value = "";
    document.querySelector(".myin2").value = "";
}


//--------XXX-------------Search results js---XXXX--------





//--------------------product card in mid section-------------------------



//  get stars based on rating count :
// function stars(n) {

//     let str = `<span id="ratesc1" class="material-icons">grade</span>`;
//     let str1 = "";
    
//     for (let x = 1; x <= (parseInt(n)); x++){
//         str1 += str;
//     }
//     document.querySelector("#stinit1").innerHTML = str1;
    
// }
// stars(5);



(async function () {
    let datas1 = await fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`);
    let obj1 = await datas1.json();
    // console.log(obj1.record);


    for (let x in obj1.record.python) {

        // starts-------------------------------
        let str1 = "";
        let str = `<span id="ratesc1" class="material-icons">grade</span>`;
        // console.log(parseInt(`${obj1.record.python[x].rating}`));
        
        for (let x1 = 1; x1 <= (parseInt(`${obj1.record.python[x].rating}`)); x1++){
        str1 += str;
        }
        // document.querySelector("#stinit1").innerHTML = str1;
        //stars-----------xxx-------------------
        
        let dsa1 = `<div class="zoome1">
                        <div ><img id="zoome2" src="${obj1.record.python[x].image}" alt=""></div>
                        <p id="zoome3">${obj1.record.python[x].headline}</p>
                        <p id="zoome4">${obj1.record.python[x].title}</p>
                        <p id="zoome5">${obj1.record.python[x].rating} 
                            <span id="stinit1">
                                ${str1}
                            </span>
                            
                        </p>
                        <p id="zoome6"> 
                            <span id="zoome7"><span id="ome7" class="material-symbols-outlined">currency_rupee</span>${obj1.record.python[x].actual_price}</span> 
                            <span id="zoome8"><span id="ome8" class="material-symbols-outlined">currency_rupee</span>${obj1.record.python[x].price}</span>
                        </p>
                    </div>`;
        // stars(`${ obj1.record.python[x].rating}`);
        document.querySelector("#ae8").innerHTML +=dsa1;
        
    }

}) ();


// on click to web development

function webx1() {
    document.getElementById("ae4").innerText = "Build websites and applications with Web Development";
    document.getElementById("ae5").innerText = "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.";
    document.getElementById("ae7").innerText = "Explore Web Development";

    document.getElementById("ae8").innerText = ``;


    (async function () {
        let datas1 = await fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`);
        let obj1 = await datas1.json();

        for (let x in obj1.record.webdevelopment) {

            // starts-------------------------------
            let str1 = "";
            let str = `<span id="ratesc1" class="material-icons">grade</span>`;

            for (let x1 = 1; x1 <= (parseInt(`${obj1.record.webdevelopment[x].rating}`)); x1++) {
                str1 += str;
            }
            // document.querySelector("#stinit1").innerHTML = str1;
            //stars-----------xxx-------------------

            let dsa1 = `<div class="zoome1">
                        <div ><img id="zoome2" src="${obj1.record.webdevelopment[x].image}" alt=""></div>
                        <p id="zoome3">${obj1.record.webdevelopment[x].headline}</p>
                        <p id="zoome4">${obj1.record.webdevelopment[x].title}</p>
                        <p id="zoome5">${obj1.record.webdevelopment[x].rating} 
                            <span id="stinit1">
                                ${str1}
                            </span>
                            
                        </p>
                        <p id="zoome6"> 
                            <span id="zoome7"><span id="ome7" class="material-symbols-outlined">currency_rupee</span>${obj1.record.webdevelopment[x].actual_price}</span> 
                            <span id="zoome8"><span id="ome8" class="material-symbols-outlined">currency_rupee</span>${obj1.record.webdevelopment[x].price}</span>
                        </p>
                    </div>`;
            // stars(`${ obj1.record.webdevelopment[x].rating}`);
            document.querySelector("#ae8").innerHTML += dsa1;

        }

    })();
}


// students are also viewing :------------------


(async function () {
    let datas1 = await fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`);
    let obj1 = await datas1.json();
    // console.log(obj1.record);


    for (let x in obj1.record.html) {

        // starts-------------------------------
        let str1 = "";
        let str = `<span id="ratesc1" class="material-icons">grade</span>`;
        // console.log(parseInt(`${obj1.record.html[x].rating}`));

        for (let x1 = 1; x1 <= (parseInt(`${obj1.record.html[x].rating}`)); x1++) {
            str1 += str;
        }
        // document.querySelector("#stinit1").innerHTML = str1;
        //stars-----------xxx-------------------

        let dsa1 = `<div class="zoome1">
                        <div ><img id="zoome2" src="${obj1.record.html[x].image}" alt=""></div>
                        <p id="zoome3">${obj1.record.html[x].headline}</p>
                        <p id="zoome4">${obj1.record.html[x].title}</p>
                        <p id="zoome5">${obj1.record.html[x].rating} 
                            <span id="stinit1">
                                ${str1}
                            </span>
                            
                        </p>
                        <p id="zoome6"> 
                            <span id="zoome7"><span id="ome7" class="material-symbols-outlined">currency_rupee</span>${obj1.record.html[x].actual_price}</span> 
                            <span id="zoome8"><span id="ome8" class="material-symbols-outlined">currency_rupee</span>${obj1.record.html[x].price}</span>
                        </p>
                    </div>`;
        // stars(`${ obj1.record.html[x].rating}`);
        document.querySelector("#ae10").innerHTML += dsa1;

    }

})();


//-------XXXX--------product card in mid section-----------XXXX-----------







//---------UPDATE DATA FROM THE LOCAL STORAGE AND API TO THE HTML <---THINGS COMPILED BELOW----------


// search result box-- data append -----
// html-start--> 396 (append in "appendHere1")





// ------------------------------------------
// category page link-- line--> 320-325




// wishlist append data function
let wD1 =JSON.parse(localStorage.getItem("wishlist")) || [];
function wishlist() {

    let wishs1 = `<div class="goa6">
                <div> <img id="goa7" src="./images/Building-Flutter-desktop-app-tutorial-examples.avif" alt=""></div>
                <div id="goa7i">
                    <p id="goa8">Flutter and Dart - The complete guide [2022...</p>
                    <p id="goa9">Acadamimd Lores posw</p>
                    <p><span id="goa10"><span class="material-symbols-outlined" id="goa10i">currency_rupee</span>529</span> <span
                            id="goa11"><span class="material-symbols-outlined" id="goa11i">currency_rupee</span>3499</span></p>
                </div>
            </div>`;

    document.querySelector(".zoomx1").innerHTML += wishs1;

}
// wishlist();




// -------------------------------------------------------
// cart append data function

// localStorage.setItem("cart_lectures", JSON.stringify(mu));
let cD1 = JSON.parse(localStorage.getItem("cart_lectures")) || [];

function carts() {
    for (let z in cD1) {
        let cart1 = `<div class="goa6a">
                    <div> <img id="goa7a" src="${cD1[z].image}" alt=""></div>
                    <div id="goa7ia">
                        <p id="goa8a">${cD1[z].title}</p>
                        <p id="goa9a">${cD1[z].visible_instructors[0].name}</p>
                        <p><span id="goa10a"><span class="material-symbols-outlined" id="goa10ia">currency_rupee</span>${cD1[z].actual_price}</span>
                            <span id="goa11a"><span class="material-symbols-outlined" id="goa11ia">currency_rupee</span>${cD1[z].price}</span>
                        </p>
                    </div>
                </div>`;
        document.querySelector(".cartdsx1").innerHTML += cart1;
    }
    
    //------total cart price----
    
    let sumTotal = 0;
    for (let x in cD1) {
        // console.log(`${cD1[x].actual_price}`);
        sumTotal += Number(`${cD1[x].actual_price}`);
    }
    document.querySelector("#total0i").innerText = sumTotal;
}
carts();




// -----------------------------------------------------
// count of item in cart and append the count

function cartcountx() {
    document.querySelector("#itemsincart1").innerText = cD1.length;
}
cartcountx();





// -------------------------------------------------
// profile append data function
// let mxa = [{ name: "so", email: "wefd", }];
// localStorage.setItem("user_details", JSON.stringify(mxa));

let profiledata = JSON.parse(localStorage.getItem("user_details"));

function loggedIn() {
    document.querySelector(".mica1").innerHTML = "";
    for (let m in profiledata) { 
        let pro1 = `<div><img id="mica2" src="./images/me bg blur tree.png" alt=""></div>
                    <div id="mica3">
                        <a href="#"><p>${profiledata[m].name}</p></a>
                        <a href="#"><p>${profiledata[m].email}</p></a>
                    </div>`;
        document.querySelector(".mica1").innerHTML = pro1;
    }
    
}
loggedIn();



//-XXX-----UPDATE DATA FROM THE LOCAL STORAGE AND API TO THE HTML <---THINGS COMPILED BELOW--XXX-----



// ON LOGIN & SIGN-OUT CHANGE THE NAVBAR---login -login-login------------
// localStorage.setItem("logs", "false");
let logged = localStorage.getItem('logs') || "false";
(function () {

    if (logged == "true") {
        document.querySelector(".navbarsz-onlogin").style.display = "flex";
        document.querySelector(".navbarsz").style.display = "none";

        // cart count show
        document.querySelector(".cartcount1").style.display = "block";

    }
    else {
        document.querySelector(".navbarsz-onlogin").style.display = "none";
        document.querySelector(".navbarsz").style.display = "flex";
    }
})();
