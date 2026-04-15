document.addEventListener("astro:page-load", () => {
  const CSbody = document.querySelector("body");
  const CSnavbarMenu = document.getElementById("cs-navigation");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

  if (!CSbody || !CSnavbarMenu || !mobileMenuToggle) return;

  function toggleMenu() {
    mobileMenuToggle.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
  }

  mobileMenuToggle.addEventListener("click", function () {
    toggleMenu();
    ariaExpanded(mobileMenuToggle);
  });

  function ariaExpanded(element) {
    const isExpanded = element.getAttribute("aria-expanded");
    element.setAttribute(
      "aria-expanded",
      isExpanded === "false" ? "true" : "false",
    );
  }

  function setAriaExpanded(element, isExpanded) {
    element.setAttribute("aria-expanded", String(isExpanded));
  }

  const dropdownElements = document.querySelectorAll(".cs-dropdown");
  dropdownElements.forEach((element) => {
    let escapePressed = false;
    const dropdownButton = element.querySelector(".cs-dropdown-button");

    if (!(dropdownButton instanceof HTMLElement)) return;

    function setDropdownOpen(isOpen) {
      element.classList.toggle("cs-active", isOpen);
      setAriaExpanded(dropdownButton, isOpen);
    }

    element.addEventListener("focusout", function (event) {
      if (escapePressed) {
        escapePressed = false;
        return;
      }
      if (!element.contains(event.relatedTarget)) {
        setDropdownOpen(false);
      }
    });

    element.addEventListener("keydown", function (event) {
      if (element.classList.contains("cs-active")) {
        event.stopPropagation();
      }

      if (event.key === "Escape") {
        escapePressed = true;
        setDropdownOpen(false);
        dropdownButton.focus();
      }
    });

    dropdownButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setDropdownOpen(!element.classList.contains("cs-active"));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      mobileMenuToggle.classList.contains("cs-active")
    ) {
      toggleMenu();
    }
  });

  const dropdownLinks = document.querySelectorAll(".cs-drop-li > .cs-li-link");
  dropdownLinks.forEach((link) => {
    link.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        window.location.href = this.href;
      }
    });
  });

  // Now placed inside astro:page-load
  const internalLinks = document.querySelectorAll(
    '#cs-expanded-ul a[href^="#"], #cs-expanded-ul a[href^="/#"]',
  );
  internalLinks.forEach((link) => {
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
