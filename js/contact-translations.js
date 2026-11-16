
/* ========================================
   INSEPTION - CONTACT PAGE TRANSLATIONS
======================================== */

/*
  Capture these elements as soon as this script loads, before the shared
  language selector applies its Services-page translations on DOMContentLoaded.
*/

const sharedButtons = Array.from(
  document.querySelectorAll(".services-contact__button")
).map((element) => ({
  element,
  originalHTML: element.innerHTML
}));

document.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("contact-page")) return;

  const translations = {
    es: {
      ".contact-header__edition span:last-child": "CONTACTO / 2026",
      ".contact-hero__eyebrow": "UNA IDEA PUEDE SER EL COMIENZO DE ALGO GRANDE",
      ".contact-hero__intro h1": {
        html: 'HABLEMOS<br><span>DE ALGO</span><span>GRANDE<span class="contact-hero__period">.</span></span>'
      },
      ".contact-hero__description": "Cada proyecto comienza con una conversación. Si tienes una idea, buscas colaborar o quieres desarrollar algo nuevo, me encantará escucharte.",
      ".contact-hero__button": {
        html: 'INICIAR UNA CONVERSACIÓN <span>↗</span>'
      },
      ".contact-hero__visual-caption": "BOGOTÁ, COLOMBIA / DISPONIBLE PARA NUEVOS PROYECTOS",
      ".contact-hero__bottom > a": {
        html: 'DESCUBRIR FORMAS DE CONTACTO <span>↓</span>'
      },
      ".contact-channels .contact-section-heading > div > span": "01 / CONTACTO DIRECTO",
      ".contact-channels .contact-section-heading h2": {
        html: 'CONECTEMOS<span>.</span>'
      },
      ".contact-channels .contact-section-heading p": "Elige el canal que prefieras para conversar sobre tu proyecto o propuesta.",
      ".contact-channel__top > span:first-child": [
        "01 / MENSAJERÍA", "02 / CORREO ELECTRÓNICO"
      ],
      ".contact-channel h3": ["WHATSAPP", "CORREO"],
      ".contact-channel > p": [
        "Hablemos directamente y cuéntame qué tienes en mente.",
        "Para propuestas profesionales, consultas y colaboraciones."
      ],
      ".contact-channel__footer": [
        { html: 'INICIAR CONVERSACIÓN <span>↗</span>' },
        { html: 'ENVIAR UN CORREO <span>↗</span>' }
      ],
      ".contact-social .contact-section-heading > div > span": "02 / REDES PROFESIONALES",
      ".contact-social .contact-section-heading h2": {
        html: 'TAMBIÉN ESTOY <span>POR AQUÍ.</span>'
      },
      ".contact-social .contact-section-heading p": "Conoce más sobre mi trabajo, proyectos, trayectoria y procesos creativos.",
      ".social-link__description": [
        "PERFIL PROFESIONAL",
        "CÓDIGO Y PROYECTOS",
        "CONTENIDO Y CREATIVIDAD"
      ],
      ".contact-availability__marker": {
        html: "<span></span>NUEVAS OPORTUNIDADES"
      },
      ".contact-availability__content > span": "03 / COLABORACIONES",
      ".contact-availability__content h2": {
        html: 'ABIERTO A<br><span>NUEVOS RETOS.</span>'
      },
      ".contact-availability__content p": "Estoy interesado en proyectos freelance, colaboraciones creativas y oportunidades profesionales en áreas digitales y multimedia.",
      ".contact-closing__eyebrow": "INSEPTION / DESIGN · CODE · CREATE",
      ".contact-closing h2": {
        html: 'YOUR NEXT IDEA<br><span>STARTS HERE.</span>'
      },
      ".contact-closing p": "Las grandes ideas merecen convertirse en realidad.",
      ".contact-closing__button": {
        html: 'HAGAMOS QUE SUCEDA <span>↗</span>'
      },
      ".contact-footer__back > span:nth-child(2)": "ANTERIOR / SERVICIOS",
      ".contact-footer__brand > span": "PORTAFOLIO CREATIVO / 2026",
      ".contact-footer__next > span:first-child": "VOLVER AL INICIO"
    },

    en: {
      ".contact-header__edition span:last-child": "CONTACT / 2026",
      ".contact-hero__eyebrow": "AN IDEA CAN BE THE START OF SOMETHING GREAT",
      ".contact-hero__intro h1": {
        html: "LET'S TALK<br><span>ABOUT SOMETHING</span><span>GREAT<span class=\"contact-hero__period\">.</span></span>"
      },
      ".contact-hero__description": "Every project starts with a conversation. If you have an idea, are looking to collaborate, or want to develop something new, I'd love to hear from you.",
      ".contact-hero__button": {
        html: 'START A CONVERSATION <span>↗</span>'
      },
      ".contact-hero__visual-caption": "BOGOTÁ, COLOMBIA / AVAILABLE FOR NEW PROJECTS",
      ".contact-hero__bottom > a": {
        html: 'EXPLORE CONTACT OPTIONS <span>↓</span>'
      },
      ".contact-channels .contact-section-heading > div > span": "01 / DIRECT CONTACT",
      ".contact-channels .contact-section-heading h2": {
        html: "LET'S CONNECT<span>.</span>"
      },
      ".contact-channels .contact-section-heading p": "Choose the channel you prefer to discuss your project or proposal.",
      ".contact-channel__top > span:first-child": [
        "01 / MESSAGING", "02 / EMAIL"
      ],
      ".contact-channel h3": ["WHATSAPP", "EMAIL"],
      ".contact-channel > p": [
        "Let's talk directly. Tell me what you have in mind.",
        "For professional proposals, inquiries, and collaborations."
      ],
      ".contact-channel__footer": [
        { html: 'START A CONVERSATION <span>↗</span>' },
        { html: 'SEND AN EMAIL <span>↗</span>' }
      ],
      ".contact-social .contact-section-heading > div > span": "02 / PROFESSIONAL NETWORKS",
      ".contact-social .contact-section-heading h2": {
        html: 'YOU CAN ALSO <span>FIND ME HERE.</span>'
      },
      ".contact-social .contact-section-heading p": "Explore more of my work, projects, professional journey, and creative process.",
      ".social-link__description": [
        "PROFESSIONAL PROFILE",
        "CODE & PROJECTS",
        "CONTENT & CREATIVITY"
      ],
      ".contact-availability__marker": {
        html: "<span></span>NEW OPPORTUNITIES"
      },
      ".contact-availability__content > span": "03 / COLLABORATIONS",
      ".contact-availability__content h2": {
        html: 'OPEN TO<br><span>NEW CHALLENGES.</span>'
      },
      ".contact-availability__content p": "I'm interested in freelance projects, creative collaborations, and professional opportunities in digital and multimedia fields.",
      ".contact-closing__eyebrow": "INSEPTION / DESIGN · CODE · CREATE",
      ".contact-closing h2": {
        html: 'YOUR NEXT IDEA<br><span>STARTS HERE.</span>'
      },
      ".contact-closing p": "Great ideas deserve to become reality.",
      ".contact-closing__button": {
        html: "LET'S MAKE IT HAPPEN <span>↗</span>"
      },
      ".contact-footer__back > span:nth-child(2)": "PREVIOUS / SERVICES",
      ".contact-footer__brand > span": "CREATIVE PORTFOLIO / 2026",
      ".contact-footer__next > span:first-child": "BACK TO HOME"
    }
  };

  const applyContactTranslations = (language) => {
    const selectedLanguage = translations[language] ? language : "es";

    /* Restore shared buttons before translating Contact. */
    sharedButtons.forEach(({ element, originalHTML }) => {
      element.innerHTML = originalHTML;
    });

    Object.entries(translations[selectedLanguage]).forEach(
      ([selector, value]) => {
        document.querySelectorAll(selector).forEach((element, index) => {
          const translatedValue = Array.isArray(value)
            ? value[index]
            : value;

          if (translatedValue === undefined) return;

          if (
            typeof translatedValue === "object" &&
            translatedValue !== null &&
            typeof translatedValue.html === "string"
          ) {
            element.innerHTML = translatedValue.html;
          } else {
            element.textContent = translatedValue;
          }
        });
      }
    );

    /* PAGE METADATA */
    const metadata = {
      es: {
        title: "Contacto | INSEPTION",
        description: "Ponte en contacto con Andrés Cervantes. Conectemos para desarrollar proyectos creativos y digitales."
      },
      en: {
        title: "Contact | INSEPTION",
        description: "Get in touch with Andrés Cervantes. Let's connect to develop creative and digital projects."
      }
    }[selectedLanguage];

    document.title = metadata.title;

    const description = document.querySelector(
      'meta[name="description"]'
    );

    if (description) {
      description.setAttribute("content", metadata.description);
    }
  };

  /* LANGUAGE CHANGE EVENT */
  document.addEventListener("languageChange", (event) => {
    applyContactTranslations(event.detail?.language || "es");
  });

  /* RESTORE SAVED LANGUAGE */
  const savedLanguage =
    localStorage.getItem("inseption-language") || "es";

  applyContactTranslations(savedLanguage);
});
