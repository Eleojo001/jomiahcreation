// $('#theTarget').skippr({
//   transition: 'fade',
//   speed: 1500,
//   easing: 'easeOutCirc',
//   navType: 'bubble',
//   childrenElementType: 'div',
//   arrows: true,
//   autoPlay: true,
//   autoPlayDuration: 3000,
//   keyboardOnAlways: false,
//   hidePrevious: true,
// });

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let loginbtn = document.getElementById('login');
let LoginSubmitBtn = document.getElementById('login-submit-btn');
let registerSubmitBtn = document.getElementById('register-submit-btn');
let loginDetails = document.getElementById('login-details');
let registerDetails = document.getElementById('register-details');
let removeloginBtn = document.getElementById('closeloginModal');
let removeRegBtn = document.getElementById('closeRegModal');
let miniClosebtn = document.getElementById('miniClosebtn');
let regModal = document.getElementById('modal');
let loginModal = document.getElementById('login-details');
  let successMessage = document.getElementById('successMessage');
let registerLink = document.getElementById('register-link');
let loginLink = document.getElementById('login-link');

//========= A function to toggle the icon bar ========//

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
};

//========= A function to scroll section active link ========//

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let hieght = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + hieght) {
      navlinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // REMOVE TOGGLE ICON BAR WHEN NAVBAR LINK IS CLICKED (SCROLL)

  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
  successMessage.classList.remove('addReg');
  // loginModal.classList.add('register');
};

// to create a modal for login

function openModal(details) {
  details.classList.add('addReg');
}

function closeModal(details) {
  details.classList.remove('addReg');
}

//open a modal through link and remove the former modal

function linkModal(modal, prevmodal) {
  modal.classList.add('addReg');
  prevmodal.classList.remove('addReg');
}

loginbtn.onclick = () => {
  openModal(loginDetails);
};

LoginSubmitBtn.onclick = () => {
  // login user

  let email = document.getElementById('lemail');
  let pwd = document.getElementById('logpassword');

  let localData = localStorage.getItem('JomiahUser');

  userDetails = JSON.parse(localData);



  let singleUser;

  for (let index = 0; index < userDetails.length; index++) {
    singleUser = userDetails[index];
  }
  if (singleUser.email == email.value && singleUser.password == pwd.value) {
    email.value = '';
    pwd.value = '';
    alert(`Welcome back ${singleUser.first_name} ${singleUser.last_name}`);

    // closeModal(loginDetails);
  } else {
    alert('User not recognised!!');
  }
};

miniClosebtn.onclick = () => {
  closeModal(loginDetails);
};

registerSubmitBtn.onclick = () => {
  // saving data to local storage

  let user_data = [];

  let localData = localStorage.getItem('JomiahUser');

  let fname = document.getElementById('fname');
  let lname = document.getElementById('lname');
  let regEmail = document.getElementById('regEmail');
  let regPassword = document.getElementById('regPassword');

  let obj = {
    first_name: fname.value,
    last_name: lname.value,
    email: regEmail.value,
    password: regPassword.value,
  };
  if (localData) {
    user_data = JSON.parse(localData);
  }
  user_data.push(obj);
  localStorage.setItem('JomiahUser', JSON.stringify(user_data));


  // To check if a user already has an account

  let userAccount = JSON.parse(localData);



  let singleUser;

  for (let index = 0; index < userAccount.length; index++) {
    singleUser = userAccount[index];
  }
  if (singleUser.email == regEmail.value) {

    alert('This account already exist!!');
  } else {
    alert('Registration Successfull. kindly Login');
    fname.value = '';
    lname.value = '';
    regEmail.value = '';
    regPassword.value = '';
    linkModal(loginDetails);

    // closeModal(registerDetails);
  }
};

registerLink.onclick = () => {
  linkModal(registerDetails, loginDetails);
  // alert('hello');
};
loginLink.onclick = () => {
  linkModal(loginDetails, registerDetails);
  // alert('hello');
};

//closebtn
removeloginBtn.onclick = () => {
  closeModal(registerDetails);
  closeModal(loginDetails);
};
removeRegBtn.onclick = () => {
  closeModal(registerDetails);
  closeModal(loginDetails);
};


//Send email using smtpJS

// contactMe.addEventListener('click', function (e) {
//   e.preventDefault();
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   let subject = document.getElementById('subject').value;
//   let phone = document.getElementById('phone').value;
//   let message = document.getElementById('message').value;
//   let body = `name: ${name}  <br/> email: ${email} <br/> phone: ${phone} <br/> subject: ${subject} <br/> message: ${message}`;
//   Email.send({
//     Host: 'smtp.gmail.com',
//     Username: 'yakubujosepheleojojoel@gmail.com',
//     Password: 'ahiczpfuolhniyhs',
//     To: 'yakubujosepheleojojoel@gmail.com',
//     From: email,
//     Subject: subject,
//     Body: body,
//   }).then((message) => alert(message));
// });
