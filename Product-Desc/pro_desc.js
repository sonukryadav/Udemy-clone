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

let clickedBtn = false;

document.querySelector('.courseContent').onclick = () => {
    // document.querySelector('.hiddenContent').style.display = 'block';
    clickedBtn = true;

    document.querySelector('.courseContent').onclick = () => {
        // document.querySelector('.hiddenContent').style.display = 'none';
        clickedBtn = false;
    }
}

if (clickedBtn === true) { 
    document.querySelector('.hiddenContent').style.display = 'block';
    console.log('hiddenContent');
}
else {
    document.querySelector('.hiddenContent').style.display = 'none';
}