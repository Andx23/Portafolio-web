
const initContactModal = () => {
  const contactButtons = document.querySelectorAll(
    ".projects-closing__link, .services-contact__button"
  );

  if (!contactButtons.length) return;

  const phoneNumber = "573008766797";
  const emailAddress = "andrescervantes102301@gmail.com";

  const whatsappMessage = `¡Hola! 👋 Muchas gracias por contactarme y por tu interés en trabajar conmigo.

Para conocer mejor tu proyecto y poder ofrecerte una propuesta adecuada, quisiera que me compartieras la siguiente información:

📌 1. Información del proyecto

- ¿Cuál es el nombre de tu negocio o proyecto?
- ¿A qué se dedica?
- ¿Qué tipo de página web necesitas? (Página empresarial, tienda online, portafolio, landing page, catálogo de productos, etc.).

🎯 2. Objetivo

- ¿Qué te gustaría conseguir con la página web?
- ¿Qué problema o necesidad buscas solucionar?

⚙️ 3. Funcionalidades

- ¿Qué te gustaría que pudieran hacer los visitantes?
- ¿Necesitas formularios, catálogo de productos, carrito de compras, reservas, integración con WhatsApp, pagos online u otras funcionalidades?
- ¿Tienes alguna referencia de una página web que te guste?

🎨 4. Diseño e identidad visual

- ¿Ya tienes logotipo, colores corporativos y tipografías?
- ¿Tienes alguna idea del estilo visual que buscas?
- ¿Cuentas con fotografías, textos y material gráfico para la página?

💰 5. Presupuesto y tiempos

- ¿Tienes un presupuesto aproximado para el proyecto?
- ¿Tienes alguna fecha estimada o límite para su entrega?

🌐 6. Recursos disponibles

- ¿Ya cuentas con dominio y hosting?
- ¿Tienes redes sociales o una página web anterior?
- ¿Hay alguna herramienta o servicio que necesites integrar?

📎 7. Material de referencia

Si tienes documentos, imágenes, diseños, ejemplos o cualquier información que ayude a entender tu proyecto, puedes compartirlos por este medio.

Una vez tenga esta información, revisaré los requisitos, evaluaré el alcance y te presentaré una propuesta con las funcionalidades, tiempo estimado de desarrollo y presupuesto.

¡Muchas gracias! Será un gusto ayudarte a convertir tu idea en un proyecto digital. 🚀`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const emailURL = `mailto:${emailAddress}`;

  const modalStyles = document.createElement("style");

  modalStyles.textContent = `
    .contact-modal {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.82);
      backdrop-filter: blur(9px);
      -webkit-backdrop-filter: blur(9px);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .contact-modal.is-visible {
      opacity: 1;
      visibility: visible;
    }

    .contact-modal__content {
      position: relative;
      width: 100%;
      max-width: 470px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 45px;
      background: #111111;
      border: 1px solid rgba(201, 31, 43, 0.45);
      box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
      transform: translateY(20px);
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .contact-modal.is-visible .contact-modal__content {
      transform: translateY(0);
    }

    .contact-modal__close {
      position: absolute;
      top: 18px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border: 1px solid rgba(241, 229, 218, 0.2);
      background: transparent;
      color: #f1e5da;
      font-size: 22px;
      cursor: pointer;
      transition: background 0.3s ease, border-color 0.3s ease;
    }

    .contact-modal__close:hover {
      background: #c91f2b;
      border-color: #c91f2b;
    }

    .contact-modal__eyebrow {
      display: block;
      margin-bottom: 15px;
      color: #e32b38;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 3px;
    }

    .contact-modal__title {
      margin-bottom: 12px;
      color: #f1e5da;
      font-family: "Barlow Condensed", sans-serif;
      font-size: clamp(38px, 8vw, 55px);
      font-weight: 900;
      font-style: italic;
      line-height: 0.95;
      text-transform: uppercase;
    }

    .contact-modal__title span {
      color: #e32b38;
    }

    .contact-modal__description {
      margin-bottom: 30px;
      color: #a99d95;
      font-size: 12px;
      line-height: 1.8;
    }

    .contact-modal__options {
      display: grid;
      gap: 12px;
    }

    .contact-modal__option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding: 18px 20px;
      border: 1px solid rgba(241, 229, 218, 0.2);
      color: #f1e5da;
      text-decoration: none;
      transition: background 0.3s ease, border-color 0.3s ease;
    }

    .contact-modal__option:hover {
      background: rgba(201, 31, 43, 0.12);
      border-color: #c91f2b;
    }

    .contact-modal__option-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .contact-modal__option-title {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }

    .contact-modal__option-detail {
      color: #a99d95;
      font-size: 10px;
    }

    .contact-modal__option-arrow {
      color: #e32b38;
      font-size: 21px;
    }

    .contact-modal__note {
      margin-top: 25px;
      color: #77716d;
      font-size: 9px;
      line-height: 1.7;
      text-align: center;
    }

    .contact-modal__close:focus-visible,
    .contact-modal__option:focus-visible {
      outline: 2px solid #e32b38;
      outline-offset: 4px;
    }

    @media (max-width: 480px) {
      .contact-modal {
        padding: 16px;
      }

      .contact-modal__content {
        padding: 38px 24px 30px;
      }

      .contact-modal__option {
        padding: 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .contact-modal,
      .contact-modal__content,
      .contact-modal__option {
        transition: none;
      }
    }
  `;

  document.head.appendChild(modalStyles);

  const modal = document.createElement("div");

  modal.className = "contact-modal";
  modal.setAttribute("aria-hidden", "true");

  modal.innerHTML = `
    <div
      class="contact-modal__content"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <button
        class="contact-modal__close"
        type="button"
        aria-label="Cerrar ventana"
      >
        ×
      </button>

      <span class="contact-modal__eyebrow">
        INSEPTION / CONTACTO
      </span>

      <h2 class="contact-modal__title" id="contact-modal-title">
        HABLEMOS DE <span>TU PROYECTO.</span>
      </h2>

      <p class="contact-modal__description" id="contact-modal-description">
        Elige el medio por el que prefieres contactarme.
        Estaré encantado de conocer tu idea y ayudarte a hacerla realidad.
      </p>

      <div class="contact-modal__options">
        <a
          class="contact-modal__option"
          href="${whatsappURL}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-modal__option-info">
            <span class="contact-modal__option-title">WHATSAPP</span>
            <span class="contact-modal__option-detail">
              Enviar información de mi proyecto
            </span>
          </span>
          <span class="contact-modal__option-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          class="contact-modal__option"
          href="${emailURL}"
        >
          <span class="contact-modal__option-info">
            <span class="contact-modal__option-title">CORREO ELECTRÓNICO</span>
            <span class="contact-modal__option-detail">
              ${emailAddress}
            </span>
          </span>
          <span class="contact-modal__option-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <p class="contact-modal__note">
        CUÉNTAME TU IDEA. JUNTOS PODEMOS CONVERTIRLA EN UNA EXPERIENCIA DIGITAL.
      </p>
    </div>
  `;

  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".contact-modal__close");
  const modalContent = modal.querySelector(".contact-modal__content");

  let previousFocus = null;

  const openModal = (event) => {
    event.preventDefault();

    previousFocus = event.currentTarget;

    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeButton.focus();
  };

  const closeModal = () => {
    if (!modal.classList.contains("is-visible")) return;

    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (previousFocus) {
      previousFocus.focus();
    }
  };

  contactButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-visible")) return;

    if (event.key === "Escape") {
      closeModal();
    }

    if (event.key === "Tab") {
      const focusableElements = modalContent.querySelectorAll(
        'a[href], button:not([disabled])'
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
};

initContactModal();
