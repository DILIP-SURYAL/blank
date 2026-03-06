let addEducation = document.getElementById("add-education");
let removeEducation = document.getElementById("remove-education");
let addExperience = document.getElementById("add-experience");
let removeExperience = document.getElementById("remove-experience");
let addLanguage = document.getElementById("add-language");
let removLanguage = document.getElementById("remove-language");
let addTechnologies = document.getElementById("add-technologies");
let removeTechnologies = document.getElementById("remove-technologies");
let form = document.getElementById("myform");
let basicInfoSaveButton = document.getElementById("basicInfoSave");
let educationInfoSaveButton = document.getElementById("educationInfoSave");
let workExperienceInfoSaveButton = document.getElementById("workExperienceInfoSave");
let languageInfoSaveButton = document.getElementById("languagesInfoSave");
let technologiesInfoSaveButton = document.getElementById("technologiesInfoSave");
let referenceInfoSaveButton = document.getElementById("referenceInfoSave");
let preferenceInfoSaveButton = document.getElementById("preferenceInfoSave");


let courseCounter = 0;
let companyCounter = 3;
console.log(companyCounter);
let conditions = [];
let regex1 = /^[A-Za-z]+$/;
let phoneRegex = /^[0-9]+$/;
let languageArr = [
    { name: "hindi", canSpeak: 0, canWrite: 0, canRead: 0 },
    { name: "english", canSpeak: 0, canWrite: 0, canRead: 0 },
    { name: "gujarati", canSpeak: 0, canWrite: 0, canRead: 0 },

];


let technologies = [
    { name: "PHP", beginner: 0, mediator: 0, expert: 0 },
    { name: "MYSQL", beginner: 0, mediator: 0, expert: 0 },
    { name: "laravel", beginner: 0, mediator: 0, expert: 0 },
    { name: "oracle", beginner: 0, mediator: 0, expert: 0 },
];


//commonly used functions ****************************************************************************************

function createSpan(message, options = {}) {

    let span = document.createElement("span");

    span.textContent = message;

    span.style.color = options.color || "red";
    span.classList.add("message");
    return span;
}

function createLanguagesSection() {

    table = document.getElementById("languages-table");
    table.innerHTML = '';
    languageArr.forEach((elem) => {
        let html = `<td>${elem.name} : </td>
                        <td>
                            <label for="${elem.name}-read">
                                <input type="checkbox" name="${elem.name}[]" id="${elem.name}-read" value="read">Read
                            </label>
                        </td>
                        <td>
                            <label for="${elem.name}-write">
                                <input type="checkbox" name="${elem.name}[]" id="${elem.name}-write" value="write">Write
                            </label>
                        </td>
                        <td>
                            <label for="${elem.name}-speak">
                                <input type="checkbox" name="${elem.name}[]" id="${elem.name}-speak" value="speak">Speak
                            </label>
                        </td>`;

        let tr = document.createElement("tr");
        tr.innerHTML = html;


        table.appendChild(tr);


    });


}
createLanguagesSection();
function createTechnologiesSection() {

    table = document.getElementById("technologies-table");
    table.innerHTML = '';
    technologies.forEach((elem) => {
        let html = `<td><label for="${elem.name}">
                                <input type="checkbox" value="${elem.name}" name="${elem.name}" id="${elem.name}" /> ${elem.name} : &nbsp;
                            </label>
                        </td>
                        <td>
                            <label for="${elem.name}-beginner">
                                <input value="Beginner" type="radio" name="${elem.name}[]" id="${elem.name}-beginner">Beginner
                            </label>
                        </td>
                        <td>
                            <label for="${elem.name}-mideator">
                                <input value="Mediator" type="radio" name="${elem.name}[]" id="${elem.name}-mideator">Mideator
                            </label>
                        </td>
                        <td>
                            <label for="${elem.name}-expert">
                                <input value="Expert" type="radio" name="${elem.name}[]" id="${elem.name}-expert">Expert
                            </label>
                        </td>`;

        let tr = document.createElement("tr");
        tr.innerHTML = html;


        table.appendChild(tr);


    });


}
createTechnologiesSection();



// adding and removing the functionality *************************************************************************

addEducation.addEventListener("click", () => {
    courseCounter++;
    let html1 = `<td><label for="degree${courseCounter}">
                                Degree Name : <input type="text" name="degree${courseCounter}" id="" placeholder="enter your degree name">
                            </label></td>`;
    let html2 = `<td>
                                <label for="courseName${courseCounter}">Course Name :</label>
                                <input type="text" name="courseName${courseCounter}" id="courseName${courseCounter}" />
                            </td>
                            <td>
                                <label for="university${courseCounter}">University :</label>
                                <input type="text" name="university${courseCounter}" id="university${courseCounter}" />
                            </td>
                            <td>
                                <label for="passingYear${courseCounter}">Passing Year :</label>
                                <input type="text" name="passingYear${courseCounter}" id="passingYear${courseCounter}" />
                            </td>
                            <td>
                                <label for="percentage${courseCounter}">percentage :</label>
                                <input type="text" name="percentage${courseCounter}" id="percentage${courseCounter}" />
                            </td>`;


    let table = document.getElementById("education-table");
    let tr1 = document.createElement("tr");
    tr1.innerHTML = html1;
    table.appendChild(tr1);
    let tr2 = document.createElement("tr");
    tr2.innerHTML = html2;

    table.appendChild(tr2);
});


removeEducation.addEventListener("click", () => {


    let table = document.getElementById("education-table");
    if (table.rows.length > 6) {
        table.deleteRow(-1);
        table.deleteRow(-1);
    }
});



addExperience.addEventListener("click", () => {
    companyCounter++
    let html = `<td>
                            <label for="companyName${companyCounter}">Company Name :</label>
                            <input type="text" name="companyName${companyCounter}" id="companyName${companyCounter}" />
                        </td>
                        <td>
                            <label for="designation${companyCounter}">Designation :</label>
                            <input type="text" name="designation${companyCounter}" id="designation${companyCounter}" />
                        </td>
                        <td>
                            <label for="from${companyCounter}">From :</label>
                            <input type="date" name="from${companyCounter}" id="from${companyCounter}" />
                        </td>
                        <td>
                            <label for="to${companyCounter}">To :</label>
                            <input type="date" name="to${companyCounter}" id="to${companyCounter}" />
                        </td>`;


    let table = document.getElementById("experience-table");
    let tr = document.createElement("tr");
    tr.setAttribute("id", `companyRow${companyCounter}`);

    tr.innerHTML = html;

    table.appendChild(tr);



})

removeExperience.addEventListener("click", () => {


    let table = document.getElementById("experience-table");
    if (table.rows.length > 3) {
        table.deleteRow(-1);
    }
});






addLanguage.addEventListener("click", () => {
    let ans = prompt("enter your language :");

    if (ans != null) {
        let obj = { name: ans, canSpeak: 0, canWrite: 0, canRead: 0 }
        languageArr.push(obj);
        createLanguagesSection();
    }
});

removLanguage.addEventListener("click", () => {
    let table = document.getElementById("languages-table");
    if (table.rows.length > 3) {
        table.deleteRow(-1);
    }
});

removeTechnologies.addEventListener("click", () => {
    let table = document.getElementById("technologies-table");
    if (table.rows.length > 4) {
        table.deleteRow(-1);
    }
});

addTechnologies.addEventListener("click", () => {
    let ans = prompt("enter your technology :");

    if (ans != null) {
        let obj = { name: ans, beginner: 0, mediator: 0, expert: 0 }
        technologies.push(obj);
        createTechnologiesSection();
    }
});





form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formObj = Object.fromEntries(new FormData(e.target));
    console.log(formObj);
    basicDetailsValidations(formObj);
});
// Basic Details Validations  ******************************************************************************


basicInfoSaveButton.addEventListener("click", () => {
    let spans = document.querySelectorAll(".message");

    spans.forEach((e) => e.remove());

    let input = document.querySelectorAll("#basicDetail input");
    let obj = {}
    input.forEach((e) => {
        if (e.name != 'gender') {
            obj[e.name] = e.value;
        } else {
            if (e.checked) {
                obj[e.name] = e.value;
            }
        }
    });
    basicDetailsValidations(obj)
});


function basicDetailsValidations(data) {

    let labels = document.querySelectorAll("#basicDetail label")

    let labelObj = {};
    labels.forEach((e) => {
        let key = e.getAttribute("for");
        labelObj[key] = e;
    });

    if (!data.firstName) {
        let span = createSpan("firtName cant be empty",);
        labelObj.firstName.appendChild(span);

    }
    else if (!regex1.test(data.firstName)) {
        console.log("hkdjalkl")
        let span = createSpan("first cant have non-alphabetic characters");
        labelObj.firstName.appendChild(span);
    }
    else if (data.firstName.length > 10) {
        console.log("hkdjalkl")
        let span = createSpan("first cant have more than 10 characters");
        labelObj.firstName.appendChild(span);
    }


    if (!data.lastName) {
        let span = createSpan("lastName cant be empty",);
        labelObj.lastName.appendChild(span);

    }
    else if (!regex1.test(data.lastName)) {
        let span = createSpan("lastName cant have non-alphabetic characters");
        labelObj.lastName.appendChild(span);
    }
    else if (data.lastName.length > 10) {
        let span = createSpan("lastName cant have more than 10 characters");
        labelObj.lastName.appendChild(span);
    }





    if (!data.designation) {
        let span = createSpan("please enter the designation");
        labelObj.designation.appendChild(span);
    }
    else if (!regex1.test(data.designation)) {
        let span = createSpan("please enter the valid designation");
        labelObj.designation.appendChild(span);
    }
    else if (data.designation.length > 10) {
        let span = createSpan("designation cant have more than 10 characters");
        labelObj.designation.appendChild(span);
    }

    if (!data.address1) {
        let span = createSpan("please enter address");
        labelObj.address1.appendChild(span);
    }
    else if (data.address1.length > 100) {
        let span = createSpan("address cant have more than 10 characters");
        labelObj.address1.appendChild(span);
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(data.email)) {
        let span = createSpan("please enter valid email");
        labelObj.email.appendChild(span);
    }

    if (!phoneRegex.test(data.phone)) {
        let span = createSpan("please enter valid phone number");
        labelObj.phone.appendChild(span);
    }
    else if (data.phone.length > 12) {
        let span = createSpan("phone number cant have more than 10 digits");
        labelObj.phone.appendChild(span);
    }
    if (!data.city || !regex1.test(data.city)) {
        let span = createSpan("enter valid city");
        labelObj.city.appendChild(span);
    }
    else if (data.city.length > 10) {
        let span = createSpan("data too long for city");
        labelObj.city.appendChild(span);
    }

    if (!data.gender) {
        console.log("hidaa")
        let span = createSpan("Please choose gender");
        document.getElementById("gender").appendChild(span);
    }

    if (!data.zipCode) {
        let span = createSpan("Please enter zip code");
        labelObj.zipCode.appendChild(span);
    }
    else if (data.zipCode.length > 7) {
        let span = createSpan("data too long for column zipcode");
        labelObj.zipCode.appendChild(span);
    }



    if (!data.relationshipStatus) {
        let span = createSpan("please choose relationship status");
        labelObj.relationshipStatus.appendChild(span);
    }

    let date = new Date(data.dateOfBirth).getFullYear();
    let year = new Date().getFullYear();
    let ans = year - date;

    if (!data.dateOfBirth) {
        let span = createSpan("please enter date of Birth");
        labelObj.dateOfBirth.appendChild(span);
    }
    else if (new Date().getFullYear() - new Date(data.dateOfBirth).getFullYear() < 18) {
        let span = createSpan("your age should be greater than 18");
        labelObj.dateOfBirth.appendChild(span);
    }


}

// education Details Validations  ******************************************************************************


educationInfoSaveButton.addEventListener("click", () => {
    let spans = document.querySelectorAll(".message");

    spans.forEach((e) => e.remove());

    let input = document.querySelectorAll("#education input");
    let obj = {}
    input.forEach((e) => {
        if (e.name != 'gender') {
            obj[e.name] = e.value;
        } else {
            if (e.checked) {
                obj[e.name] = e.value;
            }
        }
    });
    educationDetailsValidation(obj)
});



function educationDetailsValidation(data) {

    let eduHeading = document.querySelectorAll("#education p")

    let eduHeadingObj = {};
    eduHeading.forEach((e) => {
        let key = e.getAttribute("id");
        eduHeadingObj[key] = e;
    });


    if (!data.sscBoard || !data.sscPassingYear || !data.sscPercentage) {
        let span = createSpan("Please enter the ssc details");
        eduHeadingObj.sscBoard.appendChild(span);
    }
    if (!data.hscBoard || !data.hscPassingYear || !data.hscPercentage) {
        let span = createSpan("Please enter the hsc details");
        eduHeadingObj.hscBoard.appendChild(span);
    }
    if (!data.bachelorCourseName || !data.bachelorUniversity || !data.bachelorPassingYear || !data.bachelorPercentage) {
        let span = createSpan("Please enter the bachelor degree details");
        eduHeadingObj.bachelor.appendChild(span);
    }

    if (!data.masterCourseName || !data.masterUniversity || !data.masterPassingYear || !data.masterPercentage) {
        let span = createSpan("Please enter the master degree details");
        eduHeadingObj.master.appendChild(span);
    }


    if (courseCounter >= 1) {
        for (let i = 1; i <= courseCounter; i++) {
            let degreeName = document.getElementsByName(`degree${i}`)[0];  // Get the first element with the name 'degree1'
            let courseName = document.getElementsByName(`courseName${i}`)[0];
            let university = document.getElementsByName(`university${i}`)[0];
            let passingYear = document.getElementsByName(`passingYear${i}`)[0];
            let percentage = document.getElementsByName(`percentage${i}`)[0];
            let label = document.querySelector(`label[for='degree${i}']`);

            // console.log(degreeName, courseName, university, passingYear, percentage);

            if (!degreeName.value || !courseName.value || !university.value || !passingYear.value || !percentage.value) {
                let span = createSpan(`please enter degree details`);
                label.appendChild(span);
            }
        }
    }
}
// work experience details validations   ******************************************************************************


workExperienceInfoSaveButton.addEventListener("click", () => {
    let spans = document.querySelectorAll(".message");

    spans.forEach((e) => e.remove());


    let inputs = document.querySelectorAll("#experience-table input");

    let companyObj = {};

    inputs.forEach((e) => {
        companyObj[e.name] = e.value;
    })

    workExperienceValidations(companyObj);



})

function workExperienceValidations(data) {

    for (let i = 1; i <= companyCounter; i++) {


        if (!data[`company${i}`] || !data[`designation${i}`] || !data[`from${i}`] || data[`to${i}`]) {
            let span = createSpan("please enter the company details");
            let tr = document.getElementById(`companyRow${i}`);
            tr.appendChild(span);
        }

    }

}


//language details validations ************************************************************************

languageInfoSaveButton.addEventListener("click", () => {
    

    let spans = document.querySelectorAll(".message");
    spans?.forEach((span)=>span.remove());
    let inputs = document.querySelectorAll("#languages-table input");
    let isChecked = false;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].checked){
            isChecked = true;
            break;
        }
    }

    if(!isChecked){
        let table = document.getElementById("languages-table");
        let span = createSpan("at least choose one language");
        table.appendChild(span);
    }
});

technologiesInfoSaveButton.addEventListener("click", () => {
    

    let spans = document.querySelectorAll(".message");
    spans?.forEach((span)=>span.remove());
    let inputs = document.querySelectorAll("#technologies-table input");
    let isChecked = false;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].checked){
            isChecked = true;
            break;
        }
    }

    if(!isChecked){
        let table = document.getElementById("technologies-table");
        let span = createSpan("at least choose one technologie");
        table.appendChild(span);
    }
});  

referenceInfoSaveButton.addEventListener("click", () => {
    let spans= document.querySelectorAll(".message");
        
        spans.forEach((e)=>e.remove());
    let inputs = document.querySelectorAll("#reference-table input");
    console.log(inputs);
    let obj = {};
    let flag = false;
    inputs.forEach((input) => {
        if(input.value){
            flag = true;
        }
    });
    console.log(flag)
    if(!flag){
        let table = document.getElementById("reference-table");
        table.appendChild(createSpan("please enter atleast one detail"));
    }
  
});

preferenceInfoSaveButton.addEventListener("click",()=>{
    let spans = document.querySelectorAll(".message");
    spans?.forEach((e)=>e.remove());

    let fieldset = document.getElementById("preferences");
    let preferedLocation = document.getElementById("preferedLocation").value;
    let noticePeriod = document.getElementById("noticePeriod").value;
    let expectedCTC = document.getElementById("expectedCTC").value;
    let currentCTC = document.getElementById("currentCTC").value;
    let department = document.getElementById("department").value;

    let formData = {
        preferedLocation,
        noticePeriod,
        expectedCTC,
        currentCTC,
        department
    };

    if(!formData.noticePeriod){
        fieldset.appendChild(createSpan("please enter the valid noticeperiod"));
    }

    if(!formData.expectedCTC || phoneRegex.test(formData.expectedCTC)){
        fieldset.appendChild(createSpan("please enter the valid expectedCTC"));
    }

    if(!formData.currentCTC || phoneRegex.test(formData.currentCTC)){
        fieldset.appendChild(createSpan("please enter the valid currentCTC"));
    }

});

     

