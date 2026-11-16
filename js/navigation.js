
/* ========================================
   INSEPTION - NAVIGATION
======================================== */

const initNavigation = () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const navigationLinks = document.querySelectorAll(".navigation__link");

  if (!menuButton || !navigation) return;

  const openMenu = () => {
    navigation.classList.add("is-open");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Cerrar menú");
    navigation.setAttribute("aria-hidden", "false");

    menuButton.querySelector(".menu-toggle__text").textContent = "CLOSE";

    const firstLink = navigation.querySelector(".navigation__link");

    if (firstLink) {
      firstLink.focus();
    }
  };

  const closeMenu = () => {
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
    navigation.setAttribute("aria-hidden", "true");

    menuButton.querySelector(".menu-toggle__text").textContent = "MENU";

    menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      document.body.classList.remove("menu-open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
      navigation.setAttribute("aria-hidden", "true");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeMenu();
    }
  });
};
