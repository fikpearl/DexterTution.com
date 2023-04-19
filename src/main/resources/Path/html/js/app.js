/*To Add processing code for forms in javascript*/

/*form validation*/

const form = document.getElementById('form');
const Name = document.getElementById('NameField').innerHTML;
const email = document.getElementById('Email').innerHTML;
const grade = document.getElementById('Grade').innerHTML;
const school = document.getElementById('SchoolAttended').innerHTML;
const subject = document.getElementById('Subject/s').innerHTML;
const tutoring = document.getElementById('FormOfTutoring').innerHTML;


form.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();
})

const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const showError = inputControl.querySelector('.error');

    showError.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const setErrors = (element,message) => {
    const inputControl = element.parentElement;
    const showError = inputControl.querySelector('.error');

    showError.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const validateInputs = () => {
    const nameValue =  Name.value.trim();
    const emailValue = email.value.trim();
    const gradeValue = grade.value.trim();
    const subjectValue = subject.value.trim();
    const schoolValue = school.value.trim();
    const tutoringValue = tutoring.value.trim();

    if(nameValue === ''){
        setErrors(Name,'First Name is required');
    } else {
        setSuccess(Name);
    }

    if(emailValue === ''){
        setErrors(email,'Email is required');
    } else if (!validEmail(emailValue)){
        setErrors(email,'Please provide a valid Email address');
    } else{
        setSuccess(email);
    }

    if(gradeValue === ''){
        setErrors(grade,'Please enter your grade');
    } else if(isNaN(gradeValue)){
        setErrors(grade,'Please enter a valid grade');
    } else{
        setSuccess(grade);
    }

    if(subjectValue === ''){
        setErrors(subject,'Please enter a subject')
    } else {
        setSuccess(subject);
    }

    if(schoolValue === ''){
        setErrors(school,'Please enter a school');
    } else {
        setSuccess(school);
    }

    if(tutoringValue === ''){
        setErrors(tutoring,'Please state a form of tutoring');
    } else {
        setSuccess(tutoring);
    }
}

/*code to collect data from form*/




