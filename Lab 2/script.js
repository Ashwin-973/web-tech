function togglePassword(fieldId, icon) {
  var field = document.getElementById(fieldId);
  if (field.type === "password") {
    field.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    field.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

var registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("regName").value.trim();
  var email = document.getElementById("regEmail").value.trim();
  var phone = document.getElementById("regPhone").value.trim();
  var password = document.getElementById("regPassword").value;
  var confirmPassword = document.getElementById("regConfirmPassword").value;

  document.getElementById("errName").textContent = "";
  document.getElementById("errEmail").textContent = "";
  document.getElementById("errPhone").textContent = "";
  document.getElementById("errPassword").textContent = "";
  document.getElementById("errConfirmPassword").textContent = "";

  var isValid = true;

  var nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    document.getElementById("errName").textContent = "Name should contain only alphabets and spaces.";
    isValid = false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("errEmail").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("errPhone").textContent = "Phone number must be exactly 10 digits.";
    isValid = false;
  }

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`{}\[\]|\\:;"'<>,.?/]).{8,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById("errPassword").textContent =
      "Password must be at least 8 characters and include uppercase, lowercase, number and special character.";
    isValid = false;
  }

  if (confirmPassword !== password || confirmPassword === "") {
    document.getElementById("errConfirmPassword").textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("jobBox").classList.remove("hidden");
  }
});

var jobForm = document.getElementById("jobForm");

jobForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var position = document.getElementById("position").value;
  var jobLevel = document.getElementById("jobLevel").value;
  var experience = document.getElementById("experience").value.trim();
  var skills = document.getElementById("skills").value.trim();
  var projects = document.getElementById("projects").value.trim();
  var resume = document.getElementById("resume").value;

  document.getElementById("errPosition").textContent = "";
  document.getElementById("errJobLevel").textContent = "";
  document.getElementById("errExperience").textContent = "";
  document.getElementById("errSkills").textContent = "";
  document.getElementById("errProjects").textContent = "";
  document.getElementById("errResume").textContent = "";

  var isValid = true;

  if (position === "") {
    document.getElementById("errPosition").textContent = "Please select a position.";
    isValid = false;
  }

  if (jobLevel === "") {
    document.getElementById("errJobLevel").textContent = "Please select a job level.";
    isValid = false;
  }

  var expNum = Number(experience);
  if (experience === "" || isNaN(expNum) || expNum < 0 || expNum > 30) {
    document.getElementById("errExperience").textContent = "Experience must be between 0 and 30 years.";
    isValid = false;
  }

  if (skills === "") {
    document.getElementById("errSkills").textContent = "Skills field cannot be empty.";
    isValid = false;
  }

  if (projects.length < 50) {
    document.getElementById("errProjects").textContent = "Project description must be at least 50 characters.";
    isValid = false;
  }

  if (resume === "") {
    document.getElementById("errResume").textContent = "Please upload your resume.";
    isValid = false;
  } else {
    var lowerResume = resume.toLowerCase();
    if (!(lowerResume.endsWith(".pdf") || lowerResume.endsWith(".docx"))) {
      document.getElementById("errResume").textContent = "Resume must be a PDF or DOCX file.";
      isValid = false;
    }
  }

  if (isValid) {
    document.getElementById("jobBox").classList.add("hidden");
    document.getElementById("successBox").classList.remove("hidden");
  }
});