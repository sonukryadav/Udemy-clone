
window.locate1 = locate1;
window.hover5 = hover5;
window.hover6 = hover6;
window.hover5si= hover5si;
window.hover6si = hover6si;
window.locate2 = locate2;

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

let xax = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];


function hover5si(x1) {
    for (let x in xax) {
        if (x == x1) {
            // document.getElementsByClassName("sxhv2i")[x1].style.color = "RGB(86, 36, 208)";
            document.querySelector(".sxhover1ii").style.display = "block";
            switch (x) {
                case "0":
                    hover1si(g0, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                case "1": {
                    hover1si(g1, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                }
                case "2":
                    hover1si(g2, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "3":
                    hover1si(g3, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "4":
                    hover1si(g4, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "5":
                    hover1si(g5, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "6":
                    hover1si(g6,"sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                case "7": {
                    hover1si(g7, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;
                }
                case "8":
                    hover1si(g8, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "9":
                    hover1si(g9, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "10":
                    hover1si(g0, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                case "11":
                    hover1si(g1, "sxhover1ii", "sxhv1ii", "sxhv2i");
                    break;

                default:
                    hover1si(g2, "sxhover1ii", "sxhv1ii", "sxhv2i");
            }
        }
    }
}

function hover6si(x1) {
    for (let x in xax) {
        if (x == x1) {
            // document.getElementsByClassName("sxhv2i")[x].style.color = "rgb(85, 85, 85)";
        }

    }

}
// location on click--------------------------------------

function locate1(x) {
    location.href = `${x}.html`;
}

function locate2(x) {
    location.href = `${x}.html`;
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




// ON LOGIN CHANGE THE NAVBAR---login -login-login------------
(function () {
    if (0) {
        document.querySelector(".navbarsz-onlogin").style.display = "flex";
        document.querySelector(".navbarsz").style.display = "none";
    }
    else {
        document.querySelector(".navbarsz-onlogin").style.display = "none";
        document.querySelector(".navbarsz").style.display = "flex";
    }
})();



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



