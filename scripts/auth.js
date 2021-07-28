const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = signupForm['signup-email'].value;
  let password = signupForm['signup-password'].value;

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    let modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('User has logged out');
  });
});

const login = document.querySelector('#login-form');

login.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = login['login-email'].value;
  let password = login['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
  });

  let modal = document.querySelector('#modal-login');
  M.Modal.getInstance(modal).close();
  login.reset();
});
