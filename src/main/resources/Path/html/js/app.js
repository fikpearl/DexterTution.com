/*To Add processing code for forms in javascript*/

/*form validation*/

const form = document.getElementById('form');
const Name = document.getElementById('NameField');
const email = document.getElementById('Email');
const grade = document.getElementById('Grade');
const school = document.getElementById('SchoolAttended');
const subject = document.getElementById('Subject/s');
const tutoring = document.getElementById('FormOfTutoring');


form.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();
})

const validateEmail = () => {
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

    if()


}





