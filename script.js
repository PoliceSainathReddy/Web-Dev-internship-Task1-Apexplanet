function changeContent() {
  document.getElementById("dynamicText").innerText = "🎉 Text changed using JavaScript!";
}

function showModal() {
  document.getElementById("myModal").style.display = "block";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return false;
  }

  console.log("Form Submitted:", { name, email, message });
  alert("Thank you! Your message has been submitted.");
  return true;
}
