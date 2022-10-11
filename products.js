// url = "https://www.udemy.com/api-2.0/courses/?search=c++/S7gknSy2YudW0StBl7CJ4dyL8gl0qRz0al2nEUUB/ePP7cEF3ebVKIdNt72e8kFgNpkbWjbI1LVsYz1fgEsySWSpeoXOhFQzGLmTVqHABi4l9oJUUIatJXpyoeQ5QpSy1lkBiKKbbAMH7ExBYNF2cP5PQjUuGAE5MGN1I0Awl"

let arr = [{
    image: "https://dev.java/assets/images/java-logo-vert-blk.png",
    title: "Java Programming",
    description: "Learn Java in this course and become java programmer",
    rating: 4.5,
    price: 449,
}]
async function getlecture(arr) {
    // let res = await fetch("https://www.udemy.com/api-2.0/courses/?search=c++/S7gknSy2YudW0StBl7CJ4dyL8gl0qRz0al2nEUUB/ePP7cEF3ebVKIdNt72e8kFgNpkbWjbI1LVsYz1fgEsySWSpeoXOhFQzGLmTVqHABi4l9oJUUIatJXpyoeQ5QpSy1lkBiKKbbAMH7ExBYNF2cP5PQjUuGAE5MGN1I0Awl");
    // let data = await res.json();
    // console.log(data);
    arr.map((elem) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.image;
        let title = document.createElement("h3");
        title.innerText = elem.title;
        let des = document.createElement("p");
        des.innerText = elem.description;
        let rating = document.createElement("h4");
        rating.innerText = elem.rating;
        let price = document.createElement("h3");
        price.innerText = elem.price;
        div.append(img, title, des, rating, price);
        document.getElementById("product_parent_div").append(div);
    })
}

getlecture(arr);