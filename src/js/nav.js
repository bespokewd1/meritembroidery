document.addEventListener('astro:page-load', () => {
  const CSbody = document.querySelector('body');
  const CSnavbarMenu = document.getElementById('cs-navigation');
  const CSUlWrapper = document.getElementById('cs-ul-wrapper');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

  function toggleMenu() {
    mobileMenuToggle.classList.toggle('cs-active');
    CSnavbarMenu.classList.toggle('cs-active');
    CSbody.classList.toggle('cs-open');
  }

  mobileMenuToggle.addEventListener('click', function () {
    toggleMenu();
    ariaExpanded(mobileMenuToggle);
  });

  function ariaExpanded(element) {
    const isExpanded = element.getAttribute('aria-expanded');
    element.setAttribute('aria-expanded', isExpanded === 'false' ? 'true' : 'false');
  }

  const dropdownElements = document.querySelectorAll(".cs-dropdown");
  dropdownElements.forEach(element => {
    let escapePressed = false;

    element.addEventListener("focusout", function (event) {
      if (escapePressed) {
        escapePressed = false;
        return;
      }
      if (!element.contains(event.relatedTarget)) {
        element.classList.remove("cs-active");
        const dropdownButton = element.querySelector(".cs-dropdown-button");
        if (dropdownButton) {
          ariaExpanded(dropdownButton);
        }
      }
    });

    element.addEventListener("keydown", function (event) {
      const dropdownButton = element.querySelector(".cs-dropdown-button");
      if (element.classList.contains("cs-active")) {
        event.stopPropagation();
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        element.classList.toggle("cs-active");
        if (dropdownButton) {
          ariaExpanded(dropdownButton);
        }
      }

      if (event.key === "Escape") {
        escapePressed = true;
        element.classList.remove("cs-active");
        if (dropdownButton) {
          ariaExpanded(dropdownButton);
        }
      }
    });

    const maxWidthMediaQuery = window.matchMedia("(max-width: 63.9375rem)");
    if (maxWidthMediaQuery.matches) {
      element.addEventListener("click", (e) => {
        element.classList.toggle("cs-active");
        const dropdownButton = element.querySelector(".cs-dropdown-button");
        if (dropdownButton) {
          ariaExpanded(dropdownButton);
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileMenuToggle.classList.contains("cs-active")) {
          toggleMenu();
        }
      });
    }
  });

  const dropdownLinks = document.querySelectorAll(".cs-drop-li > .cs-li-link");
  dropdownLinks.forEach(link => {
    link.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        window.location.href = this.href;
      }
    });
  });

  // Now placed inside astro:page-load
  const internalLinks = document.querySelectorAll('#cs-expanded-ul a[href^="#"], #cs-expanded-ul a[href^="/#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const id = href?.replace(/^\/?#/, "");
      if (id) {
        const target = document.getElementById(id);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", `#${id}`);
        }
      }

      setTimeout(() => {
        CSnavbarMenu?.classList.remove("cs-active");
        mobileMenuToggle?.classList.remove("cs-active");
        CSbody?.classList.remove("cs-open");
        mobileMenuToggle?.setAttribute("aria-expanded", "false");
      }, 150);
    });
  });
});
