
document.addEventListener("DOMContentLoaded", () => {
  const LANGUAGE_KEY = "inseption-language";
  const DEFAULT_LANGUAGE = "es";

  const selector = document.querySelector(".language-selector");
  const toggle = selector?.querySelector(".language-selector__toggle");
  const options = selector?.querySelectorAll(".language-selector__option");

  const translations = {
    es: {
      ".menu-toggle__text": "MENÚ",
      ".navigation__top span:nth-child(1)": "INSEPTION / NAVEGACIÓN",
      ".navigation__top span:nth-child(2)": "SELECCIONA UNA SECCIÓN",
      ".navigation__links .navigation__name": [
        "INICIO", "SOBRE MÍ", "HABILIDADES", "PROYECTOS",
        "EXPERIENCIA", "SERVICIOS", "CONTACTO"
      ],
      ".navigation__footer span:first-child": "ANDRÉS CERVANTES",

      ".hero__location span:last-child": "BOGOTÁ, COLOMBIA",
      ".hero__explore span:first-child": "EXPLORE MY WORK",

      ".about-heading__bottom > span:first-child": "Sobre mí",
      ".about-profile .about-section-number": "01 / PROFILE",
      ".about-profile h2": {
        html: "Creativo.<br>Tecnológico.<br><span>Multidisciplinario.</span>"
      },
      ".about-profile > p": [
        "Tecnólogo profesional en Gestión de la Comunicación Multimedia, enfocado en el desarrollo Front-End y la creación de experiencias digitales.",
        "Combino diseño, tecnología y comunicación visual para transformar ideas en proyectos funcionales, atractivos y con identidad propia."
      ],
      ".about-detail:nth-child(1) h3": "PERFIL",
      ".about-detail:nth-child(1) p": "Desarrollo Front-End, comunicación multimedia y creación de experiencias digitales.",
      ".about-detail:nth-child(2) h3": "ENFOQUE",
      ".about-detail:nth-child(2) p": "Diseño web, interfaces, desarrollo de productos digitales y comunicación visual.",
      ".about-detail:nth-child(3) h3": "HERRAMIENTAS",
      ".about-detail:nth-child(4) h3": "FORTALEZAS",
      ".about-detail:nth-child(4) p": "Creatividad, adaptabilidad, pensamiento crítico y aprendizaje continuo.",
      ".about-education__heading .about-section-number": "02 / EDUCATION",
      ".about-education__content h3": "Tecnología en Gestión de la Comunicación Multimedia",
      ".about-education__content p": "Formación en comunicación multimedia, diseño, producción de contenidos y medios digitales.",
      ".about-education__status": "FORMACIÓN COMPLETADA",
      ".about-philosophy > .about-section-number": "03 / MY PHILOSOPHY",
      ".about-philosophy > p": "Creo en el poder de combinar creatividad y tecnología para construir experiencias que comuniquen, conecten y generen valor.",
      ".about-footer__back span:nth-child(2)": "BACK TO HOME",
      ".about-footer__next span:first-child": "NEXT: EXPERTISE",

      ".expertise-hero__top span:nth-child(2)": "HABILIDADES Y TECNOLOGÍAS",
      ".expertise-title h1": {
        html: "HABILIDADES<br><span>Y TECNOLOGÍAS</span>"
      },
      ".expertise-hero__description": "Conjunto de habilidades creativas, técnicas y tecnológicas que aplico en la producción audiovisual, comunicación digital, diseño y desarrollo web de proyectos.",
      ".expertise-hero__bottom span:first-child": "CREATIVE SKILLS",
      ".expertise-hero__bottom span:last-child": "TECHNICAL KNOWLEDGE",
      ".expertise-section-heading h2": [
        "ÁREAS DE DOMINIO", "HERRAMIENTAS PRINCIPALES"
      ],
      ".expertise-section-description": "Tres disciplinas que integran mi perfil profesional.",
      ".expertise-area-card__top span:nth-child(2)": [
        "AUDIOVISUAL", "DISEÑO", "DESARROLLO WEB"
      ],
      ".expertise-area-card__description": [
        "Producción y postproducción audiovisual.",
        "Diseño gráfico, visual y comunicación.",
        "Desarrollo de experiencias digitales."
      ],
      ".expertise-area-card__list li": [
        "Edición de vídeo", "Postproducción", "Limpieza y mezcla de audio",
        "Narrativa documental", "Diseño gráfico y visual", "Identidad y marcas",
        "Piezas editoriales", "Comunicación visual", "Diseño de interfaces",
        "Maquetación web", "Interfaces y experiencia de usuario",
        "Desarrollo de proyectos", "Control de versiones", "Desarrollo Front-End"
      ],
      ".expertise-tool-group__label > span:last-child": [
        "PRODUCCIÓN AUDIOVISUAL<br>Y DISEÑO",
        "DESARROLLO<br>WEB"
      ],
      ".expertise-tools__note": "TECH STACK · CREATIVE SOFTWARE · DEVELOPMENT TOOLS",
      ".expertise-subheading span": [
        "HABILIDADES CLAVE", "APRENDIZAJE CONTINUO"
      ],
      ".expertise-skills__list li": [
        "Edición de vídeo de formato largo",
        "Narrativa audiovisual y documental",
        "Limpieza y mezcla de audio",
        "Diseño gráfico y visual",
        "Desarrollo de interfaces web",
        "Gestión de proyectos creativos",
        "Trabajo en equipo y comunicación efectiva"
      ],
      ".expertise-learning__text h3": "EVOLUCIÓN CONSTANTE",
      ".expertise-learning__text p": "Me mantengo en constante formación para fortalecer mis habilidades, explorar nuevas herramientas y aplicar tecnologías actuales en mis proyectos.",
      ".expertise-learning__text > span": "ALWAYS LEARNING · ALWAYS CREATING",
      ".expertise-closing > span": "CREATIVITY MEETS TECHNOLOGY",
      ".expertise-closing h2": {
        html: "THINK.<br><span>CREATE.</span><br>BUILD."
      },
      ".expertise-closing p": "Transformando ideas en experiencias digitales.",
      ".expertise-footer__back": {
        html: '<span>←</span> ABOUT ME'
      },
      ".expertise-footer__next": {
        html: 'PROJECTS <span>↗</span>'
      },

      ".projects-header__edition span:last-child": "PORTAFOLIO CREATIVO / 2026",
      ".projects-intro__top span:first-child": "TRABAJOS SELECCIONADOS / PORTAFOLIO",
      ".projects-intro__top span:last-child": "04 PROYECTOS",
      ".projects-intro__eyebrow": "IDEAS QUE SE CONVIERTEN EN EXPERIENCIAS",
      ".projects-intro__heading h1": {
        html: 'PROYECTO<span>S</span>'
      },
      ".projects-intro__heading p": "Una selección de ideas, conceptos y experiencias creativas desarrolladas a través del diseño, la tecnología y la narrativa audiovisual.",
      ".projects-intro__bottom > span": "01 — 04 / PROYECTOS SELECCIONADOS",
      ".projects-scroll": {
        html: 'EXPLORAR PROYECTOS <span>↓</span>'
      },
      ".project__header .project__number": [
        "01 / 04", "02 / 04", "03 / 04", "04 / 04"
      ],
      ".project__category": [
        "DESARROLLO WEB", "DISEÑO DIGITAL",
        "EDICIÓN DE AUDIO Y VIDEO", "CREACIÓN DE CONTENIDO"
      ],
      ".project__eyebrow": [
        "EXPERIENCIA DIGITAL / 2026",
        "DESARROLLO VISUAL / DISEÑO DE VIDEOJUEGOS",
        "PRODUCCIÓN AUDIOVISUAL / POSTPRODUCCIÓN",
        "COMUNICACIÓN / CONTENIDO CREATIVO"
      ],
      ".project__description": [
        "Experiencia digital desarrollada para una marca de repostería, integrando su catálogo de productos y propuesta visual en una plataforma web accesible y adaptable a diferentes dispositivos.",
        "Exploración creativa de identidad visual y diseño gráfico para un proyecto de videojuego, combinando atmósferas, conceptos visuales y composiciones editoriales.",
        "Exploración audiovisual enfocada en la edición, el ritmo visual y la narrativa, utilizando recursos cinematográficos para desarrollar la atmósfera del proyecto.",
        "Proyecto de creación de contenido enfocado en la comunicación audiovisual y la narrativa visual, explorando formas creativas de conectar ideas con las audiencias."
      ],
      ".project__tags span": [
        "DISEÑO WEB", "HTML5", "CSS3", "JAVASCRIPT",
        "DIRECCIÓN DE ARTE", "DISEÑO GRÁFICO", "CONCEPTO VISUAL",
        "EDICIÓN DE VIDEO", "POSTPRODUCCIÓN", "DISEÑO SONORO",
        "CREACIÓN DE CONTENIDO", "COMUNICACIÓN", "NARRATIVA VISUAL"
      ],
      ".project__link": [
        "VISITAR PÁGINA WEB ↗", "SIGUIENTE PROYECTO ↗",
        "VER ANIMACIÓN ↗", "VER DOCUMENTAL ↗"
      ],
      ".project__visual-label span:first-child": "DULCE ARTE / TIENDA DIGITAL",
      ".project__visual-label span:last-child": "01 — 04",
      ".project__visual-caption": [
        "UNA EXPERIENCIA DIGITAL CON SABOR",
        "CONSTRUYENDO UNA IDENTIDAD VISUAL",
        "CADA FOTOGRAMA CUENTA UNA HISTORIA",
        "HISTORIAS QUE CONECTAN"
      ],
      ".design-gallery__item--main figcaption": "01 / PORTADA VISUAL",
      ".design-gallery__item--secondary figcaption": "02 / DISEÑO DE ESCENARIOS",
      ".design-gallery__item--detail figcaption": "03 / CONCEPTO CREATIVO",
      ".audiovisual-gallery__main > span": "FOTOGRAMA / 001",
      ".projects-closing__eyebrow": "FIN DE LOS PROYECTOS SELECCIONADOS / 2026",
      ".projects-closing h2": {
        html: 'MÁS QUE<br><span>SOLO IDEAS<span>.</span></span>'
      },
      ".projects-closing p": "Cada proyecto es una oportunidad para crear algo significativo.",
      ".projects-closing__link": {
        html: 'CREEMOS ALGO JUNTOS <span>↗</span>'
      },
      ".projects-footer__back > span:nth-child(2)": "ANTERIOR / HABILIDADES",
      ".projects-footer__brand > span": "PORTAFOLIO CREATIVO / 2026",
      ".projects-footer__next > span:first-child": "EXPERIENCIA / SIGUIENTE",

      ".experience-header__edition span:last-child": "PERFIL PROFESIONAL / 2026",
      ".experience-intro__top span:first-child": "TRAYECTORIA / PERFIL PROFESIONAL",
      ".experience-intro__top span:last-child": "EXPERIENCIA Y FORMACIÓN",
      ".experience-intro__eyebrow": "CONOCIMIENTO QUE SE TRANSFORMA EN EXPERIENCIA",
      ".experience-intro__heading h1": {
        html: 'EXPERIENCIA<br><span>Y FORMACIÓN<span class="experience-intro__period">.</span></span>'
      },
      ".experience-intro__description p": "Mi formación académica y experiencia me han permitido desarrollar habilidades en edición, producción audiovisual, comunicación digital, desarrollo web y creación de contenidos, aplicándolas en proyectos reales y colaborativos.",
      ".experience-intro__bottom > span": "INSEPTION / PERFIL PROFESIONAL",
      ".experience-scroll": {
        html: 'EXPLORAR TRAYECTORIA <span>↓</span>'
      },
      ".experience-section__number": [
        "01 / EXPERIENCIA", "02 / FORMACIÓN", "03 / APRENDIZAJE",
        "04 / FORMACIÓN", "05 / IDIOMAS", "06 / CAPACIDADES",
        "07 / PARTICIPACIÓN", "08 / TECNOLOGÍA"
      ],
      ".experience-section__heading h2": [
        "EXPERIENCIA PROFESIONAL", "FORMACIÓN ACADÉMICA",
        "FORMACIÓN EN DESARROLLO WEB", "FORMACIÓN COMPLEMENTARIA",
        "IDIOMAS", "HABILIDADES", "LOGROS Y PARTICIPACIÓN",
        "HERRAMIENTAS"
      ],
      ".experience-card__label": [
        "ORGANIZACIÓN", "RESPONSABILIDADES", "INSTITUCIÓN",
        "PLATAFORMA", "ÁREAS DE APRENDIZAJE"
      ],
      ".experience-card__eyebrow": [
        "EXPERIENCIA / 2025", "EDUCACIÓN SUPERIOR",
        "APRENDIZAJE / DESARROLLO WEB"
      ],
      ".experience-card__role": "Pasante de Comunicación Científica y Edición Audiovisual",
      ".experience-card--professional .experience-card__information h3": "Clínica Montserrat – Escuela Colombiana de Rehabilitación (ECR)",
      ".experience-card--professional .experience-card__date": {
        html: '<span aria-hidden="true">▦</span> Agosto – diciembre de 2025'
      },
      ".experience-card--professional .experience-card__responsibilities li": [
        "Edición de contenido documental y educativo (Pixelados 2.0 y eventos).",
        "Limpieza y balance de audio multipista.",
        "Estructuración narrativa de videos de formato largo.",
        "Trabajo con investigadores y docentes para la comunicación científica."
      ],
      ".experience-card--education .experience-card__information h3": "Tecnología en Gestión de la Comunicación Multimedia",
      ".experience-card--education .experience-card__status": "Formación completada en 2025",
      ".experience-card--education .experience-card__date": "Grado en marzo de 2026",
      ".experience-card__institution p": "Escuela Colombiana de Rehabilitación (ECR)",
      ".experience-card--web .experience-card__information h3": "Formación en Desarrollo Web",
      ".experience-card--web .experience-card__information p": "Ruta de aprendizaje en desarrollo web con enfoque práctico en la creación de proyectos y portafolio.",
      ".experience-card--web .experience-card__responsibilities li": [
        "HTML, CSS y JavaScript.",
        "Desarrollo de interfaces web.",
        "Control de versiones (Git y GitHub).",
        "Despliegue de proyectos en la web."
      ],
      ".experience-section--additional .experience-section__heading h2": "FORMACIÓN COMPLEMENTARIA",
      ".experience-section--additional .experience-list li span": [
        "Diseño y desarrollo de videojuegos",
        "Marketing digital y negocios",
        "Blender 4.X y Unreal Engine 5",
        "Industria y Comercio"
      ],
      ".experience-section--additional .experience-list time": [
        "Marzo de 2021", "Mayo de 2021", "2025", "2024"
      ],
      ".experience-section--languages .experience-section__heading h2": "IDIOMAS",
      ".language-item h3": ["Español", "Inglés"],
      ".language-item p": ["Nativo", "Intermedio (competencia profesional)"],
      ".experience-section--skills .experience-section__heading h2": "HABILIDADES",
      ".experience-section--skills .experience-list li": [
        "Edición de video de formato largo",
        "Narrativa documental",
        "Producción de contenido digital",
        "Comunicación visual basada en investigación",
        "Edición y postproducción de video",
        "Limpieza y mezcla de audio"
      ],
      ".experience-section--achievements .experience-section__heading h2": "LOGROS Y PARTICIPACIÓN",
      ".experience-section--achievements .experience-list li": [
        "Certificación Industria 17024 ISO S.A.S. (2024 – 2027).",
        "Ponente internacional — Universidad de Palermo, Argentina (2025).",
        "Ponente nacional — Universidad Nacional Abierta y a Distancia, Colombia (2025).",
        "Presentación académica — evento Pixelados 3.0, ECR (2025)."
      ],
      ".tools-group__title": [
        "PRODUCCIÓN AUDIOVISUAL Y DISEÑO",
        "DESARROLLO WEB"
      ],
      ".experience-closing__eyebrow": "INSEPTION / PERFIL PROFESIONAL",
      ".experience-closing h2": {
        html: 'APRENDIZAJE<br><span>EN CONSTANTE EVOLUCIÓN<span>.</span></span>'
      },
      ".experience-closing p": "Cada experiencia representa una oportunidad para aprender, crear y desarrollar nuevas ideas.",
      ".experience-closing__link": {
        html: 'EXPLORAR MIS PROYECTOS <span>↗</span>'
      },
      ".experience-footer__back > span:nth-child(2)": "ANTERIOR / PROYECTOS",
      ".experience-footer__brand > span": "PORTAFOLIO CREATIVO / 2026",
      ".experience-footer__next > span:first-child": "SERVICIOS / SIGUIENTE",

      ".services-header__edition span:last-child": "SERVICIOS / 2026",
      ".services-hero__top span:last-child": "SOLUCIONES CREATIVAS Y DIGITALES",
      ".services-hero__eyebrow": "IDENTIDAD · SERVICIOS · CONTENIDO",
      ".services-hero__heading h1": {
        html: 'IDEAS QUE<br><span>SE CONVIERTEN</span><br>EN EXPERIENCIAS<span class="services-hero__period">.</span>'
      },
      ".services-hero__description p": "Desarrollo soluciones digitales y creativas que conectan diseño, tecnología y comunicación para transformar ideas en proyectos con propósito.",
      ".services-hero__link": {
        html: 'EXPLORAR SERVICIOS <span>↓</span>'
      },
      ".services-hero__bottom span:first-child": "CREATIVITY MEETS TECHNOLOGY",
      ".services-hero__bottom span:last-child": "INSEPTION / CREATIVE STUDIO",
      ".services-section__eyebrow": "LO QUE PUEDO HACER",
      ".services-section__heading h2": {
        html: 'SERVICIOS<span>.</span>'
      },
      ".services-section__heading > p": "Cada proyecto parte de una necesidad diferente. Estas son las áreas en las que puedo ayudarte.",
      ".service-card__category": [
        "DESARROLLO DIGITAL", "DISEÑO VISUAL", "PRODUCCIÓN MULTIMEDIA"
      ],
      ".service-card h3": [
        { html: 'DESARROLLO <span>WEB</span>' },
        { html: 'DISEÑO <span>DIGITAL</span>' },
        { html: 'COMUNICACIÓN <span>MULTIMEDIA</span>' }
      ],
      ".service-card__description": [
        "Sitios web funcionales, atractivos y adaptables que ayudan a presentar tu negocio y conectar con tus clientes.",
        "Identidad visual y piezas gráficas que comunican la personalidad de tu marca de forma coherente.",
        "Contenido audiovisual y narrativas visuales para comunicar ideas, proyectos y experiencias."
      ],
      ".service-card__details > span": "QUÉ INCLUYE",
      ".service-card__details li": [
        "Landing pages y páginas promocionales",
        "Páginas web para pequeños negocios",
        "Portafolios profesionales",
        "Catálogos digitales",
        "Diseño responsive",
        "Integración de formularios y WhatsApp",
        "Implementación de diseños de Figma",
        "Diseño de identidad visual",
        "Piezas gráficas para redes sociales",
        "Diseño de interfaces UI",
        "Diseño de presentaciones",
        "Material promocional digital",
        "Composición y edición de imágenes",
        "Edición de video",
        "Montaje y postproducción audiovisual",
        "Limpieza y edición de audio",
        "Animación y recursos visuales",
        "Contenido para plataformas digitales",
        "Narrativa y estructuración audiovisual"
      ],
      ".service-card__link": {
        html: 'HABLEMOS DE TU PROYECTO <span>↗</span>'
      },
      ".services-process__heading > span": "02 / METODOLOGÍA",
      ".services-process__heading h2": {
        html: 'DE LA IDEA<br><span>AL RESULTADO.</span>'
      },
      ".services-process__heading p": "Un proceso organizado para entender tus necesidades, desarrollar una solución y entregar un resultado claro.",
      ".process-item h3": ["ESCUCHAR", "PLANIFICAR", "CREAR", "ENTREGAR"],
      ".process-item p": [
        "Conocer tu idea, tus objetivos y las necesidades que quieres resolver.",
        "Definir el alcance, las funcionalidades, los recursos y el plan de trabajo.",
        "Diseñar y desarrollar la solución con seguimiento durante el proceso.",
        "Revisar los detalles y entregar el proyecto según lo acordado."
      ],
      ".services-value__eyebrow": "MÁS QUE UN SERVICIO",
      ".services-value__content h2": {
        html: 'CREATIVIDAD<br><span>CON PROPÓSITO.</span>'
      },
      ".services-value__content p": "Cada proyecto merece una solución pensada para su contexto. Mi enfoque combina creatividad, criterio visual y tecnología para construir experiencias digitales útiles y coherentes.",
      ".services-value__tags span": ["DISEÑO", "TECNOLOGÍA", "COMUNICACIÓN"],
      ".services-contact__eyebrow": "INSEPTION / INICIEMOS ALGO",
      ".services-contact h2": {
        html: '¿TIENES UNA<br><span>IDEA EN MENTE?</span>'
      },
      ".services-contact > p": "Cuéntame qué quieres crear. Revisaremos tu idea, definiremos lo que necesitas y construiremos una propuesta para hacerla realidad.",
      ".services-contact__button": {
        html: 'SOLICITAR UNA PROPUESTA <span>↗</span>'
      },
      ".services-contact__note": "HABLEMOS DE TU PRÓXIMO PROYECTO",
      ".services-footer__back > span:nth-child(2)": "ANTERIOR / EXPERIENCIA",
      ".services-footer__brand > span": "PORTAFOLIO CREATIVO / 2026",
      ".services-footer__next > span:first-child": "CONTACTO / SIGUIENTE"
    },

    en: {
      ".menu-toggle__text": "MENU",
      ".navigation__top span:nth-child(1)": "INSEPTION / NAVIGATION",
      ".navigation__top span:nth-child(2)": "SELECT A DESTINATION",
      ".navigation__links .navigation__name": [
        "HOME", "ABOUT ME", "EXPERTISE", "PROJECTS",
        "EXPERIENCE", "SERVICES", "CONTACT"
      ],
      ".navigation__footer span:first-child": "ANDRÉS CERVANTES",

      ".hero__location span:last-child": "BOGOTÁ, COLOMBIA",
      ".hero__explore span:first-child": "EXPLORE MY WORK",

      ".about-heading__bottom > span:first-child": "About me",
      ".about-profile .about-section-number": "01 / PROFILE",
      ".about-profile h2": {
        html: "Creative.<br>Tech-driven.<br><span>Multidisciplinary.</span>"
      },
      ".about-profile > p": [
        "Professional Multimedia Communication Technologist, focused on Front-End development and the creation of digital experiences.",
        "I combine design, technology, and visual communication to turn ideas into functional, engaging projects with a distinctive identity."
      ],
      ".about-detail:nth-child(1) h3": "PROFILE",
      ".about-detail:nth-child(1) p": "Front-End development, multimedia communication, and digital experience creation.",
      ".about-detail:nth-child(2) h3": "FOCUS",
      ".about-detail:nth-child(2) p": "Web design, interfaces, digital product development, and visual communication.",
      ".about-detail:nth-child(3) h3": "TOOLS",
      ".about-detail:nth-child(4) h3": "STRENGTHS",
      ".about-detail:nth-child(4) p": "Creativity, adaptability, critical thinking, and continuous learning.",
      ".about-education__heading .about-section-number": "02 / EDUCATION",
      ".about-education__content h3": "Multimedia Communication Management Technology",
      ".about-education__content p": "Education in multimedia communication, design, content production, and digital media.",
      ".about-education__status": "COMPLETED",
      ".about-philosophy > .about-section-number": "03 / MY PHILOSOPHY",
      ".about-philosophy > p": "I believe in combining creativity and technology to build experiences that communicate, connect, and create value.",
      ".about-footer__back span:nth-child(2)": "BACK TO HOME",
      ".about-footer__next span:first-child": "NEXT: EXPERTISE",

      ".expertise-hero__top span:nth-child(2)": "SKILLS & TECHNOLOGIES",
      ".expertise-title h1": {
        html: "SKILLS<br><span>& TECHNOLOGIES</span>"
      },
      ".expertise-hero__description": "A combination of creative, technical, and technological skills that I apply to audiovisual production, digital communication, design, and web development projects.",
      ".expertise-hero__bottom span:first-child": "CREATIVE SKILLS",
      ".expertise-hero__bottom span:last-child": "TECHNICAL KNOWLEDGE",
      ".expertise-section-heading h2": [
        "AREAS OF EXPERTISE", "MAIN TOOLS"
      ],
      ".expertise-section-description": "Three disciplines that shape my professional profile.",
      ".expertise-area-card__top span:nth-child(2)": [
        "AUDIOVISUAL", "DESIGN", "WEB DEVELOPMENT"
      ],
      ".expertise-area-card__description": [
        "Audiovisual production and post-production.",
        "Graphic design, visual design, and communication.",
        "Digital experience development."
      ],
      ".expertise-area-card__list li": [
        "Video editing", "Post-production", "Audio cleanup and mixing",
        "Documentary storytelling", "Graphic and visual design",
        "Brand identity", "Editorial design", "Visual communication",
        "Interface design", "Web layout", "Interfaces and user experience",
        "Project development", "Version control", "Front-End development"
      ],
      ".expertise-tool-group__label > span:last-child": [
        "AUDIOVISUAL PRODUCTION<br>& DESIGN",
        "WEB<br>DEVELOPMENT"
      ],
      ".expertise-tools__note": "TECH STACK · CREATIVE SOFTWARE · DEVELOPMENT TOOLS",
      ".expertise-subheading span": [
        "KEY SKILLS", "CONTINUOUS LEARNING"
      ],
      ".expertise-skills__list li": [
        "Long-form video editing",
        "Audiovisual and documentary storytelling",
        "Audio cleanup and mixing",
        "Graphic and visual design",
        "Web interface development",
        "Creative project management",
        "Teamwork and effective communication"
      ],
      ".expertise-learning__text h3": "CONTINUOUS GROWTH",
      ".expertise-learning__text p": "I continuously develop my skills, explore new tools, and apply current technologies to my projects.",
      ".expertise-learning__text > span": "ALWAYS LEARNING · ALWAYS CREATING",
      ".expertise-closing > span": "CREATIVITY MEETS TECHNOLOGY",
      ".expertise-closing h2": {
        html: "THINK.<br><span>CREATE.</span><br>BUILD."
      },
      ".expertise-closing p": "Turning ideas into digital experiences.",
      ".expertise-footer__back": {
        html: '<span>←</span> ABOUT ME'
      },
      ".expertise-footer__next": {
        html: 'PROJECTS <span>↗</span>'
      },

      ".projects-header__edition span:last-child": "CREATIVE PORTFOLIO / 2026",
      ".projects-intro__top span:first-child": "SELECTED WORK / PORTFOLIO",
      ".projects-intro__top span:last-child": "04 PROJECTS",
      ".projects-intro__eyebrow": "IDEAS THAT BECOME EXPERIENCES",
      ".projects-intro__heading h1": {
        html: 'PROJECT<span>S</span>'
      },
      ".projects-intro__heading p": "A selection of ideas, concepts, and creative experiences developed through design, technology, and audiovisual storytelling.",
      ".projects-intro__bottom > span": "01 — 04 / SELECTED PROJECTS",
      ".projects-scroll": {
        html: 'EXPLORE PROJECTS <span>↓</span>'
      },
      ".project__header .project__number": [
        "01 / 04", "02 / 04", "03 / 04", "04 / 04"
      ],
      ".project__category": [
        "WEB DEVELOPMENT", "DIGITAL DESIGN",
        "AUDIO & VIDEO EDITING", "CONTENT CREATION"
      ],
      ".project__eyebrow": [
        "DIGITAL EXPERIENCE / 2026",
        "VISUAL DEVELOPMENT / GAME DESIGN",
        "AUDIOVISUAL PRODUCTION / POST-PRODUCTION",
        "COMMUNICATION / CREATIVE CONTENT"
      ],
      ".project__description": [
        "A digital experience developed for a bakery brand, bringing together its product catalog and visual identity in a web platform that is accessible and adaptable to different devices.",
        "A creative exploration of visual identity and graphic design for a video game project, combining atmospheres, visual concepts, and editorial compositions.",
        "An audiovisual exploration focused on editing, visual rhythm, and storytelling, using cinematic elements to shape the project's atmosphere.",
        "A content creation project focused on audiovisual communication and visual storytelling, exploring creative ways to connect ideas with audiences."
      ],
      ".project__tags span": [
        "WEB DESIGN", "HTML5", "CSS3", "JAVASCRIPT",
        "ART DIRECTION", "GRAPHIC DESIGN", "VISUAL CONCEPT",
        "VIDEO EDITING", "POST-PRODUCTION", "SOUND DESIGN",
        "CONTENT CREATION", "COMMUNICATION", "VISUAL STORYTELLING"
      ],
      ".project__link": [
        "VISIT WEBSITE ↗", "NEXT PROJECT ↗",
        "WATCH ANIMATION ↗", "WATCH DOCUMENTARY ↗"
      ],
      ".project__visual-label span:first-child": "DULCE ARTE / ONLINE STORE",
      ".project__visual-label span:last-child": "01 — 04",
      ".project__visual-caption": [
        "A DIGITAL EXPERIENCE WITH FLAVOR",
        "BUILDING A VISUAL IDENTITY",
        "EVERY FRAME TELLS A STORY",
        "STORIES THAT CONNECT"
      ],
      ".design-gallery__item--main figcaption": "01 / COVER ART",
      ".design-gallery__item--secondary figcaption": "02 / ENVIRONMENT DESIGN",
      ".design-gallery__item--detail figcaption": "03 / CREATIVE CONCEPT",
      ".audiovisual-gallery__main > span": "FRAME / 001",
      ".projects-closing__eyebrow": "END OF SELECTED PROJECTS / 2026",
      ".projects-closing h2": {
        html: 'MORE THAN<br><span>JUST IDEAS<span>.</span></span>'
      },
      ".projects-closing p": "Every project is an opportunity to create something meaningful.",
      ".projects-closing__link": {
        html: "LET'S CREATE SOMETHING TOGETHER <span>↗</span>"
      },
      ".projects-footer__back > span:nth-child(2)": "PREVIOUS / EXPERTISE",
      ".projects-footer__brand > span": "CREATIVE PORTFOLIO / 2026",
      ".projects-footer__next > span:first-child": "EXPERIENCE / NEXT",

      ".experience-header__edition span:last-child": "PROFESSIONAL PROFILE / 2026",
      ".experience-intro__top span:first-child": "JOURNEY / PROFESSIONAL PROFILE",
      ".experience-intro__top span:last-child": "EXPERIENCE & EDUCATION",
      ".experience-intro__eyebrow": "KNOWLEDGE TRANSFORMED INTO EXPERIENCE",
      ".experience-intro__heading h1": {
        html: 'EXPERIENCE<br><span>& EDUCATION<span class="experience-intro__period">.</span></span>'
      },
      ".experience-intro__description p": "My academic background and professional experience have allowed me to develop skills in editing, audiovisual production, digital communication, web development, and content creation, applying them to real-world collaborative projects.",
      ".experience-intro__bottom > span": "INSEPTION / PROFESSIONAL PROFILE",
      ".experience-scroll": {
        html: 'EXPLORE MY JOURNEY <span>↓</span>'
      },
      ".experience-section__number": [
        "01 / EXPERIENCE", "02 / EDUCATION", "03 / LEARNING",
        "04 / EDUCATION", "05 / LANGUAGES", "06 / SKILLS",
        "07 / PARTICIPATION", "08 / TECHNOLOGY"
      ],
      ".experience-section__heading h2": [
        "PROFESSIONAL EXPERIENCE", "ACADEMIC EDUCATION",
        "WEB DEVELOPMENT TRAINING", "ADDITIONAL EDUCATION",
        "LANGUAGES", "SKILLS", "ACHIEVEMENTS & PARTICIPATION",
        "TOOLS"
      ],
      ".experience-card__label": [
        "ORGANIZATION", "RESPONSIBILITIES", "INSTITUTION",
        "PLATFORM", "LEARNING AREAS"
      ],
      ".experience-card__eyebrow": [
        "EXPERIENCE / 2025", "HIGHER EDUCATION",
        "LEARNING / WEB DEVELOPMENT"
      ],
      ".experience-card__role": "Scientific Communication and Audiovisual Editing Intern",
      ".experience-card--professional .experience-card__information h3": "Clínica Montserrat – Escuela Colombiana de Rehabilitación (ECR)",
      ".experience-card--professional .experience-card__date": {
        html: '<span aria-hidden="true">▦</span> August – December 2025'
      },
      ".experience-card--professional .experience-card__responsibilities li": [
        "Editing documentary and educational content (Pixelados 2.0 and events).",
        "Multitrack audio cleanup and balancing.",
        "Narrative structuring of long-form videos.",
        "Working with researchers and educators on scientific communication."
      ],
      ".experience-card--education .experience-card__information h3": "Multimedia Communication Management Technology",
      ".experience-card--education .experience-card__status": "Completed in 2025",
      ".experience-card--education .experience-card__date": "Graduated in March 2026",
      ".experience-card__institution p": "Escuela Colombiana de Rehabilitación (ECR)",
      ".experience-card--web .experience-card__information h3": "Web Development Training",
      ".experience-card--web .experience-card__information p": "A practical web development learning path focused on building projects and a portfolio.",
      ".experience-card--web .experience-card__responsibilities li": [
        "HTML, CSS, and JavaScript.",
        "Web interface development.",
        "Version control (Git and GitHub).",
        "Deploying projects to the web."
      ],
      ".experience-section--additional .experience-section__heading h2": "ADDITIONAL EDUCATION",
      ".experience-section--additional .experience-list li span": [
        "Video game design and development",
        "Digital marketing and business",
        "Blender 4.X and Unreal Engine 5",
        "Industry and Commerce"
      ],
      ".experience-section--additional .experience-list time": [
        "March 2021", "May 2021", "2025", "2024"
      ],
      ".experience-section--languages .experience-section__heading h2": "LANGUAGES",
      ".language-item h3": ["Spanish", "English"],
      ".language-item p": ["Native", "Intermediate (professional proficiency)"],
      ".experience-section--skills .experience-section__heading h2": "SKILLS",
      ".experience-section--skills .experience-list li": [
        "Long-form video editing",
        "Documentary storytelling",
        "Digital content production",
        "Research-based visual communication",
        "Video editing and post-production",
        "Audio cleanup and mixing"
      ],
      ".experience-section--achievements .experience-section__heading h2": "ACHIEVEMENTS & PARTICIPATION",
      ".experience-section--achievements .experience-list li": [
        "Industry 17024 ISO S.A.S. Certification (2024–2027).",
        "International speaker — University of Palermo, Argentina (2025).",
        "National speaker — Universidad Nacional Abierta y a Distancia, Colombia (2025).",
        "Academic presentation — Pixelados 3.0 event, ECR (2025)."
      ],
      ".tools-group__title": [
        "AUDIOVISUAL PRODUCTION & DESIGN",
        "WEB DEVELOPMENT"
      ],
      ".experience-closing__eyebrow": "INSEPTION / PROFESSIONAL PROFILE",
      ".experience-closing h2": {
        html: 'CONTINUOUS<br><span>GROWTH AND EVOLUTION<span>.</span></span>'
      },
      ".experience-closing p": "Every experience is an opportunity to learn, create, and develop new ideas.",
      ".experience-closing__link": {
        html: 'EXPLORE MY PROJECTS <span>↗</span>'
      },
      ".experience-footer__back > span:nth-child(2)": "PREVIOUS / PROJECTS",
      ".experience-footer__brand > span": "CREATIVE PORTFOLIO / 2026",
      ".experience-footer__next > span:first-child": "SERVICES / NEXT",

      ".services-header__edition span:last-child": "SERVICES / 2026",
      ".services-hero__top span:last-child": "CREATIVE & DIGITAL SOLUTIONS",
      ".services-hero__eyebrow": "IDENTITY · SERVICES · CONTENT",
      ".services-hero__heading h1": {
        html: 'IDEAS THAT<br><span>TURN INTO</span><br>EXPERIENCES<span class="services-hero__period">.</span>'
      },
      ".services-hero__description p": "I develop creative and digital solutions that bring design, technology, and communication together to turn ideas into purposeful projects.",
      ".services-hero__link": {
        html: 'EXPLORE SERVICES <span>↓</span>'
      },
      ".services-hero__bottom span:first-child": "CREATIVITY MEETS TECHNOLOGY",
      ".services-hero__bottom span:last-child": "INSEPTION / CREATIVE STUDIO",
      ".services-section__eyebrow": "WHAT I CAN DO",
      ".services-section__heading h2": {
        html: 'SERVICES<span>.</span>'
      },
      ".services-section__heading > p": "Every project starts with a different need. These are the areas where I can help you.",
      ".service-card__category": [
        "DIGITAL DEVELOPMENT", "VISUAL DESIGN", "MULTIMEDIA PRODUCTION"
      ],
      ".service-card h3": [
        { html: 'WEB <span>DEVELOPMENT</span>' },
        { html: 'DIGITAL <span>DESIGN</span>' },
        { html: 'MULTIMEDIA <span>COMMUNICATION</span>' }
      ],
      ".service-card__description": [
        "Functional, attractive, responsive websites that help showcase your business and connect with your customers.",
        "Visual identities and graphic assets that communicate your brand's personality consistently.",
        "Audiovisual content and visual storytelling to communicate ideas, projects, and experiences."
      ],
      ".service-card__details > span": "WHAT'S INCLUDED",
      ".service-card__details li": [
        "Landing pages and promotional websites",
        "Websites for small businesses",
        "Professional portfolios",
        "Digital catalogs",
        "Responsive design",
        "Forms and WhatsApp integration",
        "Figma design implementation",
        "Visual identity design",
        "Social media graphics",
        "UI interface design",
        "Presentation design",
        "Digital promotional materials",
        "Image composition and editing",
        "Video editing",
        "Audiovisual editing and post-production",
        "Audio cleanup and editing",
        "Animation and visual assets",
        "Content for digital platforms",
        "Audiovisual storytelling and structuring"
      ],
      ".service-card__link": {
        html: "LET'S TALK ABOUT YOUR PROJECT <span>↗</span>"
      },
      ".services-process__heading > span": "02 / WORKING METHOD",
      ".services-process__heading h2": {
        html: 'FROM IDEA<br><span>TO OUTCOME.</span>'
      },
      ".services-process__heading p": "An organized process to understand your needs, develop a solution, and deliver a clear result.",
      ".process-item h3": ["LISTEN", "PLAN", "CREATE", "DELIVER"],
      ".process-item p": [
        "Understand your idea, your goals, and the needs you want to address.",
        "Define the scope, features, resources, and work plan.",
        "Design and develop the solution, keeping you updated throughout the process.",
        "Review the details and deliver the project as agreed."
      ],
      ".services-value__eyebrow": "MORE THAN A SERVICE",
      ".services-value__content h2": {
        html: 'CREATIVITY<br><span>WITH PURPOSE.</span>'
      },
      ".services-value__content p": "Every project deserves a solution designed for its context. My approach combines creativity, visual judgment, and technology to build useful, cohesive digital experiences.",
      ".services-value__tags span": ["DESIGN", "TECHNOLOGY", "COMMUNICATION"],
      ".services-contact__eyebrow": "INSEPTION / LET'S START SOMETHING",
      ".services-contact h2": {
        html: 'HAVE AN<br><span>IDEA IN MIND?</span>'
      },
      ".services-contact > p": "Tell me what you want to create. We'll review your idea, define what you need, and build a proposal to bring it to life.",
      ".services-contact__button": {
        html: 'REQUEST A PROPOSAL <span>↗</span>'
      },
      ".services-contact__note": "LET'S TALK ABOUT YOUR NEXT PROJECT",
      ".services-footer__back > span:nth-child(2)": "PREVIOUS / EXPERIENCE",
      ".services-footer__brand > span": "CREATIVE PORTFOLIO / 2026",
      ".services-footer__next > span:first-child": "CONTACT / NEXT"
    }
  };

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const translatedValue = Array.isArray(value) ? value[index] : value;

      if (translatedValue === undefined) return;

      if (
        element.matches(".expertise-skills__list li") &&
        Array.isArray(value)
      ) {
        const number = element.querySelector("span");
        element.textContent = translatedValue;

        if (number) {
          element.prepend(number);
        }

        return;
      }

      if (
        typeof translatedValue === "object" &&
        translatedValue !== null &&
        translatedValue.html
      ) {
        element.innerHTML = translatedValue.html;
        return;
      }

      element.textContent = translatedValue;
    });
  };

  const applyLanguage = (language) => {
    const selectedLanguage =
      translations[language] ? language : DEFAULT_LANGUAGE;

    document.documentElement.lang = selectedLanguage;

    const pageTranslations = translations[selectedLanguage];

    Object.entries(pageTranslations).forEach(([selector, value]) => {
      setText(selector, value);
    });

    const pageMetadata = {
      projects: {
        es: {
          title: "Proyectos | INSEPTION",
          description: "Proyectos de INSEPTION: desarrollo web, diseño digital, producción audiovisual y creación de contenido."
        },
        en: {
          title: "Projects | INSEPTION",
          description: "INSEPTION projects: web development, digital design, audiovisual production, and content creation."
        }
      },
      experience: {
        es: {
          title: "Experiencia y Formación | INSEPTION",
          description: "Experiencia profesional, formación académica, habilidades y herramientas de INSEPTION."
        },
        en: {
          title: "Experience & Education | INSEPTION",
          description: "Professional experience, academic background, skills, and tools of INSEPTION."
        }
      },
      services: {
        es: {
          title: "Servicios | INSEPTION",
          description: "Servicios de desarrollo web, diseño digital y comunicación multimedia de INSEPTION."
        },
        en: {
          title: "Services | INSEPTION",
          description: "INSEPTION services in web development, digital design, and multimedia communication."
        }
      }
    };

    let currentPage = null;

    if (document.body.classList.contains("projects-page")) {
      currentPage = "projects";
    } else if (document.body.classList.contains("experience-page")) {
      currentPage = "experience";
    } else if (document.body.classList.contains("services-page")) {
      currentPage = "services";
    }

    if (currentPage) {
      const metadata = pageMetadata[currentPage][selectedLanguage];
      document.title = metadata.title;

      const description = document.querySelector(
        'meta[name="description"]'
      );

      if (description) {
        description.setAttribute("content", metadata.description);
      }
    }

    const accessibleLabels = [
      {
        selector: ".menu-toggle",
        attribute: "aria-label",
        es: "Abrir menú",
        en: "Open menu"
      },
      {
        selector: ".language-selector__toggle",
        attribute: "aria-label",
        es: "Seleccionar idioma",
        en: "Select language"
      },
      {
        selector: ".language-selector__toggle",
        attribute: "title",
        es: "Cambiar idioma",
        en: "Change language"
      },
      {
        selector: ".navigation",
        attribute: "aria-label",
        es: "Navegación principal",
        en: "Main navigation"
      },
      {
        selector: ".hero__socials",
        attribute: "aria-label",
        es: "Redes sociales",
        en: "Social media"
      },
      {
        selector: ".about-header__brand, .expertise-header__brand, .projects-header__brand, .experience-header__brand, .services-header__brand",
        attribute: "aria-label",
        es: "Volver al inicio de INSEPTION",
        en: "Back to INSEPTION home"
      }
    ];

    accessibleLabels.forEach(({ selector, attribute, es, en }) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.setAttribute(
          attribute,
          selectedLanguage === "en" ? en : es
        );
      });
    });

    const portrait = document.querySelector(".about-portrait__image");

    if (portrait) {
      portrait.setAttribute(
        "alt",
        selectedLanguage === "en"
          ? "Illustration of Andrés Cervantes in halftone comic style"
          : "Ilustración de Andrés Cervantes en estilo cómic halftone"
      );
    }

    const projectAltTexts = {
      es: [
        "Diseño de la página web de Dulce Arte",
        "Portada visual de Enemigo Público Zero",
        "Diseño de escenarios de Enemigo Público Zero",
        "Concepto general y guion literario del proyecto",
        "Captura de edición audiovisual de Enemigo Público Zero",
        "Segundo recurso audiovisual del proyecto",
        "Tercer recurso audiovisual del proyecto",
        "Recurso visual de Sinapseed",
        "Segundo recurso visual de Sinapseed",
        "Tercer recurso visual de Sinapseed"
      ],
      en: [
        "Dulce Arte website design",
        "Visual cover for Enemigo Público Zero",
        "Environment design for Enemigo Público Zero",
        "General concept and literary script of the project",
        "Audiovisual editing screenshot from Enemigo Público Zero",
        "Second audiovisual resource from the project",
        "Third audiovisual resource from the project",
        "Visual asset from Sinapseed",
        "Second visual asset from Sinapseed",
        "Third visual asset from Sinapseed"
      ]
    };

    document.querySelectorAll(".projects-main .project img").forEach((image, index) => {
      const alt = projectAltTexts[selectedLanguage][index];

      if (alt) {
        image.setAttribute("alt", alt);
      }
    });

    const portfolioDownload = document.querySelector(
      'a[download="Andres-Cervantes-Portfolio.pdf"]'
    );

    if (portfolioDownload) {
      portfolioDownload.setAttribute(
        "aria-label",
        selectedLanguage === "en"
          ? "Download portfolio PDF"
          : "Descargar portafolio PDF"
      );

      portfolioDownload.setAttribute(
        "title",
        selectedLanguage === "en"
          ? "Download portfolio"
          : "Descargar portafolio"
      );
    }

    const cvDownload = document.querySelector(
      'a[download="Andres-Cervantes-CV.pdf"]'
    );

    if (cvDownload) {
      cvDownload.setAttribute(
        "aria-label",
        selectedLanguage === "en"
          ? "Download resume PDF"
          : "Descargar curriculum vitae PDF"
      );

      cvDownload.setAttribute(
        "title",
        selectedLanguage === "en" ? "Download CV" : "Descargar CV"
      );
    }

    options?.forEach((option) => {
      option.setAttribute(
        "aria-pressed",
        String(option.dataset.language === selectedLanguage)
      );
    });

    document.dispatchEvent(
      new CustomEvent("languageChange", {
        detail: { language: selectedLanguage }
      })
    );
  };

  const closeSelector = () => {
    if (!selector || !toggle) return;

    selector.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  if (selector && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = selector.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    options?.forEach((option) => {
      option.addEventListener("click", () => {
        const language = option.dataset.language;

        if (!translations[language]) return;

        localStorage.setItem(LANGUAGE_KEY, language);
        applyLanguage(language);
        closeSelector();
      });
    });

    document.addEventListener("click", (event) => {
      if (!selector.contains(event.target)) {
        closeSelector();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSelector();
        toggle.focus();
      }
    });
  }

  const savedLanguage =
    localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

  applyLanguage(savedLanguage);
});
