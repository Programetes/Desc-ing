var passwordShowing = false;


function togglePassword() {
    if(!passwordShowing) {
      viewPasswordBtn.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
      passwordLogInput.type = 'text';
      passwordShowing = true;
    } else {
      viewPasswordBtn.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
      passwordLogInput.type = 'password';
      passwordShowing = false;
    }
}

  
const viewPasswordBtn = document.getElementById('viewPassword');
viewPasswordBtn.addEventListener('click', togglePassword);

const passwordLogInput = document.getElementById('passwordLogInput');