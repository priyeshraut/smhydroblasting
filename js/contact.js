// Contact Form

const sendEmail = () => {
  const contactForm = document.querySelector(".contact form");
  const email = document.getElementById("email").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;


  const body = `<b>Email :</b> ${email}<br> 
      <b>First Name :</b> ${firstName}<br>
      <b>Last Name :</b> ${lastName}<br>
      <b>Company :</b> ${company}<br>
      <b>Message :</b> ${message};`;

  Email?.send({
    SecureToken: "4cff710a-2743-4cb8-b278-887ca3e5d4fc",
    To: "priyeshraut363@gmail.com",
    From: "priyeshraut25@gmail.com",
    Subject:
      "Thanks for reaching out to S.M. Hydro! A member of our team will be in touch soon. ",
    Body: body,
  }).then(
      contactForm.innerHTML = `<h2 class="grid-1">FILL OUT THE FORM TO GET IN TOUCH.</h2>
      <p style="font-size: 1.6rem;">Thanks for reaching out to SM Hydro! A member of our team will be in touch soon. </p>`,
      contactForm.style.gridAutoFlow = "row"
  );

}
