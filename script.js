// Handle the "Hire Me" button click to show the resume
document.getElementById('hiremeBtn').addEventListener('click', function () {
  document.getElementById('resumesection').classList.remove('hidden');
  document.getElementById('contactSection').classList.add('hidden');  // Ensure contact section is hidden
  document.getElementById('sorrySection').classList.add('hidden');    // Ensure sorry section is hidden
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all sections and nav links
      sections.forEach(section => section.classList.remove("active"));
      navLinks.forEach(navLink => navLink.classList.remove("active"));

      // Add active class to the clicked nav link and the corresponding section
      const sectionId = this.getAttribute("data-section");
      document.getElementById(sectionId).classList.add("active");
      this.classList.add("active");
    });
  });
});
// Handle the "I'm Satisfied" button click to show contact details
document.getElementById('showContactBtn').addEventListener('click', function () {
  document.getElementById('contactSection').classList.remove('hidden');
  document.getElementById('resumesection').classList.add('hidden');  // Hide the resume section
});

// Handle the "I'm Not Satisfied" buttoan click to return to the normal state
document.getElementById('notSatisfiedBtn').addEventListener('click', function () {
  // Hide both the resume and any other sections
  document.getElementById('resumesection').classList.add('hidden');
  document.getElementById('contactSection').classList.add('hidden');
  document.getElementById('sorrySection').classList.remove('hidden');
  
  // Optionally, scroll back to the top of the page
  window.scrollTo(0, 0);
});
