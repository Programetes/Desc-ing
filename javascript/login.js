var labelValueStore;

function togglePassword() {
  if(!this.parentElement.querySelector('.textInput').classList.contains('labeled'))
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

function removeInputLabel() {
  if(this.classList.contains('labeled')) {
    labelValueStore = this.value;
    this.value = '';
    this.style = '';
    this.classList.remove('labeled');

    if(this.classList.contains('password')) {
      this.type = 'password';
    }
  }
}

function focusCheck() {
  if(this.value == ''){
    this.value = labelValueStore;
    this.classList.add('labeled');
    this.style = 'color: #ffffff59';
    this.type = 'text';
    this.parentElement.parentElement.querySelector('.viewPasswordBtn').innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
  }
}

const viewPasswordBtn = document.querySelectorAll('.viewPasswordBtn');
viewPasswordBtn.forEach(function(elem) {
  elem.addEventListener('click', togglePassword);
});


const passwordLogInput = document.querySelectorAll('.textInput');
passwordLogInput.forEach(function(elem) {
  elem.addEventListener('focus', removeInputLabel);
  elem.addEventListener('focusout', focusCheck);
});