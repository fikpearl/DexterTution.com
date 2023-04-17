/*To Add processing code for forms in javascript*/

/*form validation*/

const form = document.getElementById('form');
const firstName = document.getElementById('firstNameField');
const lastName = document.getElementById('LastNameField');
const grade = document.getElementById('Grade');
const subject = document.getElementById('Subject/s');
const service = document.getElementById('Service');

form.addEventListener('submit',e => {
    e.preventDefault();

    validateInputs();
})



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
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const gradeValue = grade.value.trim();
    const subjectValue = subject.value.trim();
    const service = service.value.trim();

    if(firstNameValue && lastNameValue === ''){
        setErrors(firstName,'First Name is required');
    } else {
        setSuccess(firstName);
    }


}





