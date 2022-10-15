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