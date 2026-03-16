document.addEventListener("DOMContentLoaded", function () {
  /* ================= SKILLS ================= */
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" },
  );

  /* ================= TYPED JS ================= */
  if ($(".typed-text-output").length === 1) {
    var typed_strings = $(".typed-text").text();

    new Typed(".typed-text-output", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  /* ================= PROJECT SCROLL ANIMATION ================= */
  const projects = document.querySelectorAll(".project-box");

  window.addEventListener("scroll", () => {
    projects.forEach((project) => {
      let position = project.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        project.style.opacity = "1";
        project.style.transform = "translateY(0)";
      }
    });
  });

  /* ================= HERO BLOB ANIMATION ================= */
  const blob = document.querySelector(".hero-bg");

  if (blob) {
    function randomMove() {
      const x = Math.random() * 1000;
      const y = Math.random() * 400;

      blob.style.transform = `translate(${x}px, ${y}px)`;
    }

    setInterval(randomMove, 2000);
  }

  /* ================= CUSTOM TYPING EFFECT ================= */
  const words = ["Frontend Developer", "React Developer", "UI Engineer"];

  let i = 0;
  let j = 0;
  let current = "";
  let isDeleting = false;

  function type() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    current = words[i];

    if (!isDeleting) {
      typing.textContent = current.slice(0, ++j);
    }

    if (isDeleting) {
      typing.textContent = current.slice(0, --j);
    }

    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 120);
  }

  type();

  /* ================= EMAIL JS ================= */
  emailjs.init("U6sou0_UPoOKQwWvh");

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_geodwas", "template_6cmehou", this).then(
        function () {
          alert("Message Sent Successfully!");
          form.reset();
        },
        function () {
          alert("Failed to send message");
        },
      );
    });
  }
});
