const viewNoteButton = document.querySelector('#view_note_button');
const texts = document.querySelector('.texts');



let oldTexts = JSON.parse(localStorage.getItem('notes'))

for (let oldText of oldTexts) {
  let div = document.createElement('div')
  div.innerHTML = ` 
      <div class = "text" >
     <input type='text' class = "textname" value = 
     "${oldText.text}" >
    </input>
    <button class="delete">
    <i class="far fa-trash-alt"></i>
    </button>
    </div> `
  texts.append(div);
}


// delete button section
const deleteButton = document.querySelectorAll('.delete');
const text = document.querySelectorAll('.text');

for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener('click', () => {
    let oldTexts = JSON.parse(localStorage.getItem('notes')) || []
    oldTexts.splice(text[i], 1)
    localStorage.setItem('notes', JSON.stringify(oldTexts))
    location.reload();

  })
}