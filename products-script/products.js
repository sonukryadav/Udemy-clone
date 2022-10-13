// url = "https://www.udemy.com/api-2.0/courses/?search=c++/S7gknSy2YudW0StBl7CJ4dyL8gl0qRz0al2nEUUB/ePP7cEF3ebVKIdNt72e8kFgNpkbWjbI1LVsYz1fgEsySWSpeoXOhFQzGLmTVqHABi4l9oJUUIatJXpyoeQ5QpSy1lkBiKKbbAMH7ExBYNF2cP5PQjUuGAE5MGN1I0Awl"

// let arr = [{
//     image: "https://dev.java/assets/images/java-logo-vert-blk.png",
//     title: "Java Programming",
//     description: "Learn Java in this course and become java programmer",
//     rating: 4.5,
//     price: 449,
// }]

const getdata = () => {
    fetch(`http://localhost:3000/c`)
        .then((res) => res.json())
        .then((data) => getlecture(data));

}

function getlecture(arr) {
    document.getElementById("product_parent_div").innerHTML = null;
    console.log(arr);
    let count = 0;
    document.getElementById("counts").innerText = arr.length;
    document.getElementById("lecture_name").innerText = "java";
    let reults = document.createElement("h3");
    reults.innerText = arr.length + "results";
    document.getElementById("product_parent_div").append(reults);
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
        teacher.innerText = elem.visible_instructors[0].display_name;
        let rating = document.createElement("h4");
        rating.innerText = elem.rating;
        let price = document.createElement("h3");
        price.innerText = elem.price;
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

getdata();