let hidDiv = document.querySelector('.hiddenParent');

document.querySelector('.seeMoreBtn').onclick = () => {
    // console.log("sfdsdf");
    // let tickDiv = document.createElement("div");
    // tickDiv.setAttribute("class", "tick-sign");
    // let tick = document.createElement('span');
    // tick.innerHTML = '✓';
    // let pDIv = document.createElement('div');
    // pDIv.setAttribute('class', 'desc');
    // let pDesc = document.createElement('p');
    // pDesc.innerHTML = "Use CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma";
    
    hidDiv.style.display = 'flex';
    document.querySelector('.seeMoreBtn').style.display = 'none';
    document.querySelector('.showLess').style.display = 'block';
    // document.querySelector(".showLess").classList.remove('.seeMoreBtn');
    // let showLessBtn = document.querySelector('.seeMoreBtn');
    // showLessBtn.innerHTML = "See Less";
    // showLessBtn.setAttribute('class', 'showLess');

    // showLessBtn.onclick = () => { 
    //     hidFDiv.style.display = 'none';
    //     showLessBtn.innerHTML = "Show More";
        // showLessBtn.onclick = () => { 
        //     expand();
        // }
        // expand();
    // }
}

document.querySelector('.showLess').onclick = () => {
    hidDiv.style.display = 'none';
    document.querySelector('.showLess').innerHTML = "Show More";
    // expand();
    // document.querySelector(".seeMoreBtn").classList.remove('.showLess');
    // document.querySelector('.showLess').setAttribute('.seeMoreBtn');
    // expand();
}