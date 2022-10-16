// url = "https://www.udemy.com/api-2.0/courses/?search=c++/S7gknSy2YudW0StBl7CJ4dyL8gl0qRz0al2nEUUB/ePP7cEF3ebVKIdNt72e8kFgNpkbWjbI1LVsYz1fgEsySWSpeoXOhFQzGLmTVqHABi4l9oJUUIatJXpyoeQ5QpSy1lkBiKKbbAMH7ExBYNF2cP5PQjUuGAE5MGN1I0Awl"

// let arr = [{
//     image: "https://dev.java/assets/images/java-logo-vert-blk.png",
//     title: "Java Programming",
//     description: "Learn Java in this course and become java programmer",
//     rating: 4.5,
//     price: 449,
// }]

// url = "https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0";

const getdata = (x) => {
    if (x == "java") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.java, x));
    }
    else if (x == "python") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.python, x));
    }
    else if (x == "web development") {
        fetch(`https://api.jsonbin.io/v3/b/634986f165b57a31e696507c`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.webdevelopment, x));
    }
    else if (x == "javascript") {
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
            .then((data) => get_price_filter(data.record.dsa, x));
    }

    else if (x == "c") {
        fetch(`https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.c, x));
    }

    else if (x == "c++") {
        fetch(`https://api.jsonbin.io/v3/b/6349891b2b3499323bde8ce0`)
            .then((res) => res.json())
            .then((data) => get_price_filter(data.record.cplusplus, x));
    }
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
            let title = document.createElement("h3");
            title.innerText = elem.title;
            let des = document.createElement("p");
            des.innerText = elem.headline;
            let teacher = document.createElement("p");
            teacher.innerText = elem.visible_instructors[0].title;
            let rating = document.createElement("h4");
            rating.innerText = elem.rating;
            let price = document.createElement("h3");
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
                div2.append(title, des, teacher, rating, best);
            }
            else {
                div2.append(title, des, teacher, rating);
            }
            div1.append(img);
            div3.append(price);
            div.append(div1, div2, div3)
            document.getElementById("product_parent_div").append(div, hr);
            count++;
        })
    }
}

let x = localStorage.getItem("element");
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
    localStorage.setItem("element", "c");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button2").addEventListener("click", () => {
    localStorage.setItem("element", "java");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button3").addEventListener("click", () => {
    localStorage.setItem("element", "python");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button4").addEventListener("click", () => {
    localStorage.setItem("element", "c++");
    location.href = "products.html"
})
document.querySelector(".suggested_topic_button5").addEventListener("click", () => {
    localStorage.setItem("element", "web development");
    location.href = "products.html"
})


//product_description