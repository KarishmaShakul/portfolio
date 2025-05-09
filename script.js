const textElement = document.getElementById('typing-text');
const textContent = "I craft clean and responsive websites.";

let index = 0;

function type() {
  if (index < textContent.length) {
    textElement.textContent += textContent.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}

type();
