// Mobile navigation toggle
const navToggle = document.getElementById("navToggle")
const navLinks = document.querySelector(".nav-links")

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active")
})

// Work filter functionality
const filterBtns = document.querySelectorAll(".filter-btn")
const workItems = document.querySelectorAll(".work-item")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    workItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.classList.remove("hidden")
        item.classList.add("visible")
      } else {
        item.classList.add("hidden")
        item.classList.remove("visible")
      }
    })
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form submission handling
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)

  // Create mailto link as fallback
  const email = "anthonyelphick58@gmail.com"
  const subject = "New Photography Inquiry - Shot by Anthony"
  const body = `
Name: ${formData.get("firstName")} ${formData.get("lastName")}
Email: ${formData.get("email")}
Preferred Camera: ${formData.get("camera") || "No preference"}
Preferred Lens: ${formData.get("lens") || "No preference"}
Project Type: ${formData.get("projectType")}

Message:
${formData.get("message")}
    `

  // Try to submit via Formspree, fallback to mailto
  fetch(this.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.")
        this.reset()
      } else {
        // Fallback to mailto
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      }
    })
    .catch((error) => {
      // Fallback to mailto
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    })
})

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 100) {
    nav.style.background = "rgba(250, 250, 250, 0.98)"
  } else {
    nav.style.background = "rgba(250, 250, 250, 0.95)"
  }
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Set all work items as visible initially
  workItems.forEach((item) => {
    item.classList.add("visible")
  })
})

/* ==============================
   Lightbox Functionality
   ============================== */
/* ==============================
   Lightbox Functionality
   ============================== */
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");
  const workImages = document.querySelectorAll(".work-item img");

  // Ensure hidden on page load
  lightbox.style.display = "none";

  workImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";          // Show overlay
      lightboxImg.src = img.src;                 // Set clicked image
      captionText.textContent = img.alt;         // Set caption
      document.body.style.overflow = "hidden";  // Prevent background scroll
    });
  });

  // Close when clicking X
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
