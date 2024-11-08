var labelValueStore;

function togglePassword() {
  if(!this.classList.contains('showingPassword')) {
    this.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
    this.parentElement.querySelector('.textInput').type = 'text';
    this.classList.add('showingPassword');
  } else {
    this.parentElement.querySelector('.textInput').type = 'password';
    this.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
    this.classList.remove('showingPassword');
  }
}

const viewPasswordBtn = document.querySelectorAll('.viewPasswordBtn');
viewPasswordBtn.forEach(function(elem) {
  elem.addEventListener('click', togglePassword);
});