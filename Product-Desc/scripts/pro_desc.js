

let productDescription = JSON.parse(localStorage.getItem('product_description'));

let pro_desc = {
    "id": 533682,
    "title": "Java Programming Masterclass covering Java 11 & Java 17",
    "is_paid": true,
    "actual_price": 299,
    "duration": 1,
    "level": "beginner",
    "price": 3499,
    "visible_instructors": [
        {
            "id": 599932,
            "title": "Tim Buchalka",
            "name": "Tim",
            "job_title": "Java Python Android and C# Expert Developer - 1.22M students"
        }
    ],
    "is_practice_test_course": false,
    "image": "https://img-c.udemycdn.com/course/480x270/533682_c10c_4.jpg",
    "published_title": "java-the-complete-java-developer-course",
    "headline": "Learn Java In This Course And Become a Computer Programmer. Obtain valuable Core Java Skills And Java Certification",
    "rating": 4.5
}

// console.log(pro_desc.visible_instructors[0].name);

localStorage.setItem('product_description', JSON.stringify(pro_desc));

document.querySelector('.previewBox').style.backgroundImage = `url(${productDescription.image})`;

let appendData = () => {
    let divCard = document.createElement('div');
    divCard.setAttribute('class', 'product_Description');

    let divTitle = document.createElement('div');

    let title = document.createElement('h1');
    title.innerHTML = productDescription.title;

    let headline = document.createElement('h3');
    headline.innerHTML = productDescription.headline;

    divTitle.append(title, headline);

    let divPrice = document.createElement('div');
    divPrice.setAttribute('class', 'priceDiv');

    let rating = document.createElement('p');
    rating.innerHTML = productDescription.rating + '⭐⭐⭐⭐';

    let price = document.createElement('h4');
    price.innerHTML = '₹' + productDescription.actual_price;

    let instructor = document.createElement('p');
    instructor.innerHTML = 'Created by ' + productDescription.visible_instructors[0].title;

    divPrice.append(rating, instructor, price);

    divCard.append(divTitle, divPrice);
    document.querySelector('#productDesc').append(divCard);
}

appendData();

document.querySelector('.actualPrice').innerHTML = '₹' + productDescription.actual_price;
document.querySelector('.strikedPrice').innerHTML = '₹' + productDescription.price;

const loadPrice = () => {
    document.querySelector('.actual_price').innerHTML = '₹' + productDescription.actual_price;
    document.querySelector('.fake_price').innerHTML = '₹' + productDescription.price;
}

loadPrice();


let cartLectures = JSON.parse(localStorage.getItem('cart_lectures')) || [];

let added = false;

document.querySelector('.crt').onclick = () => { 

    added = true;

    cartLectures.push(productDescription);

    localStorage.setItem('cart_lectures', JSON.stringify(cartLectures));

    setTimeout(() => {
        alert('Successfully added to cart');
    }, 2000);
}

document.querySelector('.buy-now').onclick = () => {

    if (added) {
    location.href = './PAGES/cart.html';
    }
    else {
        cartLectures.push(productDescription);

    localStorage.setItem('cart-lectures', JSON.stringify(cartLectures));
        location.href = './PAGES/cart.html';
    }
    
}

// addToCart.addEventListener('click', () => {
    
// });
    
let hidDiv = document.querySelector('.hiddenParent');

document.querySelector('.seeMoreBtn').onclick = () => {
    
    hidDiv.style.display = 'flex';
    document.querySelector('.seeMoreBtn').style.display = 'none';
    document.querySelector('.showLess').style.display = 'block';
}

document.querySelector('.showLess').onclick = () => {
    document.querySelector('.seeMoreBtn').style.display = 'block';
    document.querySelector('.showLess').style.display = 'none';
    hidDiv.style.display = 'none';
}


const preview = () => { 

}

let hiddenDescription = document.querySelector('.hiddenDescription');

document.querySelector('.showDesc').onclick = () => {
    hiddenDescription.style.display = 'block';
    document.querySelector('.hideDesc').style.display = 'block';
    document.querySelector('.showDesc').style.display = 'none';

    
    document.querySelector('.hideDesc').onclick = () => { 
        document.querySelector('.hideDesc').style.display = 'none';
        document.querySelector('.showDesc').style.display = 'block';
        hiddenDescription.style.display = 'none';
    }

}

// document.querySelector('#prevPrice') = () => {
//     document.querySelector('.previewBox').style.display = 'none';
//     // document.querySelector('body').
// }

let divHiddentContent = document.querySelector('.hiddenContent');



document.querySelector('.contentBox').onclick = () => {
    document.querySelector('.hiddenContent').style.display = 'block';
    document.querySelector('.contentBox').style.display = 'none';
    document.querySelector('.hiddenContentBox').style.display = 'flex';
    let dropUpImg = document.querySelector('.dropUp');
    dropUpImg.src = './Product-Desc/productsImg/dropup.png';
    // localStorage.setItem('clickedBtn', true);
    // showsome();

    document.querySelector('.hiddenContentBox').onclick = () => {
        document.querySelector('.hiddenContent').style.display = 'none';
        document.querySelector('.contentBox').style.display = 'flex';
    document.querySelector('.hiddenContentBox').style.display = 'none';
        // localStorage.setItem('clickedBtn', false);
        // dontshow();

    }

    

}

// let clickedBtn = localStorage.getItem('clickedBtn');

// const showsome = () => {
//     if (clickedBtn === true) {
//         document.querySelector('.hiddenContent').style.display = 'block';
//         console.log('hiddenContent');
//     }
// }

// const dontshow = () => { 
//     document.querySelector('.hiddenContent').style.display = 'none';
// }




let hidDisDescPro = document.querySelector('.parentHidDivDescPro');

document.querySelector('.showMoreDivProBtn').onclick = () => {
    hidDisDescPro.style.display = 'block';
    document.querySelector('.showLessDivProBtn').style.display = 'block';
    document.querySelector('.showMoreDivProBtn').style.display = 'none';

    
    document.querySelector('.showLessDivProBtn').onclick = () => { 
        document.querySelector('.showLessDivProBtn').style.display = 'none';
        document.querySelector('.showMoreDivProBtn').style.display = 'block';
        hidDisDescPro.style.display = 'none';
    }
}

let previewBoxImg = document.querySelector('.previewBoxImg');