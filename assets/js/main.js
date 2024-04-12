
function sendEmail() {
    const name = document.getElementById('txtName').value;
    const email = document.getElementById('txtEmail').value;
    const phone = document.getElementById('txtPhone').value;
    const company = document.getElementById('txtCompany').value;
    const product = document.getElementById('txtProduct').value;
    const message = document.getElementById('txtMessage').value;
  
    const emailBody = `
      <h2>Contact Form submitted from Liv and Lexi</h2>
      <div>Name: <strong>${name}</strong></div>
      <div>Email: <strong>${email}</strong></div>
      <div>Phone: <strong>${phone}</strong></div>
      <div>Company: <strong>${company}</strong></div>
      <div>Product: <strong>${product}</strong></div>
      <div>Message: <strong>${message}</strong></div>
    `;
  
    const payload = {
      Body: emailBody,
      ToEmails: 'alexa@alexapedersen.com',
      Subject: 'Liv and Lexi Contact Form',
      FromName: 'Liv and Lexi',
      FromEmail: 'alexa.pedersen@alexapedersen.com'
    };
  
    fetch('https://gn02-email-test.azurewebsites.net/api/SendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          // Display success message here
          document.getElementById('formMessage').textContent = 'Your form has been successfully sent!';
          document.getElementById('formMessage').classList.add('success');
          console.log('Email sent successfully!');
        } else {
          console.error(response);
          throw new Error('Failed to send email.');
        }
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
  
  









document.addEventListener("DOMContentLoaded", function() {
    // Hide the content initially
    var content = document.getElementById("content");
    content.style.display = "none";
});

function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}