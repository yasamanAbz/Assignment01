document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log("First Name:", formData.get("firstName"));
    console.log("Last Name:", formData.get("lastName"));
    console.log("Contact Number:", formData.get("contactNumber"));
    console.log("Email Address:", formData.get("emailAddress"));
    console.log("Message:", formData.get("message"));

    window.location.href = "/";
  });
