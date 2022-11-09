
const createInfo = (obj) => {
    //Hämtar in elementen via klassnamn
const profileText = document.querySelector('.cv-profile-text');

// Skapar HTML element till subcontainer 1
const info = document.createElement('div')
const heading = document.createElement("h2");
const subHeading = document.createElement("h3");
const text = document.createElement("p");

//Skapar klassnamn
info.classList.add('text-info')

// Lägger till innehållet i htmlelemtenten för subcontianer 1
heading.innerHTML = obj.title;
subHeading.innerHTML = obj.year;
text.innerHTML = obj.description;

//Lägger till en child till parent för subcontainer 1
info.appendChild(heading);
info.appendChild(subHeading);
info.appendChild(text);
profileText.appendChild(info);

    return info;
}

const createSubInfo = (obj) => {
    const container = document.querySelector(".cv-subcontainer2");
    const sideBar = document.querySelector(".sidebar");

    //Skapar html element till subcontainer 2
    const subContainer = document.createElement('div');
    const sidebarHeading = document.createElement('h3');
    const sidebarText = document.createElement('p');

    sidebarHeading.classList.add('text');
    subContainer.classList.add('info-text');

    // Lägger till innehåll för HTMLelementen för subcontainer 2
    sidebarHeading.innerHTML = obj.title;
    sidebarText.innerHTML = obj.description;

    //Lägger till child till parent för subcontainer 2
    subContainer.appendChild(sidebarHeading);
    subContainer.appendChild(sidebarText);
    sideBar.appendChild(subContainer);
    container.appendChild(subContainer);

    return subContainer;
}


fetch("../js/cv.json")
    .then((res) => res.json()) 
    .then((obj) => {

        const expContainer = document.querySelector("#experience");
        const eduContainer = document.querySelector("#edu");
        const experContainer = document.querySelector("#exp");

        for(let exp of obj.experience) {
            const profileText = createInfo(exp);
            expContainer.appendChild(profileText);
        }
        for( let edu of obj.education) {
            const container = createSubInfo(edu);
            eduContainer.appendChild(container);
            experContainer.appendChild(container);

        }


});