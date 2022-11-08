/*fetch("./cv.json")
    .then((res) => res.json())
    .then((obj) => {
        //console.log(obj)
        // koppla ihop json med js

        const erfarenheter = document.queryselector(".cv-profile-text");
        const education = document.queryselector("#edu");
        const expertise = document.querySelector("#exp");
        console.log("erfarenheter: "+obj.erfarenheter[0].title);
        console.log("education: "+education)
        console.log("expertise: " + expertise)
        function renderCv(jsonData, h3Element) {
            for (let erfarenheter of jsonData) {
                const titleElement = document.createElement("h3");
                h3Element.append(titleElement);

                for (let description of experience.description) {
                    descriptionElement.innerHTML = description;
                    h3Element.append(descriptionElement);

                }
            }

        }
        renderCv(obj.workexperience, workexperience);
        renderCv(obj.education, education);




    });*/

//Fetch data from local .json file
fetch('cv.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    //Save .json data in 2 parts
    let experience = data["experience"]
    let education = data["Education"]

    //Initialize string variables
    let experienceText = ""
    let educationText = ""
console.log(document.getElementsByClassName(".cv-profile-text h2"))
    //In order to print out every element in the 'experience' Array a for loop is used.
    experienceText += document.getElementsByClassName(".cv-profile-text h2").innerHTML
    for (let x = 0; x < experience.length; x++) {
        experienceText += "<p><h3>" + experience[x].title + "</h3></p>";
        experienceText += "<p>" + experience[x].year + "</p>";
        experienceText += "<p>" + experience[x].description + "</p></br>";
    }
    experienceText += "</ul>"

    //In order to print out every element in the 'education' Array a for loop is used.
    educationText += "Education:<ul> "
    for (let x = 0; x < education.length; x++) {
        educationText += "<p>" + education[x].title + "</p>";
        educationText += "<p>" + education[x].description + "</p></br>";

    }
    educationText += "</ul>"

    //Send the text strings to the HTML page
    document.getElementById("experience-html").innerHTML = experienceText
    document.getElementById("education-html").innerHTML = educationText;
})

//Logs here in case of error
.catch(function (err) {
    console.log(err);
});