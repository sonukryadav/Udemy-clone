// url = "https://www.udemy.com/api-2.0/courses/?search=c++/S7gknSy2YudW0StBl7CJ4dyL8gl0qRz0al2nEUUB/ePP7cEF3ebVKIdNt72e8kFgNpkbWjbI1LVsYz1fgEsySWSpeoXOhFQzGLmTVqHABi4l9oJUUIatJXpyoeQ5QpSy1lkBiKKbbAMH7ExBYNF2cP5PQjUuGAE5MGN1I0Awl"
// url = "https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0";


// localStorage.setItem("Element", "java");
const getdata = (x) => {
    if (x == "java" || x == "Java") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.java, x));
    }
    else if (x == "python" || x == "Python" || x == "Machine Learning" || x == "Data Analysis" || x == "Deep Learning" || x == "Artificial Intelligence" || x == "Statistics" || x == "Natural Language Processing") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.python, x));
    }
    else if (x == "web development" || x == "Development" || x == "Web Development" || x == "React JS" || x == "CSS" || x == "Angular" || x == "Node JS" || x == "Tpyescript" || x == "HTML5" || x == "Django" || x == "Data Science" || x == "Mobile Development" || x == "Google Flutter" || x == "iOS Development" || x == "Swift" || x == "React Native" || x == "Kotlin" || x == "SwiftUI" || x == "Mobile App Development") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.webdevelopment, x));
    }
    else if (x == "javascript" || x == "JavaScript") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.javascript, x));
    }
    else if (x == "html") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.html, x));
    }
    else if (x == "css") {
        fetch(`https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.css, x));
    }
    else if (x == "dsa" || x == "data structure and algorithms") {
        fetch(`https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.business, x));
    }

    else if (x == "c" || x == "C#" || x == "C") {
        fetch(`https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.c, x));
    }

    else if (x == "c++" || x == "C++") {
        fetch(`https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.cplusplus, x));
    }
    else if (x == "business" || x == "Entrepreneurship" || x == "Communication" || x == "Management" || x == "Sales" || x == "Operations" || x == "Project Management" || x == "Business Law" || x == "Human Resources" || x == "Industry") {
        fetch(`https://api.jsonbin.io/v3/b/634e610d2b3499323be26bd8`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.buisness, x));
    }
    else if (x == "music" || x == "Personal Transformation" || x == "Personal Productivity" || x == "Leadership" || x == "Career Development" || x == "Happiness" || x == "Religion & Sprituality" || x == "Creativity") {
        fetch(`https://api.jsonbin.io/v3/b/634e610d2b3499323be26bd8`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.music, x));
    }
    else if (x == "Marketing" || x == "Operations" || x == "Business Law" || x == "Media" || x == "E-Commerce" || x == "Industry" || x == "Real Estate") {
        fetch(`https://api.jsonbin.io/v3/b/634e610d2b3499323be26bd8`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.design, x));
    }
    else if (x == "Finance & Accounting" || x == "Accounting & BookKeeping" || x == "Compliance" || x == "Economics" || x == "Finance Cert & Exam Prep" || x == "Finance Modelling & Analysis" || x == "Investing & Trading" || x == "Money Management Tools" || x == "Taxes" || x == "Other Finance and Accounting") {
        fetch(`https://api.jsonbin.io/v3/b/634e610d2b3499323be26bd8`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.finance, x));
    }
    else {
        fetch(`https://api.jsonbin.io/v3/b/634e610d2b3499323be26bd8`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.english, x));
    }
}

const add_item_cart = (elem) => {
    let arr = JSON.parse(localStorage.getItem("cart_lectures")) || [];
    arr.push(elem);
    localStorage.setItem("cart_lectures", JSON.stringify(arr));

}

const description_element = (elem) => {
    let arr = [];
    arr.push(elem);
    localStorage.setItem("product_description", JSON.stringify(arr));
    location.href = "pro_desc.html"
}

const category_showing_fun = (arr, key) => {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "category_div1")
    let h1 = document.createElement("h1");
    h1.innerText = key;
    div1.append(h1);
    let div2 = document.createElement("div");
    div2.setAttribute("id", "category_div2")
    let h21 = document.createElement("h2");
    h21.innerText = "courses to get you started";
    div2.append(h21);
    let div3 = document.createElement("div");
    div3.setAttribute("id", "category_div3")

    for (let i = 0; i < 5; i++) {
        let div4 = document.createElement("div");
        let img = document.createElement("img");
        img.src = arr[i].image;
        img.addEventListener("click", () => {
            description_element(arr[i]);
        })
        let title = document.createElement("h3");
        title.innerText = arr[i].title;
        let teacher = document.createElement("p");
        teacher.innerText = arr[i].visible_instructors[0].title;
        let rating = document.createElement("h4");
        rating.innerText = arr[i].rating + " ★";
        let price = document.createElement("h3");
        if (arr[i].actual_price == 0) {
            price.innerText = "Free"
        }
        else {
            price.innerText = "₹" + arr[i].actual_price;
        }
        let cart_btn = document.createElement("button");
        cart_btn.setAttribute("id", "cart_button");
        cart_btn.innerText = "Add To Cart"
        cart_btn.addEventListener("click", function () {
            add_item_cart(arr[i]);
        })
        div4.append(img, title, teacher, rating, price, cart_btn);
        div3.append(div4);
    }
    let div5 = document.createElement("div");
    div5.setAttribute("id", "category_div5")
    let h22 = document.createElement("h2");
    h22.innerText = "Popular Topics"
    div5.append(h22);
    let div6 = document.createElement("div");
    div6.setAttribute("id", "category_div6")
    let b1 = document.createElement("button");
    b1.innerText = "Python"
    b1.addEventListener("click", () => {
        localStorage.setItem("Element", "python")
        localStorage.setItem("Category", false);
        location.href = "products.html";
    })
    let b2 = document.createElement("button");
    b2.innerText = "Javascript"
    b2.addEventListener("click", () => {
        localStorage.setItem("Element", "javascript")
        localStorage.setItem("Category", false);
        location.href = "products.html";
    })
    let b3 = document.createElement("button");
    b3.innerText = "Java"
    b3.addEventListener("click", () => {
        localStorage.setItem("Element", "java")
        localStorage.setItem("Category", false);
        location.href = "products.html";
    })
    let b4 = document.createElement("button");
    b4.innerText = "Web Development"
    b4.addEventListener("click", () => {
        localStorage.setItem("Element", "web development")
        localStorage.setItem("Category", false);
        location.href = "products.html";
    })
    let b5 = document.createElement("button");
    b5.innerText = "C"
    b5.addEventListener("click", () => {
        localStorage.setItem("Element", "c")
        localStorage.setItem("Category", false);
        location.href = "products.html";
    })
    let b6 = document.createElement("button");
    b6.innerText = "Data Structure And Algorithms"
    b6.addEventListener("click", () => {
        localStorage.setItem("Element", "dsa")
        localStorage.setItem("Category", false);
        location.href = "products.html";
    })

    div6.append(b1, b2, b3, b4, b5, b6);

    let div7 = document.createElement("div");
    div7.setAttribute("id", "category_div7");
    let h23 = document.createElement("h2");
    h23.innerText = "Popular Instructors"
    div7.append(h23);
    let div8 = document.createElement("div");
    div8.setAttribute("id", "category_div8");
    let div81 = document.createElement("div");
    let img = document.createElement("img");
    div81.append(img);
    let div82 = document.createElement("div");
    let h3 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p")
    let h32 = document.createElement("h3");
    div82.append(h3, p1, p2, h32)
    div8.append(div81, div82);
    document.getElementById("show_on_category").append(div1, div2, div3, div5, div6, div7, div8);
    let index = 0;
    setInterval(() => {
        index = index % 3;
        if (index == 0) {
            img.src = "https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            h3.innerText = "Master Git and Github in 5 Days"
            p1.innerText = "Learn and master git and github in just one week and use for future";
            p2.innerText = "By Jose Portilla"
            h32.innerText = "₹ 3499";
        }
        if (index == 1) {
            img.src = "https://www.clariontech.com/hubfs/Blog-images/Blog-Image-2.jpg"
            h3.innerText = "Master ios and design in 5 Days"
            p1.innerText = "Learn and master ios and design in just one week and use for future";
            p2.innerText = "By Mark Portilla"
            h32.innerText = "₹ 3599";
        }
        if (index == 2) {
            img.src = "https://i.pinimg.com/originals/f7/ff/05/f7ff050d950cc53b8584520f52a47fcb.jpg"
            h3.innerText = "Master python and development in 5 Days"
            p1.innerText = "Learn and master python and development in just one week and use for future";
            p2.innerText = "By Elshad paul"
            h32.innerText = "₹ 3399";
        }
        index += 1;
    }, 2000)
}

const get_price_filter = (arr, x) => {
    get_rating_filter(arr, x);
    let checkboxes = document.querySelectorAll('.checkbox3');

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', function () {
            if (this.checked == true) {
                let price = this.value
                let flag;
                if (price === "true") {
                    flag = true;
                }
                else {
                    flag = false;
                }
                let newarr = arr.filter(function (elem) {
                    if (elem.is_paid == flag) {
                        return elem
                    }
                })
                get_rating_filter(newarr, x);
            }
            else if (this.checked == false) {
                get_rating_filter(arr, x);
            }
        })
    }

}

const get_rating_filter = (arr, x) => {
    get_level_filter(arr, x);
    let checkboxes = document.querySelectorAll('.checkbox4');

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', function () {
            if (this.checked == true) {
                let rating = this.value

                let newarr = arr.filter(function (elem) {
                    if (elem.rating >= rating) {
                        return elem
                    }
                })
                get_level_filter(newarr, x);
            }
            else if (this.checked == false) {
                get_level_filter(arr, x);
            }
        })
    }

}

const get_level_filter = (arr, x) => {
    get_duration_filter(arr, x);
    let checkboxes = document.querySelectorAll('.checkbox2');

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', function () {
            if (this.checked == true) {
                let level = this.value
                let newarr = arr.filter(function (elem) {
                    if (elem.level == level) {
                        return elem
                    }
                })
                get_duration_filter(newarr, x);
            }
            else if (this.checked == false) {
                get_duration_filter(arr, x);
            }
        })
    }
}

const get_duration_filter = (arr, x) => {
    sorting_lectures(arr, x);
    let checkboxes = document.querySelectorAll('.checkbox5');

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', function () {
            if (this.checked == true) {
                let duration = this.value
                let newarr = arr.filter(function (elem) {
                    if (elem.duration == duration) {
                        return elem
                    }
                })
                sorting_lectures(newarr, x);
            }
            else if (this.checked == false) {
                sorting_lectures(arr, x);
            }
        })
    }
}

const sorting_lectures = (arr, x) => {
    getlecture(arr, x);
    document.getElementById("sorting_lectures").addEventListener("change", function () {
        let value = document.getElementById("sorting_lectures").value;
        if (value == "rated") {
            arr.sort(function (a, b) {
                if (a.rating > b.rating) return -1;
                if (a.rating < b.rating) return 1;
                return 0;
            })
        }
        if (value == "low") {
            arr.sort(function (a, b) {
                if (a.actual_price > b.actual_price) return 1;
                if (a.actual_price < b.actual_price) return -1;
                return 0;
            })
        }
        if (value == "high") {
            arr.sort(function (a, b) {
                if (a.actual_price > b.actual_price) return -1;
                if (a.actual_price < b.actual_price) return 1;
                return 0;
            })
        }
        getlecture(arr, x);
    })
}

function getlecture(arr, x) {
    document.getElementById("product_parent_div").innerHTML = null;
    console.log(arr);
    let count = 0;
    document.getElementById("counts").innerText = arr.length;
    let reults = document.createElement("h3");
    reults.innerText = arr.length + " results";
    document.getElementById("product_parent_div").append(reults);
    if (arr.length == 0) {
        let image = document.createElement("img");
        image.setAttribute("id", "no_image_found")
        image.src = "https://m.media-amazon.com/images/G/01/mobile-apps/dex/amazoncreator/amazon-creator-no-content-found._TTH_.png";
        document.getElementById("product_parent_div").append(image);
    }
    else {
        arr.map((elem) => {
            let div = document.createElement("div");
            let div1 = document.createElement("div");
            div1.setAttribute("id", "image_div")
            let div2 = document.createElement("div");
            div2.setAttribute("id", "details_div")
            let div3 = document.createElement("div");
            div3.setAttribute("id", "price_div")
            let img = document.createElement("img");
            img.src = elem.image;
            img.addEventListener("click", () => {
                description_element(elem);
            })
            let title = document.createElement("h3");
            title.innerText = elem.title;
            let des = document.createElement("p");
            des.innerText = elem.headline;
            let teacher = document.createElement("p");
            teacher.innerText = elem.visible_instructors[0].title;
            let rating = document.createElement("h4");
            rating.setAttribute("id", "main_body_rating");
            rating.innerText = elem.rating + " ★";
            let price = document.createElement("h3");
            let cart_btn = document.createElement("button");
            cart_btn.setAttribute("id", "cart_button");
            cart_btn.innerText = "Add To Cart"
            cart_btn.addEventListener("click", function () {
                add_item_cart(elem);
            })
            let br = document.createElement("br");
            if (elem.actual_price == 0) {
                price.innerText = "Free"
            }
            else {
                price.innerText = "₹" + elem.actual_price;
            }
            let hr = document.createElement("hr");
            if (count % 3 === 0) {
                let best = document.createElement("button")
                best.innerText = "Bestseller"
                div2.append(title, des, teacher, rating, best, br, cart_btn);
            }
            else {
                div2.append(title, des, teacher, rating, cart_btn);
            }
            div1.append(img);
            div3.append(price);
            div.append(div1, div2, div3)
            document.getElementById("product_parent_div").append(div, hr);
            count++;
        })
        let check_cat = localStorage.getItem("Category") || "false";
        console.log(check_cat);
        if (check_cat == "false") {
            console.log(check_cat)
        }
        else {
            localStorage.setItem("Category", "false");
            category_showing_fun(arr, x)
        }
    }
}
localStorage.setItem("Category", "true")

let x = localStorage.getItem("Element");
document.getElementById("lecture_name").innerText = x;
getdata(x);


let checkboxes = document.querySelectorAll('.checkbox');

for (let checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            getdata(this.value);
        }
    })
}


const show_more_button = document.getElementById("show_more_button");
const text = document.getElementById("myfilter");

show_more_button.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (show_more_button.innerText == 'Show more...') {
        show_more_button.innerText = "Show less..."
    }
    else {
        show_more_button.innerText = "Show more...";
    }
})

const filter_button_hide = document.getElementById("filter_button_hide_fun");
const hide_filter = document.getElementById("filter_products");

filter_button_hide.addEventListener("click", (e) => {
    hide_filter.classList.toggle("show-filter-options")
})


document.querySelector(".suggested_topic_button1").addEventListener("click", () => {
    localStorage.setItem("Element", "c");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button2").addEventListener("click", () => {
    localStorage.setItem("Element", "java");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button3").addEventListener("click", () => {
    localStorage.setItem("Element", "python");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button4").addEventListener("click", () => {
    localStorage.setItem("Element", "c++");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button5").addEventListener("click", () => {
    localStorage.setItem("Element", "web development");
    location.href = "products.html"
})


//product_description

// navbar............

document.getElementById("input_searched").addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        let searched_item = document.getElementById("input_searched").value;
        localStorage.setItem("Element", searched_item);
        localStorage.setItem("Category", "false");
        location.href = "products.html";
    }
})