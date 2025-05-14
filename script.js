// script.js

function readMore(button) {
    const para = button.previousElementSibling;
    para.textContent += ' This is more content revealed upon clicking the Read More button. It elaborates further on the topic discussed.';
    button.style.display = 'none';
}
