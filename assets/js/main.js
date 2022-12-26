const commentCheckBox = document.querySelector('#donate .comment__checkbox')
const commentCheckBoxBtn = document.querySelector('#donate .comment__checkbox input')
const comment = document.querySelector('#comment')

var commentChecked = false

commentCheckBox.addEventListener('click', () => {
    if(commentChecked == true) {
        commentChecked = false
        commentCheckBoxBtn.checked = true
        comment.style= "display: initial;"
    }
    else {
        commentChecked = true
        commentCheckBoxBtn.checked = false
        comment.style= "display: none;"
    }
})