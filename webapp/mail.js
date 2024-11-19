
//remove success modal
  function succesful() {
  let successMessage = document.getElementById('successMessage');
  successMessage.classList.remove('addReg');
  }




document
  .getElementById('submitConnect')
  .addEventListener('click', function (event) {
    event.preventDefault();
    sendMail();
  });

function sendMail() {
  // e.preventDefault()
  let successMessage = document.getElementById('successMessage');

  let user = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userPhone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  if (user == '' || userEmail == '' || userPhone == '' || message == '') {
    alert('These fields cannot be empty!!!');
  } else {
    let params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      phone: document.getElementById('phone').value,
    };
    const serviceId = 'service_agk02ld';
    const templateId = 'template_0p52jn6';


    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {


        //success modal
        successMessage.classList.add('addReg'); //show success modal
        // alert('Thank you we have recieved your message');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('phone').value = '';
      })
      .catch((err) => console.log(err));
  }
}
