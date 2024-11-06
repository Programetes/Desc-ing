var passwordShowing = false;


function togglePassword() {
    if(!passwordShowing) {
      viewPasswordBtn.innerHTML = '<span class="material-symbols-outlined">visibility</span>';
      passwordShowing = true;
    } else {
      viewPasswordBtn.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';
      passwordShowing = false;
    }
}

  
const viewPasswordBtn = document.getElementById('viewPassword');
viewPasswordBtn.addEventListener('click', togglePassword);