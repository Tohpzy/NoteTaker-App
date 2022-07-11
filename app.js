const textInput = document.querySelector('#input_area');
const saveButton = document.querySelector('#press');


saveButton.addEventListener('click', () => {
    if (textInput.value.length == 0) {
        alert('Kindly Input a Note')
        return;
    }
    if (!validateMessage()) {
        alert('Kindly make your inputs upto 30 or more characters')
        return;
    }
    let oldTexts = JSON.parse(localStorage.getItem('notes')) || []

    let text = {
        text: textInput.value
    }
    oldTexts.push(text);
    localStorage.setItem('notes', JSON.stringify(oldTexts));
    alert('Your note was successfully saved')
    location.reload()
})


// validation section
// from span
const inputError = document.querySelector('#input-error');
const saveError = document.querySelector('#save-error');

function validateMessage() {
    let inputArea = document.querySelector('#input_area').value;
    let required = 30;
    let left = required - inputArea.length;

    if (left > 0) {
        inputError.innerHTML = left + ' more characters required';
        return false;
    } else {
        inputError.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
        return true;
    }
}

textInput.addEventListener('keyup', validateMessage)
// save note button validation
// function validateForm() {
//     if (!validateMessage()) {
//         saveError.style.display = 'block';
//         saveError.innerHTML = 'Please fill out this field.';
//         setTimeout(function () {
//             saveError.style.display = 'none'
//         }, 4000);
//         return false;
//     }

// }
const viewBtn = document.querySelector('#view_note_button')
const reloader = document.querySelector('.reloader')
viewBtn.addEventListener('click', () => {
    setInterval(() => {
        reloader.style.display = 'block';
        location.href = './viewnote.html'
    }, 2000);

})